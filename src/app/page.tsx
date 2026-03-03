import LiveWins from "@/components/LiveWins";

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className=" bg-gradient-to-r from-[#0B0F1A] via-[#141B2D] to-[#0B0F1A] p-10 rounded-2xl overflow-hidden border border-gray-800">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-4">
            ⚡ Welcome to <span className="text-primary">VoltBet</span>
          </h1>
          <p className="text-gray-400 mb-6">
            Bet Smart. Win Fast. Experience the next generation gaming platform.
          </p>

          <div className="flex gap-4">
            <button className="bg-primary cursor-pointer text-[#fa8148] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Play Now
            </button>

            <button className="bg-[#1E293B] cursor-pointer  px-6 py-3 rounded-xl text-white hover:bg-[#243044] transition">
              Explore Sports
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Categories</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <CategoryCard title="🎰 Casino" />
          <CategoryCard title="⚽ Sports" />
          <CategoryCard title="🔥 Live Bets" />
          <CategoryCard title="🃏 Originals" />
        </div>
      </section>

      {/* Live Wins Section */}
      <LiveWins />
    </div>
  );
}

/* -------- Components -------- */

function CategoryCard({ title }: { title: string }) {
  return (
    <div className="bg-card p-6 rounded-xl border border-gray-800 hover:border-primary hover:scale-105 transition cursor-pointer">
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
}