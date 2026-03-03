import api from "./axios";

// 🔑 LOGIN
export const loginApi = async (data: {
  username: string;
  password: string;
}) => {
  const response = await api.post("/auth/login", data);
  return response.data;
};

// 📝 REGISTER
export const registerApi = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  const response = await api.post("/auth/register", data);
  return response.data;
};

// 👤 Get Profile (Protected)
export const getProfileApi = async () => {
  const response = await api.get("/auth/me");
  return response.data;
};