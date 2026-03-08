import api from "./axios";

// 🔑 LOGIN
export const loginApi = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const response = await api.post("/auth/login", data);
    return response.data;
  } catch (error: any) {
    return error.response?.data;
  }
};

// 📝 REGISTER
export const registerApi = async (data: any) => {
  try {
    const response = await api.post("/auth/register", data);
    return response.data;
  } catch (error: any) {
    console.log("API Error:", error.response?.data || error.message || error);
    return error.response?.data;
  }
};

// 👤 Get Profile (Protected)
export const getProfileApi = async () => {
  const response = await api.get("/auth/me");
  return response.data;
};