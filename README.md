# Reactors — Book Management Web App

A modern and intuitive platform for browsing, tracking, and managing books.  
Built with **React + Vite + TailwindCSS**, emphasizing speed, simplicity, and smooth UI/UX.

---

---

# Team Members

| Name | Responsibilities |
|------|------------------|
| **Ali Khalifeh** | Homepage, Add Book, Edit Book, Dark Mode |
| **Jawad Taki** | Login, Register |
| **Hussein Sabra** | Book Listing, Book Details |
| **Ali Daouk** | Profile Page, Reading List |

---

# Overview

Reactors is a responsive book management web app where users can:

- Browse a curated collection of books  
- View detailed information for each book  
- Add, edit, and delete books (if authorized)  
- Maintain a personal reading list (e.g., “Want to Read”, “Reading”, “Finished”)  
- Track reading progress and see a summary  
- Manage profile details  
- Register, log in, log out, and stay authenticated across sessions  
- Optionally log in with Google
---
In **Phase 2 (this version)**, all data comes from a **real backend API** via HTTP requests.
# Primary Data Entities

### **Book**
Represents each book with attributes like:
- title  
- author  
- year  
- genre  
- description  
- cover image  
- id  

Stored in:
```
src/data/books.js
```

### **User**
Represents user information for login and profile pages.

### **Reading List Entry**
Simulates user's reading progress and book tracking.

---
## Frontend Features

### 1. Authentication & Security

- Email/password registration and login  
- OTP verification flows:
  - Register → verify account with OTP  
  - Forgot password → verify reset OTP → set new password  
- Persistent sessions using cookies (`withCredentials: true` in Axios)  
- Logout from all protected pages  
- Optional **Google OAuth** login (frontend uses a backend-provided URL)  
- Protected routes using `ProtectedRoute.jsx` and `AuthContext.jsx`  

### 2. Book Management

- View all books in a responsive grid (`BooksList.jsx`)  
- View full details of a single book (`BookDetail.jsx`):
  - title, author, year, genre, description, cover, etc.  
- Add a new book (`AddEditBook.jsx` in “add” mode)  
- Edit an existing book (`AddEditBook.jsx` in “edit” mode)  
- Delete books (if authorized)  
- “My Books” / “Mine” integration (via `/books/mine` backend route)

All operations are done through the real API in `src/services/api.js`.

### 3. Reading List & User Library

- Personalized reading list in `ReadingList.jsx` backed by `/userbooks` endpoints  
- Support for different reading states (e.g., want-to-read, reading, finished)  
- Summary view (`/userbooks/summary`) for statistics and quick insights  
- Integration with `UserProfile.jsx` for user-centric information

### 4. UI / UX & Theming

- **TailwindCSS** for modern, responsive styling  
- Clean layout with **Navbar** and **Footer** components  
- **Dark mode** support via `ThemeContext.jsx`  
- Smooth UX with modals and feedback:
  - `OtpModal.jsx` for OTP entry  
  - `CookieFixPopup.jsx` to warn about blocked cookies (authentication relies on them)  

### 5. Utilities & Extras

- `detectBrowser.js` and `checkCookies.js` to improve reliability when cookies are blocked  
- `coverCache.js` and `fetchCover.js` for efficient cover image fetching and caching  
- React Router-based navigation between pages (home, login, register, books, profile, etc.)


---

# Tech Stack

- **React 18**
- **Vite**
- **TailwindCSS**
- **React Router DOM**
- **Framer Motion**
- **Local/Session Storage**
- **Context API**

---

# Project Structure

```
src/
 ├── assets/            # Images and static files
 ├── components/        # UI components
 ├── context/           # BookContext (mock backend simulation)
 ├── data/              # Mock data (books.js)
 ├── pages/             # Application pages
 ├── App.jsx            # App root + routing
 └── main.jsx           # Vite entry point
```

---

# Mock Data Architecture

### `src/data/books.js`
Acts as a **local database**.

Example:
```js
{
  id: 1,
  title: "Atomic Habits",
  author: "James Clear",
  year: 2018,
  genre: "Self-help",
  description: "...",
  cover: "/covers/atomic.jpg"
}
```

### `src/context/BookContext.jsx`
Simulates backend API:

- `getBooks()`
- `getBookById()`
- `addBook()`
- `updateBook()`
- `deleteBook()`

This makes the entire app behave like a real full-stack project without needing an API.

---

# Setup Instructions

### 1️. Clone the Repository  
```
git clone https://github.com/alikhalifehh/Reactors.git
```

### 2️. Navigate to the Project  
```
cd Reactors
```

### 3️. Install Dependencies  
```
npm install
```

### 4️. Run the Development Server  
```
npm run dev
```

App runs at:
```
http://localhost:5173
```

---

# Screenshots

### Home Page  
![Home Page](src/assets/home.png)

### Login Page  
![Login](src/assets/login.png)

### Register Page  
![Register](src/assets/register.png)

### Books Listing  
![Books Listing](src/assets/books.png)

### Book Details  
![Book Details](src/assets/book-details.png)

### Add Book  
![Add Book](src/assets/add-book.png)

### Reading List  
![Reading List](src/assets/reading-list.png)

### Profile Page  
![Profile](src/assets/profile.png)

### Dark Mode
![Dark Mode](src/assets/dark-mode.png)

![Dark Mode](src/assets/k.jpg)


---

# Phase 2 — Full Stack Integration (Frontend + Backend)

The frontend was connected to a real backend API.

Authentication now uses backend endpoints.

Books and reading list entries are stored in MongoDB.

All CRUD operations communicate with the backend through real API endpoints.

The app now behaves like a full production-ready system. 

---

# Conclusion

Reactors demonstrates:

- Clean React architecture  
- Component-based design  
- Smooth UI/UX  
- Team collaboration  
- Simulated full-stack behavior (Phase1)
- Connected to Backend (Phase 2)
