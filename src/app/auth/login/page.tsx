"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginModal() {
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = () => {
    login({
      id: "1",
      username: "voltUser",
      balance: 1000,
    });

    router.push("/");
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-card p-8 rounded-2xl w-[400px] relative">
        <button
          onClick={() => router.back()}
          className="absolute right-4 top-4 text-gray-400"
        >
          ✕
        </button>

        <h2 className="text-2xl mb-6 font-semibold">Login</h2>

        <input
          placeholder="Username"
          className="w-full mb-4 p-3 rounded-lg bg-gray-800"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 rounded-lg bg-gray-800"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-primary text-black py-3 rounded-lg font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
}