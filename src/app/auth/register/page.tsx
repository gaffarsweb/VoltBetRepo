"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function RegisterModal() {
  const router = useRouter();
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // 🔥 Later yaha backend API call aayega

    login({
      id: Date.now().toString(),
      username,
      balance: 500, // demo welcome bonus
    });

    router.push("/");
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-card w-[420px] rounded-2xl p-8 relative border border-gray-800 shadow-2xl">

        {/* Close Button */}
        <button
          onClick={() => router.back()}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-6">
          Create Account
        </h2>

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg bg-[#111726] border border-gray-800 focus:border-primary outline-none transition"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 rounded-lg bg-[#111726] border border-gray-800 focus:border-primary outline-none transition"
        />

        {/* Register Button */}
        <button
          onClick={handleRegister}
          className="
            w-full py-3 rounded-lg font-semibold
            bg-gradient-to-r from-[#00FFB2] via-[#00d4ff] to-[#00FFB2]
            text-black
            transition-all duration-300
            hover:scale-105
            hover:shadow-[0_0_20px_rgba(0,255,178,0.6)]
          "
        >
          Register
        </button>

        {/* Switch to Login */}
        <div className="text-sm text-gray-400 mt-6 text-center">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/auth/login")}
            className="text-primary cursor-pointer hover:underline"
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
}