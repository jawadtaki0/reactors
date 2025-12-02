import { useEffect } from "react";
import axios from "axios";

export default function SmartCookieCheck({ onBlocked }) {
  useEffect(() => {
    async function testCookies() {
      try {
        // Tell backend to set cookie
        await axios.get(`${import.meta.env.VITE_API_URL}/auth/cookie-test`, {
          withCredentials: true,
        });

        // Wait for Safari / Chrome to save cookie
        setTimeout(async () => {
          try {
            const verify = await axios.get(
              `${import.meta.env.VITE_API_URL}/auth/cookie-verify`,
              { withCredentials: true }
            );

            if (!verify.data.cookieWorks) {
              onBlocked();
            }
          } catch {
            onBlocked();
          }
        }, 300);
      } catch {
        onBlocked();
      }
    }

    testCookies();
  }, []);

  return null;
}
