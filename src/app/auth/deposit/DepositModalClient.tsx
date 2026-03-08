"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaTimes, FaBitcoin } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function DepositModal() {
    const router = useRouter();

    const [tab, setTab] = useState("deposit");
    const [currency, setCurrency] = useState("BTC");
    const [network, setNetwork] = useState("Bitcoin");
    const [amount, setAmount] = useState("");

    const depositAddress = "bc1qlt...exampleaddress123";

    const copyAddress = () => {
        navigator.clipboard.writeText(depositAddress);
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
        flex-col
        shadow-2xl
        border border-gray-800
        relative
      ">

                {/* CLOSE */}
                <button
                    onClick={() => router.back()}
                    className="absolute right-8 cursor-pointer top-8 text-gray-400 hover:text-white transition z-10"
                >
                    ✕
                </button>

                {/* HEADER */}
                <div className="p-6 border-b border-gray-800">

                    {/* TABS */}
                    <div className="flex  gap-3 bg-[#111726] p-2 rounded-xl w-fit">

                        {["deposit", "withdraw", "buy crypto", "tip", "redeem"].map((t) => (
                            <button
                                key={t}
                                onClick={() => setTab(t)}
                                className={`px-4 cursor-pointer py-2 rounded-lg text-sm capitalize transition ${tab === t
                                    ? "bg-gradient-to-r from-[#fcad4c] via-[#fb8a48] to-[#ef4c48] text-black"
                                    : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                {t}
                            </button>
                        ))}

                    </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 overflow-y-auto">

                    {/* ================= DEPOSIT ================= */}

                    {tab === "deposit" && (
                        <div className="grid md:grid-cols-3 gap-6">

                            <div className="md:col-span-2 space-y-6">

                                {/* SELECT CURRENCY */}
                                <div>
                                    <p className="text-gray-400 mb-2">
                                        1 Select Currency
                                    </p>

                                    <div className="relative w-full">
                                        <select
                                            value={currency}
                                            onChange={(e) => setCurrency(e.target.value)}
                                            className="w-full p-4 rounded-xl bg-[#111726] border border-gray-700 outline-none appearance-none"
                                        >
                                            <option value="BTC">BTC - Bitcoin</option>
                                            <option value="ETH">ETH - Ethereum</option>
                                            <option value="USDT">USDT - Tether</option>
                                        </select>
                                        <span className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-white">
                                            <RiArrowDropDownLine size={35} />
                                        </span>
                                    </div>
                                </div>

                                {/* SELECT NETWORK */}
                                <div>
                                    <p className="text-gray-400 mb-2">
                                        2 Select Network
                                    </p>

                                    <div className="relative w-full">
                                        <select
                                            value={network}
                                            onChange={(e) => setNetwork(e.target.value)}
                                            className="w-full p-4 rounded-xl bg-[#111726] border appearance-none border-gray-700 outline-none"
                                        >
                                            <option>Bitcoin</option>
                                            <option>ERC20</option>
                                            <option>TRC20</option>
                                        </select>
                                        <span className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-white">
                                            <RiArrowDropDownLine size={35} />
                                        </span>
                                    </div>
                                </div>

                                {/* ADDRESS */}
                                <div>

                                    <p className="text-gray-400 mb-2">
                                        3 Deposit Address
                                    </p>

                                    <div className="bg-[#111726] p-4 rounded-xl border border-gray-700">

                                        <div className="flex justify-between items-center mb-4 bg-[#0B0F1A] p-3 rounded-lg">

                                            <span className="text-sm break-all">
                                                {depositAddress}
                                            </span>

                                            <button
                                                onClick={copyAddress}
                                                className="text-sm text-primary hover:text-white"
                                            >
                                                Copy
                                            </button>

                                        </div>

                                        <div className="flex gap-4 items-center">

                                            {/* QR */}
                                            <div className="bg-white p-2 rounded-lg">
                                                <img
                                                    src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${depositAddress}`}
                                                    alt="qr"
                                                />
                                            </div>

                                            <div className="text-red-400 text-sm">
                                                Send only {currency} on the {network} network.
                                                <br />
                                                <span className="text-gray-400">
                                                    Minimum deposit $15 • 1 confirmation required.
                                                </span>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* RIGHT SIDE */}
                            <div className="space-y-4">

                                <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 rounded-xl">
                                    <h3 className="text-lg font-semibold mb-2">
                                        VoltBet Gift Cards
                                    </h3>
                                    <p className="text-sm opacity-80">
                                        Purchase or Redeem
                                    </p>
                                </div>

                                <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-6 rounded-xl">
                                    <h3 className="text-lg font-semibold mb-2">
                                        Buy Crypto
                                    </h3>
                                    <p className="text-sm opacity-80">
                                        Easily buy crypto using card
                                    </p>
                                </div>

                            </div>

                        </div>
                    )}

                    {/* ================= WITHDRAW ================= */}

                    {tab === "withdraw" && (

                        <div className="max-w-md space-y-4">

                            <input
                                placeholder="Withdraw Address"
                                className="w-full p-4 rounded-xl bg-[#111726] border border-gray-700 outline-none"
                            />

                            <input
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="Amount"
                                className="w-full p-4 rounded-xl bg-[#111726] border border-gray-700 outline-none"
                            />

                            <button
                                className="
                  w-full
                  py-3
                  rounded-xl
                  font-semibold
                  bg-gradient-to-r from-[#fcad4c] via-[#fb8a48] to-[#ef4c48]
                  text-black
                  hover:scale-[1.02]
                  transition
                "
                            >
                                Withdraw
                            </button>

                        </div>

                    )}

                    {/* ================= BUY CRYPTO ================= */}

                    {tab === "buy crypto" && (
                        <div className="text-gray-400">
                            Buy crypto using debit card or bank transfer.
                        </div>
                    )}

                    {/* ================= TIP ================= */}

                    {tab === "tip" && (
                        <div className="text-gray-400">
                            Send tips to other users.
                        </div>
                    )}

                    {/* ================= REDEEM ================= */}

                    {tab === "redeem" && (
                        <div className="text-gray-400">
                            Redeem your gift cards.
                        </div>
                    )}

                </div>

            </div>

        </div>
    );
}