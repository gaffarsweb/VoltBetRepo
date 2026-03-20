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
export const getMyBalance = async () => {
  try {
    const response = await api.get("/balance/");
    return response.data;
  } catch (error: any) {
    return error.response?.data || error.message || error;
  }
};

// network
// 🪙 Get All Tokens
export const getAllTokensApi = async () => {
  try {
    const res = await api.get("/network/tokens");
    return res.data;
  } catch (err: any) {
    return err.response?.data;
  }
};

// 🌐 Get Tokens by Network
export const getTokensByNetworkApi = async (networkId: string) => {
  try {
    const res = await api.get(`/network/token/network/${networkId}`);
    return res.data;
  } catch (err: any) {
    return err.response?.data;
  }
};

// 🌐 Get All Networks
export const getNetworksApi = async () => {
  try {
    const res = await api.get("/network");
    return res.data;
  } catch (err: any) {
    return err.response?.data;
  }
};

export const getWalletApi = async (networkId: string, tokenSymbol: string) => {
  try {
    const res = await api.get(`/wallet?networkId=${networkId}&tokenSymbol=${tokenSymbol}`);
    return res.data;
  } catch (error: any) {
    return error.response?.data;
  }
};