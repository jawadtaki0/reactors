import { createContext, useContext, useEffect, useState } from "react";
import { authApi } from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children, onCookieBlocked }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mfaData, setMfaData] = useState(null);

  // fetch user on load
  const fetchUser = async () => {
    try {
      const res = await authApi.getMe();
      setUser(res.data.user);
    } catch (err) {
      const isCookieError =
        err.response?.status === 401 ||
        err.message?.includes("cookie") ||
        err.message?.includes("blocked");

      if (isCookieError && typeof onCookieBlocked === "function") {
        onCookieBlocked();
      }

      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const loginWithGoogle = () => {
    window.location.href = authApi.getGoogleUrl();
  };

  const register = async (data) => {
    try {
      const res = await authApi.register(data);
      return {
        success: true,
        userId: res.data.userId,
        email: res.data.email,
        mfa: true,
      };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || "Registration failed",
      };
    }
  };

  const login = async (data) => {
    try {
      const res = await authApi.login(data);

      if (res.data.mfa) {
        setMfaData({
          userId: res.data.userId,
          email: res.data.email,
          mode: "verify-login",
        });
        return { mfa: true };
      }

      setUser(res.data.user);
      return { success: true };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || "Login failed",
      };
    }
  };

  const verifyOtp = async ({ userId, otp }) => {
    try {
      const res = await authApi.verifyOtp({ userId, otp });
      setUser(res.data.user);
      setMfaData(null);
      return { success: true };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || "Invalid code",
      };
    }
  };

  const resendOtp = async (userId) => {
    try {
      await authApi.resendOtp({ userId });
      return { success: true };
    } catch {
      return { success: false };
    }
  };

  const logout = async () => {
    try {
      await authApi.logout();
    } catch {}
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        mfaData,
        setMfaData,
        fetchUser,
        loginWithGoogle,
        register,
        login,
        verifyOtp,
        resendOtp,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
