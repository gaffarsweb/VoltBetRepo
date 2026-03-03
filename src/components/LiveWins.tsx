"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface Win {
  id: number;
  user: string;
  game: string;
  amount: string;
  image: string;
}

const CARD_WIDTH = 196; // 180px + gap

export default function LiveWins() {
  const [wins, setWins] = useState<Win[]>([]);
  const controls = useAnimation();

  useEffect(() => {
    const demoWins: Win[] = [
      {
        id: 1,
        user: "BEEF...",
        game: "Rolling in Treasures",
        amount: "$18.08",
        image:
          "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600",
      },
      {
        id: 2,
        user: "Mazk...",
        game: "Drums of Fortune",
        amount: "$1.76",
        image:
          "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?q=80&w=600",
      },
      {
        id: 3,
        user: "Dizz...",
        game: "Roulette",
        amount: "$0.20",
        image:
          "https://images.unsplash.com/photo-1606166325682-08c1a9bfb6fa?q=80&w=600",
      },
    ];

    setWins(demoWins);

   const interval = setInterval(async () => {
  const newWin: Win = {
    id: Date.now(),
    user: "User" + Math.floor(Math.random() * 999),
    game: "Volt Crash",
    amount: "$" + (Math.random() * 100).toFixed(2),
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600",
  };

  // 1️⃣ Move container left instantly
  controls.set({ x: -CARD_WIDTH });

  // 2️⃣ Add new item
  setWins((prev) => [newWin, ...prev]);

  // Wait for DOM update
  await new Promise((resolve) => setTimeout(resolve, 50));

  // 3️⃣ Animate back to normal position
  await controls.start({
    x: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  });

  // 4️⃣ Remove last element
  setWins((prev) => prev.slice(0, 9));
}, 4000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <section className="w-full">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
        <h2 className="text-xl font-semibold">Live Wins</h2>
      </div>

      <div className="overflow-hidden w-full">
        <motion.div
          animate={controls}
          className="flex gap-4"
        >
          {wins.map((win) => (
            <div
              key={win.id}
              className="w-[180px] flex-shrink-0 bg-card rounded-xl overflow-hidden border border-gray-800 hover:border-primary transition cursor-pointer"
            >
              <img
                src={win.image}
                className="h-32 w-full object-cover"
                alt={win.game}
              />

              <div className="p-3">
                <p className="text-sm font-semibold truncate">
                  {win.game}
                </p>

                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-400 text-xs">
                    {win.user}
                  </span>
                  <span className="text-green-400 font-semibold text-sm">
                    {win.amount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}