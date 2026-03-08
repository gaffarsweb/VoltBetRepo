"use client";

import { getMyBalance } from "@/lib/api";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface User {
  id: string;
  username: string;
  balance: number;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (data: { user: User; token: string }) => void;
  logout: () => void;
  setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any | null>(null);
  const [token, setToken] = useState<any | null>(null);

  // 🔄 Restore auth on refresh
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken) {
      setToken(storedToken);
    }

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse stored user data:", e);
        localStorage.removeItem("user");
      }
    }
  }, []);

  useEffect(() => {
    if (user) {
      const fetchBalance = async () => {
        const updatedbalance = await getMyBalance();
        if (updatedbalance && updatedbalance.data) {
          setUser((prevUser: any) => {
            if (!prevUser) return prevUser;
            return {
              ...prevUser,
              balance: Number(updatedbalance.data.balance).toFixed(2), // Randomly increase balance
            };
          });
        }
      };
      fetchBalance(); // Initial fetch
      // Simulate balance update
      const interval = setInterval(fetchBalance, 60000); // Update every 1 min
      return () => clearInterval(interval);
    }
  }, [user?.id])

  // 🔐 Login
  const login = (data: any) => {
    setUser(data.user);
    setToken(data.token);

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
  };

  // 🚪 Logout
  const logout = () => {
    setUser(null);
    setToken(null);

    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be inside AuthProvider");
  return context;
}