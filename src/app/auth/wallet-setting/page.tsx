import React from "react";

const WalletSettingPage = () => {


    return (
        <>
            <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div>
                <h1 className="text-2xl font-bold mb-4">Wallet Settings</h1>
                <p className="text-gray-400 mb-6">Manage your wallet settings and preferences here.</p>
                <button className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg font-semibold transition">
                    Connect Wallet
                </button>
            </div>
            </div>
        </>
    )
}

export default WalletSettingPage;