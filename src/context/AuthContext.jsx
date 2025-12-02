import { createContext, useContext, useEffect, useState } from "react";
import { authApi } from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children, onCookieBlocked }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mfaData, setMfaData] = useState(null);

  // fetch on load
  const fetchUser = async () => {
    try {
      const res = await authApi.getMe();
      setUser(res.data.user);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // google login
  const loginWithGoogle = () => {
    window.location.href = authApi.getGoogleUrl();
  };

  // email/pass login
  const login = async (data) => {
    try {
      const res = await authApi.login(data);

      // MFA
      if (res.data.mfa) {
        setMfaData({
          userId: res.data.userId,
          email: res.data.email,
          mode: "verify-login",
        });
        return { mfa: true };
      }

      // Success
      setUser(res.data.user);
      return { success: true };
    } catch (err) {
      const rawMsg = err.response?.data?.message?.toLowerCase() || "";

      const cookieBlocked =
        rawMsg.includes("cookie") ||
        rawMsg.includes("blocked") ||
        rawMsg.includes("session") ||
        (err.response?.status === 401 && !err.response?.data?.user);

      if (cookieBlocked && typeof onCookieBlocked === "function") {
        onCookieBlocked(); // popup appears only now
      }

      return {
        success: false,
        message: err.response?.data?.message || "Login failed",
      };
    }
  };

  // veify otp
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

  // resend otp
  const resendOtp = async (userId) => {
    try {
      await authApi.resendOtp({ userId });
      return { success: true };
    } catch {
      return { success: false };
    }
  };

  // register
  const register = async (data) => {
    try {
      const res = await authApi.register(data);

      return {
        success: res.data.success ?? true,
        userId: res.data.userId,
        email: res.data.email,
        mfa: res.data.mfa,
        message: res.data.message,
      };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || "Registration failed",
      };
    }
  };

  // logout
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
