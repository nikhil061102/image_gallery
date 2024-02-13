import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = ({ setUpdateUI }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("/logout", {
        method: "GET",
      });
      if (!response.ok) {
        console.log("Logout failed");
      }
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div class="container-fluid">
        <a href="/" class="navbar-brand">🖼 Photo Gallery App📱</a>
        <Button setUpdateUI={setUpdateUI} />
        <button class="btn btn-outline-danger" type="submit" onClick={handleLogout}>Logout <i class="fa fa-sign-out" aria-hidden="true"></i></button>
      </div>
    </nav>
  );
};

export default Navbar;
