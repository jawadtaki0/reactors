import { useEffect } from "react";
import axios from "axios";

export default function SmartCookieCheck({ onBlocked }) {
  useEffect(() => {
    async function testCookies() {
      try {
        await axios.get(`${import.meta.env.VITE_API_URL}/auth/cookie-test`, {
          withCredentials: true,
        });

        // Safari needs small delay
        setTimeout(() => {
          const hasCookie = document.cookie.includes("reactors_test_cookie");
          if (!hasCookie) {
            onBlocked(); // trigger popup
          }
        }, 300);
      } catch (err) {
        onBlocked(); // also blocked
      }
    }

    testCookies();
  }, []);

  return null;
}
