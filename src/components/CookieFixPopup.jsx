import { useTheme } from "../context/ThemeContext";

export default function CookieFixPopup({ show, onClose }) {
  const { theme } = useTheme();

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div
        className={`
          w-full max-w-md rounded-2xl p-6 shadow-2xl border 
          transition-all duration-300
          ${
            theme === "dark"
              ? "bg-zinc-900 border-zinc-700 text-white"
              : "bg-white border-gray-300 text-gray-900"
          }
        `}
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-red-500">
          Login Cookies Blocked
        </h2>

        <p
          className={`text-center text-sm mb-6 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Your browser is blocking required cookies for Google Login. Please
          follow the steps below.
        </p>

        <h3 className="text-lg font-semibold text-center mb-3 text-pink-500">
          Chrome Instructions
        </h3>

        <ul className="space-y-2 text-sm">
          <li>
            1. Go to{" "}
            <span className="font-mono">chrome://settings/cookies</span>
          </li>
          <li>2. Enable: “Allow all cookies”</li>
          <li>3. Add your site under “Allowed to use cookies”</li>
        </ul>

        <button
          onClick={onClose}
          className="
            mt-6 w-full py-2 rounded-xl text-white font-semibold 
            bg-pink-600 hover:bg-pink-500 transition
          "
        >
          Okay, Got It
        </button>
      </div>
    </div>
  );
}
