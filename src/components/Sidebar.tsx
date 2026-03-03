"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  FaHome,
  FaDice,
  FaFutbol,
  FaFire,
  FaGift,
  FaCrown,
  FaUsers,
  FaBars,
} from "react-icons/fa";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { label: "Home", icon: <FaHome />, path: "/" },
    { label: "Casino", icon: <FaDice />, path: "/casino" },
    { label: "Sports", icon: <FaFutbol />, path: "/sports" },
    { label: "Live Bets", icon: <FaFire />, path: "/live" },
    { label: "Promotions", icon: <FaGift />, path: "/promotions" },
    { label: "VIP Club", icon: <FaCrown />, path: "/vip" },
    { label: "Affiliate", icon: <FaUsers />, path: "/affiliate" },
  ];

  return (
    <aside
      className={`
        ${collapsed ? "w-20" : "w-64"}
        bg-[#0F172A]
        border-r border-gray-800
        transition-all duration-300
        h-screen
        p-4
        hidden md:flex
        flex-col
      `}
    >
      {/* Top Section */}
      <div
        className={`flex items-center ${
          !collapsed ? "justify-between" : "justify-center"
        } mb-8`}
      >
        {!collapsed && (
          <h1 className="text-2xl font-bold text-primary">
            ⚡ VoltBet
          </h1>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-400 hover:text-primary cursor-pointer"
        >
          <FaBars />
        </button>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-4 text-gray-300">
        {menuItems.map((item) => (
          <MenuItem
            key={item.path}
            icon={item.icon}
            label={item.label}
            collapsed={collapsed}
            active={pathname === item.path}
            onClick={() => router.push(item.path)}
          />
        ))}
      </nav>
    </aside>
  );
}

function MenuItem({
  icon,
  label,
  collapsed,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`
        flex items-center gap-3 p-3 rounded-lg cursor-pointer transition
        ${
          active
            ? "bg-[#1E293B] text-[#fa8148]"
            : "hover:bg-[#1E293B] hover:text-[#fa8148]"
        }
      `}
    >
      <span className="text-lg">{icon}</span>
      {!collapsed && <span>{label}</span>}
    </div>
  );
}