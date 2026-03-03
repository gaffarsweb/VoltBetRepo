"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import {
  FaBell,
  FaGift,
  FaUserCircle,
  FaChevronDown,
} from "react-icons/fa";

export default function Header() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <header className="h-16 bg-gradient-to-r from-[#0B0F1A] via-[#141B2D] to-[#0B0F1A] flex items-center justify-between px-6 border-b border-gray-800 relative">

      {/* Logo */}
      <div
        className="text-xl font-bold cursor-pointer"
        onClick={() => router.push("/")}
      >
        ⚡ VoltBet
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {!user ? (
          <>
            <button
              onClick={() => router.push("/auth/login")}
              className="px-4 cursor-pointer py-2 rounded-lg border border-gray-700 bg-[#111726] hover:border-primary transition"
            >
              Login
            </button>

            <button
              onClick={() => router.push("/auth/register")}
              className="px-4 cursor-pointer py-2 rounded-lg bg-gradient-to-r from-[#fcad4c] via-[#fb8a48] to-[#ef4c48] text-black font-semibold hover:scale-105 transition"
            >
              Register
            </button>
          </>
        ) : (
          <>
            {/* Balance Dropdown */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[#111726] rounded-lg border border-gray-700 cursor-pointer hover:border-primary transition">
              <span className="font-semibold text-green-400">
                ${user.balance}
              </span>
              <FaChevronDown className="text-xs text-gray-400" />
            </div>

            {/* Deposit Button */}
            <button className="px-4 cursor-pointer py-2 bg-green-600 hover:bg-green-500 rounded-lg font-semibold transition">
              Deposit
            </button>

            {/* Rewards */}
            <div className="relative p-3 bg-[#111726] rounded-lg border border-gray-700 hover:border-primary cursor-pointer transition">
              <FaGift />
              <span className="absolute -top-1 -right-1 bg-green-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                3
              </span>
            </div>

            {/* Notifications */}
            <div className="p-3 bg-[#111726] rounded-lg border border-gray-700 hover:border-primary cursor-pointer transition">
              <FaBell />
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <div
                onClick={() => setOpenProfile(!openProfile)}
                className="flex items-center gap-2 p-2 bg-[#111726] rounded-lg border border-gray-700 cursor-pointer hover:border-primary transition"
              >
                <FaUserCircle size={20} />
                <FaChevronDown className="text-xs" />
              </div>

              {openProfile && (
                <div className="absolute right-0 mt-2 w-48 bg-[#1E293B] border border-gray-700 rounded-xl shadow-lg overflow-hidden">
                  <div
                    onClick={() => router.push("/profile")}
                    className="px-4 py-3 hover:bg-[#334155] cursor-pointer transition"
                  >
                    Profile
                  </div>
                  <div
                    onClick={() => router.push("/wallet")}
                    className="px-4 py-3 hover:bg-[#334155] cursor-pointer transition"
                  >
                    Wallet
                  </div>
                  <div
                    onClick={logout}
                    className="px-4 py-3 hover:bg-red-600 cursor-pointer transition"
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </header>
  );
}