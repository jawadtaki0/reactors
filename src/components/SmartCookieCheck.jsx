import { useEffect, useState } from "react";
import axios from "axios";

export default function SmartCookieCheck() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    async function testCookies() {
      try {
        // 1. Ask backend to set cookie
        await axios.get(`${import.meta.env.VITE_API_URL}/auth/cookie-test`, {
          withCredentials: true,
        });

        // safari wait
        setTimeout(() => {
          // 3. Try to read cookie
          const hasCookie = document.cookie.includes("reactors_test_cookie");

          if (!hasCookie) {
            setShowPopup(true); // cookies blocked
          }
        }, 300);
      } catch (err) {
        setShowPopup(true);
      }
    }

    testCookies();
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[9999] flex justify-center items-center">
      <div className="bg-white rounded-xl p-6 max-w-md text-center">
        <h2 className="text-xl font-semibold mb-3 text-red-600">
          Cookies Are Disabled
        </h2>

        <p className="text-gray-700 text-sm mb-4">
          Your browser is blocking cookies. Google Login will not work unless
          cookies are enabled for this website.
        </p>

        <button
          onClick={() => setShowPopup(false)}
          className="mt-2 px-5 py-2 bg-[#631730] text-white rounded-lg hover:bg-[#B4182D] transition"
        >
          OK
        </button>
      </div>
    </div>
  );
}
