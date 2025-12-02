export function detectBrowser() {
  const ua = navigator.userAgent;

  if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) return "Safari";
  if (/Chrome/i.test(ua) && /Android/i.test(ua)) return "Chrome Android";
  if (/Chrome/i.test(ua)) return "Chrome";
  if (/Firefox/i.test(ua)) return "Firefox";
  if (/Edg/i.test(ua)) return "Edge";
  if (/SamsungBrowser/i.test(ua)) return "Samsung Internet";

  return "Unknown";
}
