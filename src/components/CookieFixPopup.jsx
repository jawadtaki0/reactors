import React from "react";
import { X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function CookieFixPopup({ show, onClose }) {
  const { theme } = useTheme();

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-9999 p-4">
      <div
        className={`w-full max-w-lg rounded-2xl shadow-xl p-6 relative overflow-y-auto max-h-[90vh] border 
          ${
            theme === "dark"
              ? "bg-zinc-900 border-zinc-700"
              : "bg-white border-gray-200"
          }`}
      >
        {/* Close button */}
        <button
          className="absolute top-3 right-3 p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition"
          onClick={onClose}
        >
          <X
            size={20}
            className={`${theme === "dark" ? "text-white" : "text-black"}`}
          />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-red-500 mb-2">
          Login Cookies Blocked
        </h2>

        <p
          className={`text-center mb-4 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Your browser is blocking sign-in cookies needed for Google Login.
          Please follow the steps below depending on your browser.
        </p>

        {/* LIST OF BROWSERS */}
        <div className="space-y-6 mt-4">
          {/* Chrome */}
          <div>
            <h3 className="text-lg font-semibold text-center text-blue-500 mb-2">
              Chrome
            </h3>
            <ol
              className={`list-decimal list-inside space-y-1 text-sm ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <li>
                Go to: <b>chrome://settings/cookies</b>
              </li>
              <li>
                Enable <b>“Allow all cookies”</b>
              </li>
              <li>
                Add your site under <b>Allowed sites</b>
              </li>
            </ol>
          </div>

          {/* Firefox */}
          <div>
            <h3 className="text-lg font-semibold text-center text-orange-500 mb-2">
              Firefox
            </h3>
            <ol
              className={`list-decimal list-inside space-y-1 text-sm ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <li>Go to Settings → Privacy</li>
              <li>
                Set Enhanced Tracking Protection to <b>Standard</b>
              </li>
              <li>Allow cookies for your site</li>
            </ol>
          </div>

          {/* Safari */}
          <div>
            <h3 className="text-lg font-semibold text-center text-purple-500 mb-2">
              Safari (iPhone / Mac)
            </h3>
            <ol
              className={`list-decimal list-inside space-y-1 text-sm ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <li>Open Settings → Safari</li>
              <li>
                Disable <b>“Block All Cookies”</b>
              </li>
              <li>
                Disable <b>“Prevent Cross-Site Tracking”</b>
              </li>
            </ol>
          </div>

          {/* Edge */}
          <div>
            <h3 className="text-lg font-semibold text-center text-indigo-500 mb-2">
              Edge
            </h3>
            <ol
              className={`list-decimal list-inside space-y-1 text-sm ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <li>
                Go to: <b>edge://settings/content/cookies</b>
              </li>
              <li>
                Enable <b>“Allow sites to save and read cookie data”</b>
              </li>
            </ol>
          </div>

          {/* Android Default Browser */}
          <div>
            <h3 className="text-lg font-semibold text-center text-green-500 mb-2">
              Android Browser (Samsung / Xiaomi / Huawei)
            </h3>
            <ol
              className={`list-decimal list-inside space-y-1 text-sm ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <li>Go to browser → Settings</li>
              <li>
                Find <b>“Privacy & Security”</b>
              </li>
              <li>
                Enable <b>Cookies</b> & disable <b>Block third-party cookies</b>
              </li>
            </ol>
          </div>
        </div>

        {/* BUTTON */}
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
