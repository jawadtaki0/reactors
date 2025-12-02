export async function checkCookies() {
  try {
    const res = await fetch(
      "https://reactors-backendd.onrender.com/api/auth/me",
      { credentials: "include" }
    );

    // If cookie blocked -> backend can't read token -> 401 or blocked
    if (res.status === 401 || res.status === 0) return false;

    return true;
  } catch {
    return false;
  }
}
