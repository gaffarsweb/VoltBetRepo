"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function LoginModal() {
  const router = useRouter();
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login({
      id: "1",
      username: username || "voltUser",
      balance: 1000,
    });

    router.push("/");
  };

 return (
  <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    
    <div className="
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
    ">

      {/* Close Button */}
      <button
        onClick={() => router.back()}
        className="absolute right-8 top-4 text-gray-400 hover:text-white transition z-10"
      >
        ✕
      </button>

      {/* LEFT SIDE IMAGE */}
      <div className="hidden md:block md:w-1/2 relative">
        <img
          src="https://rainbet.com/_next/image?url=https%3A%2F%2Fassets.rbgcdn.com%2F223k2P3%2Fraw%2Fbanners%2Fregister-banner.webp&w=1920&q=75"
          className="h-full w-full object-cover"
          alt="Login Banner"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="
       w-full
            md:w-1/2
            p-6 sm:p-8 md:p-10
            overflow-y-auto
      ">

        {/* Tabs */}
        <div className="flex gap-6 mb-6 md:mb-8 border-b border-gray-700 pb-3 text-sm md:text-base">
          <button className="text-white border-b-2 border-primary pb-2">
            Login
          </button>
          <button
            onClick={() => router.push("/auth/register")}
            className="cursor-pointer text-gray-400 hover:text-white"
          >
            Register
          </button>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Log In to your Account
        </h2>

        {/* Username */}
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="
            w-full 
            mb-4 
            p-3 md:p-4 
            rounded-xl 
            bg-[#111726] 
            border border-gray-700 
            focus:border-primary 
            outline-none 
            transition
          "
        />

        {/* Password */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="
            w-full 
            mb-4 md:mb-6 
            p-3 md:p-4 
            rounded-xl 
            bg-[#111726] 
            border border-gray-700 
            focus:border-primary 
            outline-none 
            transition
          "
        />

        {/* Forgot */}
        <div className="text-right text-xs md:text-sm text-gray-400 mb-4 md:mb-6 cursor-pointer hover:text-primary">
          Forgot password?
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="
            w-full 
            py-3 md:py-4  mb-3
            rounded-xl 
            font-semibold 
            bg-gradient-to-r from-[#fcad4c] via-[#fb8a48] to-[#ef4c48]
            text-black
            transition-all duration-300
            hover:scale-[1.02]
            cursor-pointer
          "
        >
          Login
        </button>

         {/* DIVIDER */}
          <div className="flex items-center gap-4 my-4">
            <div className="flex-1 h-[1px] bg-gray-700"></div>
            <span className="text-gray-400 text-sm">Or sign in with</span>
            <div className="flex-1 h-[1px] bg-gray-700"></div>
          </div>

<div className="grid grid-cols-2 gap-4">

  {/* Google */}
  <button className="
    flex items-center justify-center gap-3
    py-3 rounded-xl
    bg-[#111726]
    border border-gray-700
    hover:border-primary
    hover:bg-[#1a2235]
    transition
    cursor-pointer
  ">
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
      className="w-5 h-5"
      alt="Google"
    />
    <span className="text-sm">Google</span>
  </button>

  {/* Facebook */}
  <button className="
    flex items-center justify-center gap-3
    py-3 rounded-xl
    bg-[#111726]
    border border-gray-700
    hover:border-primary
    hover:bg-[#1a2235]
    transition
    cursor-pointer
  ">
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
      className="w-5 h-5"
      alt="Facebook"
    />
    <span className="text-sm">Facebook</span>
  </button>

  {/* Telegram */}
  <button className="
    flex items-center justify-center gap-3
    py-3 rounded-xl
    bg-[#111726]
    border border-gray-700
    hover:border-primary
    hover:bg-[#1a2235]
    transition
    cursor-pointer
  ">
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/telegram/telegram-original.svg"
      className="w-5 h-5"
      alt="Telegram"
    />
    <span className="text-sm">Telegram</span>
  </button>

  {/* Discord */}
  <button className="
    flex items-center justify-center gap-3
    py-3 rounded-xl
    bg-[#111726]
    border border-gray-700
    hover:border-primary
    hover:bg-[#1a2235]
    transition
    cursor-pointer
  ">
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg"
      className="w-5 h-5"
      alt="Discord"
    />
    <span className="text-sm">Discord</span>
  </button>

</div>

      </div>
    </div>
  </div>
);
}