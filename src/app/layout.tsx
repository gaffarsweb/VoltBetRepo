import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-white">
        <AuthProvider>
        <div className="flex h-screen">
          <Sidebar />

          <div className="flex-1 flex flex-col min-w-0">
            <Header />

            <main className="flex-1 overflow-y-auto  p-6">
              {children}
              <Toaster position="top-right" />
            </main>
          </div>
        </div>
        </AuthProvider>
      </body>
    </html>
  );
}