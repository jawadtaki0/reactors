import { useEffect, useState } from "react";
import { checkCookies } from "../utils/checkCookies";
import { detectBrowser } from "../utils/detectBrowser";

export default function CookieFixPopup() {
  const [show, setShow] = useState(false);
  const [browser, setBrowser] = useState("");

  useEffect(() => {
    (async () => {
      const ok = await checkCookies();
      if (!ok) {
        setBrowser(detectBrowser());
        setShow(true);
      }
    })();
  }, []);

  if (!show) return null;

  const instructions = {
    Safari: [
      "Open Settings → Safari",
      "Turn OFF 'Prevent Cross-Site Tracking'",
      "Turn OFF 'Block All Cookies'",
      "Restart Safari and try again",
    ],
    Chrome: [
      "Go to chrome://settings/cookies",
      "Enable: Allow all cookies",
      "OR add your site to allowed cookie list",
    ],
    "Chrome Android": [
      "Chrome → Settings → Site Settings → Cookies",
      "Enable: Allow cookies",
      "Disable: Block third-party cookies",
    ],
    Firefox: [
      "Firefox → Settings → Privacy",
      "Select: Standard Protection",
      "Ensure cookies are not blocked",
    ],
    Edge: ["Edge → Settings → Cookies", "Disable: Block third-party cookies"],
    "Samsung Internet": [
      "Settings → Sites and Downloads → Site Permissions",
      "Open Cookies → Enable Allow Cookies",
      "Disable third-party cookie block",
    ],
    Unknown: [
      "Please allow cookies in your browser settings",
      "Or try Chrome for the best experience",
    ],
  };

  const list = instructions[browser] || instructions["Unknown"];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 max-w-md w-full text-center shadow-xl border border-gray-300 dark:border-zinc-700">
        <h2 className="text-xl font-bold text-red-600 mb-3">
          Login Cookies Blocked
        </h2>

        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          Your browser is blocking sign-in cookies needed for Google Login.
          Please follow the steps below.
        </p>

        <p className="font-semibold mb-2">
          <span className="text-pink-600">{browser}</span> Instructions:
        </p>

        <ul className="text-left text-sm space-y-2 mb-6">
          {list.map((step, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-pink-600 font-bold">{i + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setShow(false)}
          className="w-full py-2 rounded-lg bg-pink-600 hover:bg-pink-500 text-white font-semibold"
        >
          Okay, Got It
        </button>
      </div>
    </div>
  );
}
