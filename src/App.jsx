import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import BooksList from "./pages/BooksList";
import BookDetail from "./pages/BookDetail";
import AddEditBook from "./pages/AddEditBook";
import ReadingList from "./pages/ReadingList";
import UserProfile from "./pages/UserProfile";
import Login from "./pages/Login";
import Register from "./pages/Register";

import ProtectedRoute from "./components/ProtectedRoute";
import CookieFixPopup from "./components/CookieFixPopup";

import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import OtpModal from "./components/OtpModal";
import { useState } from "react";

export default function App() {
  const [cookieError, setCookieError] = useState(false);

  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider onCookieBlocked={() => setCookieError(true)}>
          <OtpModal />

          <CookieFixPopup
            show={cookieError}
            onClose={() => setCookieError(false)}
          />

          <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/books" element={<BooksList />} />
              <Route path="/books/:id" element={<BookDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route
                path="/add"
                element={
                  <ProtectedRoute>
                    <AddEditBook />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/reading-list"
                element={
                  <ProtectedRoute>
                    <ReadingList />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <UserProfile />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
