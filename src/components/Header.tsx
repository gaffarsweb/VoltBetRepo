"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <header className="h-16 bg-card flex items-center justify-between px-6 border-b border-gray-800">
      <div className="text-lg font-semibold">VoltBet</div>

      <div className="flex items-center gap-4">
        {!user ? (
          <>
            <button
              onClick={() => router.push("/auth/login")}
              className="px-4 cursor-pointer py-2 bg-gradient-to-r from-[#111726] via-[#141B2D] border border-gray-800 to-[#111726] rounded-lg   "
            >
              Login
            </button>

            <button
              onClick={() => router.push("/auth/register")}
              className="px-4 cursor-pointer py-2 bg-gradient-to-r from-[#111726] via-[#141B2D] border border-gray-800 to-[#111726] rounded-lg  text-white font-semibold"
            >
              Register
            </button>
          </>
        ) : (
          <>
            <div className="px-4 py-2 bg-gray-700 rounded-lg">
              ${user.balance}
            </div>

            <button
              onClick={logout}
              className="px-4 py-2 rounded-lg bg-red-600"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
}