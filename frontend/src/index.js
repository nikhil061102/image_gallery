import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Enter from "./pages/Enter";
import SignupForm from "./pages/Signup";
import LoginForm from "./pages/Login";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Enter />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/signup" element={<SignupForm />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
