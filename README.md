# Reactors — Book Management Web App

A modern, full-stack powered platform for browsing, tracking, and managing books.
Built with React + Vite + TailwindCSS, featuring authentication, reading lists, profile management, dark mode, and a real backend API integration.

# Team Members

| Name | Responsibilities |
|------|------------------|
| **Ali Khalifeh** | Homepage, Add Book, Edit Book, Dark Mode |
| **Jawad Taki** | Login, Register |
| **Hussein Sabra** | Book Listing, Book Details |
| **Ali Daouk** | Profile Page, Reading List |

# Overview

Reactors is a responsive book management web application where users can:

Browse all books from the backend

View detailed information about each book

Add, edit, or delete books

Maintain a personalized reading list

Track reading progress

Update profile information

Register, login, verify OTP, reset password

Enjoy a sleek and animated UI with dark mode support

This frontend is fully connected to a real backend API, replacing the mock-data setup of Phase 1.

# Features
## Authentication & Security

Register / Login

OTP verification

Forgot Password + Reset via OTP

Session-based authentication (cookies)

Auto-redirect using ProtectedRoute

Cookie handling UI with CookieFixPopup

## Book Management (CRUD)

View all books

Add new books

Edit existing books

Delete books

View detailed description of each book

## Reading List

Add books to personal reading list

Update reading status (Reading / Finished)

Remove items from reading list

View progress summary

## User Profile

View user data

Track reading statistics

View your own books (“My Books”)

## UI / UX

Fully responsive

TailwindCSS styling

Framer Motion animations

Dark / Light mode

Clean navigation bar

Dynamic cover loading with caching

Tech Stack

React 18

Vite

TailwindCSS

React Router DOM

Framer Motion

Axios

Context API

Lucide Icons

# Full Frontend Architecture
src/
 ├── assets/               # Images, covers, screenshots
 ├── components/           # Reusable UI components
 │     ├── Navbar.jsx
 │     ├── Footer.jsx
 │     ├── OtpModal.jsx
 │     ├── CookieFixPopup.jsx
 │     └── ProtectedRoute.jsx
 ├── context/              # Global state (auth, books, theme)
 │     ├── AuthContext.jsx
 │     ├── BookContext.jsx
 │     └── ThemeContext.jsx
 ├── pages/                # All app pages
 │     ├── HomePage.jsx
 │     ├── BooksList.jsx
 │     ├── BookDetail.jsx
 │     ├── AddEditBook.jsx
 │     ├── ReadingList.jsx
 │     ├── Login.jsx
 │     ├── Register.jsx
 │     └── UserProfile.jsx
 ├── services/
 │     └── api.js          # Axios instance + endpoint wrappers
 ├── utils/                # Helper functions
 ├── App.jsx               # Root router + layout
 └── main.jsx              # Entry point

# API Integration (Frontend → Backend)

All network requests use a shared axios instance:

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

## Auth API

POST /auth/register

POST /auth/login

POST /auth/verify-otp

POST /auth/forgot-password

POST /auth/verify-reset-otp

POST /auth/reset-password

GET /auth/me

POST /auth/logout

## Books API

GET /books

GET /books/:id

POST /books

PUT /books/:id

DELETE /books/:id

GET /books/mine

## UserBooks API (Reading List)

GET /userbooks

GET /userbooks/summary

POST /userbooks

PUT /userbooks/:id

DELETE /userbooks/:id

# Key Components
##Navbar

Dynamic navigation links

Shows login/register or profile/logout

Dark mode toggle

Mobile-friendly responsive menu

## Footer

Minimal footer

Dark mode adaptive

## OtpModal

Used for OTP verification in Login and Reset Password

Automatically triggered when backend requires OTP

Animated, clean UI

## ProtectedRoute

Wraps pages that require authentication

Redirects to login if user is not logged in

## CookieFixPopup

Detects browser (Chrome, Firefox, Safari, Edge, Android)

Shows instructions to enable cookies

Helps users whose browser blocks auth cookies

Theme-sensitive UI (dark/light)

# Pages Summary
## HomePage

Hero section

Animations

Featured books

## BooksList

Displays all books from backend

Filters & responsive grid

## BookDetail

View cover, title, author, description

Add to reading list

Edit or delete book (if owner)

## AddEditBook

Add new book

Update existing book

Fully validated form

## ReadingList

Displays user’s reading items

Update status or remove

## UserProfile

User information

Stats (books added, reading list summary)

My books section

## Auth Pages (Login + Register)

Validation

OTP flows

Cookie protection

# Setup Instructions
1. Clone the Repository
git clone https://github.com/jawadtaki0/reactors.git

2. Navigate to the Project
cd reactors

3. Install Dependencies
npm install

4. Add Environment Variables

Create a .env file:

VITE_API_URL=https://reactors-backendd-onrender.com/api
GOOGLE_CLIENT_ID=563014879392-hdubdjvbpdbovliebolb52qoj45sd34j.apps.googleusercontent.com


5. Run the Development Server
npm run dev


App runs at:

http://localhost:5173

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

# The frontend now communicates with a real backend using:

Secure cookies

Real user sessions

MongoDB-powered storage

OTP authentication

CRUD operations on books and reading list

# Conclusion

Reactors demonstrates:

Strong React architecture

Clean component structure

Real backend integration

Secure authentication & OTP

Dynamic reading list system

Responsive design

Smooth team collaboration

Production-level UI/UX

This frontend is now fully capable of supporting real user data and scalable book management features.