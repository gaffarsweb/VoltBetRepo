"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { registerApi } from "@/lib/api";
import toast from "react-hot-toast";

export default function RegisterModal() {
  const router = useRouter();
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (loading) return;
    try {
      setLoading(true);
      if (!username || !email || !password) {
        toast.error("Please fill all fields");
        return;
      }
      if (username.includes(" ")) {
        toast.error("Username cannot contain spaces");
        return;
      }
      if (username.length < 3) {
        toast.error("Username must be at least 3 characters");
        return;
      }
      if (!/\S+@\S+\.\S+/.test(email)) {
        toast.error("Please enter a valid email");
        return;
      }
      if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return;
      }
      if (!accepted) {
        toast.error("Please accept Terms & Conditions");
        return;
      }
      const response = await registerApi({ username, email, password });
      console.log('Register response:', response);
      if (response.success) {
        toast.success("Registration successful!");
        login({
          user: response?.data?.user,
          token: response?.data?.accessToken
        });
        router.push("/");
      } else {
        toast.error("Registration failed: " + response.message);
      }



    } catch (error) {
      console.error("Registration error:", error);
      toast.error("An error occurred during registration. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center z-50 p-4">

      {/* MODAL CONTAINER */}
      <div
        className="
          w-full
          max-w-[950px]
          max-h-[90vh]
          bg-gradient-to-r from-[#0B0F1A] via-[#141B2D] to-[#0B0F1A]
          rounded-2xl
          overflow-hidden
          flex
          flex-col md:flex-row
          shadow-2xl
          border border-gray-800
          relative
        "
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={() => router.back()}
          className="absolute right-8 top-4 text-gray-400 hover:text-white transition z-10"
        >
          ✕
        </button>

        {/* LEFT IMAGE (FIXED HEIGHT) */}
        <div className="hidden md:block md:w-1/2 relative">
          <img
            src="https://rainbet.com/_next/image?url=https%3A%2F%2Fassets.rbgcdn.com%2F223k2P3%2Fraw%2Fbanners%2Fregister-banner.webp&w=1920&q=75"
            className="h-full w-full object-cover"
            alt="Register Banner"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </div>

        {/* RIGHT FORM (SCROLLABLE ONLY HERE) */}
        <div
          className="
            w-full
            md:w-1/2
            p-6 sm:p-8 md:p-10
            overflow-y-auto
          "
        >

          {/* TABS */}
          <div className="flex gap-6 mb-6 border-b border-gray-700 pb-3 text-sm md:text-base">
            <button
              onClick={() => router.push("/auth/login")}
              className="cursor-pointer text-gray-400 hover:text-white"
            >
              Login
            </button>
            <button className="text-white border-b-2 border-primary pb-2">
              Register
            </button>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Create Your Account
          </h2>

          {/* USERNAME */}
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mb-4 p-3 md:p-4 rounded-xl bg-[#111726] border border-gray-700 focus:border-primary outline-none transition"
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-3 md:p-4 rounded-xl bg-[#111726] border border-gray-700 focus:border-primary outline-none transition"
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 p-3 md:p-4 rounded-xl bg-[#111726] border border-gray-700 focus:border-primary outline-none transition"
          />

          {/* TERMS */}
          <div className="flex items-center gap-3 mb-5">
            <input
              type="checkbox"
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
              className="w-4 h-4 accent-primary"
            />
            <span className="text-sm text-gray-400">
              I agree to the{" "}
              <span className="text-primary cursor-pointer hover:underline">
                Terms & Conditions
              </span>
            </span>
          </div>

          {/* REGISTER BUTTON */}
          <button
            disabled={loading}
            onClick={handleRegister}
            id="registerBtn"
            className="
            register-btn
              w-full
              py-3 md:py-4 mb-4
              rounded-xl
              font-semibold
              bg-gradient-to-r from-[#fcad4c] via-[#fb8a48] to-[#ef4c48]
              text-black
              transition-all duration-300
              hover:scale-[1.02]
              disabled:cursor-not-allowed disabled:opacity-70
              cursor-pointer
            "
          >
            {loading ? (
              <>
                Registering...
              </>
            ) : (
              "Register"
            )}
          </button>

          {/* DIVIDER */}
          <div className="flex items-center gap-4 my-4">
            <div className="flex-1 h-[1px] bg-gray-700"></div>
            <span className="text-gray-400 text-sm">Or sign up with</span>
            <div className="flex-1 h-[1px] bg-gray-700"></div>
          </div>

          {/* SOCIAL LOGIN */}
          <div className="grid grid-cols-2 gap-4">

            <SocialBtn
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              label="Google"
            />

            <SocialBtn
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
              label="Facebook"
            />

            <SocialBtn
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/telegram/telegram-original.svg"
              label="Telegram"
            />

            <SocialBtn
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg"
              label="Discord"
            />

          </div>

        </div>
      </div>
    </div>
  );
}

/* Reusable Social Button */
function SocialBtn({ icon, label }: { icon: string; label: string }) {
  return (
    <button
      className="
        flex items-center justify-center gap-3
        py-3 rounded-xl
        bg-[#111726]
        border border-gray-700
        hover:border-primary
        hover:bg-[#1a2235]
        transition
        cursor-pointer
      "
    >
      <img src={icon} className="w-5 h-5" alt={label} />
      <span className="text-sm">{label}</span>
    </button>
  );
}