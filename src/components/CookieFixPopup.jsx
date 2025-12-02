import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function CookieFixPopup({ show, onClose }) {
  const { theme } = useTheme();
  const [browser, setBrowser] = useState(null);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();

    if (/chrome/i.test(ua) && !/edg/i.test(ua) && !/opr/i.test(ua)) {
      setBrowser("chrome");
    } else if (/firefox/i.test(ua)) {
      setBrowser("firefox");
    } else if (/safari/i.test(ua) && !/chrome/i.test(ua)) {
      setBrowser("safari");
    } else if (/edg/i.test(ua)) {
      setBrowser("edge");
    } else if (/android/i.test(ua)) {
      setBrowser("android");
    } else {
      setBrowser("unknown");
    }
  }, []);

  if (!show) return null;

  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";

  const instructions = {
    chrome: (
      <>
        <h3 className="text-lg font-semibold text-center text-blue-500 mb-2">
          Google Chrome
        </h3>
        <ol
          className={`list-decimal list-inside space-y-1 text-sm ${textColor}`}
        >
          <li>
            Open: <b>chrome://settings/cookies</b>
          </li>
          <li>
            Enable <b>Allow all cookies</b>
          </li>
          <li>
            Add this site to <b>Allowed sites</b>
          </li>
        </ol>
      </>
    ),

    firefox: (
      <>
        <h3 className="text-lg font-semibold text-center text-orange-500 mb-2">
          Mozilla Firefox
        </h3>
        <ol
          className={`list-decimal list-inside space-y-1 text-sm ${textColor}`}
        >
          <li>Settings → Privacy</li>
          <li>
            Tracking Protection → <b>Standard</b>
          </li>
          <li>Allow cookies</li>
        </ol>
      </>
    ),

    safari: (
      <>
        <h3 className="text-lg font-semibold text-center text-purple-500 mb-2">
          Safari (iPhone / Mac)
        </h3>
        <ol
          className={`list-decimal list-inside space-y-1 text-sm ${textColor}`}
        >
          <li>Settings → Safari</li>
          <li>
            Disable <b>Block All Cookies</b>
          </li>
          <li>
            Disable <b>Prevent Cross-Site Tracking</b>
          </li>
        </ol>
      </>
    ),

    edge: (
      <>
        <h3 className="text-lg font-semibold text-center text-indigo-500 mb-2">
          Microsoft Edge
        </h3>
        <ol
          className={`list-decimal list-inside space-y-1 text-sm ${textColor}`}
        >
          <li>edge://settings/content/cookies</li>
          <li>
            Enable <b>Allow sites to save cookies</b>
          </li>
        </ol>
      </>
    ),

    android: (
      <>
        <h3 className="text-lg font-semibold text-center text-green-500 mb-2">
          Android Browser
        </h3>
        <ol
          className={`list-decimal list-inside space-y-1 text-sm ${textColor}`}
        >
          <li>Browser → Settings</li>
          <li>Privacy / Security</li>
          <li>Enable Cookies + disable blocking 3rd-party cookies</li>
        </ol>
      </>
    ),

    unknown: (
      <>
        <p className={`text-sm ${textColor} text-center`}>
          Please enable cookies in your browser settings.
        </p>
      </>
    ),
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
      <div
        className={`w-full max-w-lg rounded-2xl shadow-xl p-6 relative border 
        ${
          theme === "dark"
            ? "bg-zinc-900 border-zinc-700"
            : "bg-white border-gray-200"
        }`}
      >
        <button
          className="absolute top-3 right-3 p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition"
          onClick={onClose}
        >
          <X
            size={20}
            className={theme === "dark" ? "text-white" : "text-black"}
          />
        </button>

        <h2 className="text-2xl font-bold text-center text-red-500 mb-2">
          Login Cookies Blocked
        </h2>

        <p className={`text-center mb-4 ${textColor}`}>
          Your browser is blocking required login cookies. Follow these steps:
        </p>

        {instructions[browser]}

        <button
          className="mt-6 w-full bg-[#ff0054] hover:bg-[#d60046] text-white py-2 rounded-lg font-semibold transition"
          onClick={onClose}
        >
          Okay, Got It
        </button>
      </div>
    </div>
  );
}
