"use client";

import { useState } from "react";
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

  return (
    <aside
      className={`
        ${collapsed ? "w-20" : "w-64"}
        bg-card 
        border-r border-gray-800 
        transition-all duration-300 
        h-screen
        p-4
        hidden md:flex
        flex-col
      `}
    >
      {/* Top Section */}
      <div className={`flex items-center ${!collapsed ? 'justify-between':"justify-center"}  mb-8`}>
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
        <MenuItem icon={<FaHome />} label="Home" collapsed={collapsed} />
        <MenuItem icon={<FaDice />} label="Casino" collapsed={collapsed} />
        <MenuItem icon={<FaFutbol />} label="Sports" collapsed={collapsed} />
        <MenuItem icon={<FaFire />} label="Live Bets" collapsed={collapsed} />
        <MenuItem icon={<FaGift />} label="Promotions" collapsed={collapsed} />
        <MenuItem icon={<FaCrown />} label="VIP Club" collapsed={collapsed} />
        <MenuItem icon={<FaUsers />} label="Affiliate" collapsed={collapsed} />
      </nav>
    </aside>
  );
}

function MenuItem({
  icon,
  label,
  collapsed,
}: {
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
}) {
  return (
    <div
      className="
        flex items-center 
        gap-3 
        p-3 
        rounded-lg 
        cursor-pointer 
        hover:bg-[#1E293B] 
        hover:text-primary 
        transition
        hover:text-[#fa8148]
      "
    >
      <span className="text-lg">{icon}</span>
      {!collapsed && <span>{label}</span>}
    </div>
  );
}