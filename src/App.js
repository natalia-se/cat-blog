import React from "react";
import { Route, Routes } from "react-router";
import PostDetailPage from "./pages/PostDetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import BreedsPage from "./pages/BreedsPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:id" element={<PostDetailPage />} />
          <Route path="/breeds" element={<BreedsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
