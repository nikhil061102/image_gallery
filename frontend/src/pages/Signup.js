import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  // State variables to hold the form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      console.log("Password and confirm password must match !");
    } else {
      try {
        const res = await fetch("/user/signup", {
          method: "POST",
          body: JSON.stringify({ name, email, password }),
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        if (data.err) {
          alert("Some error occurred. Please check console & try again !");
          console.log("Error :", data.err);
        }
        if (data.errors) {
          alert("Some error occurred. Please check console & try again !");
          data.errors.forEach((el) => {
            console.log("Error : ", el.msg);
          });
        }
        if (data.email) {
          window.location.assign("/home");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h1 style={{ fontSize: "4rem" }}>🖼 Welcome to Photo Gallery App📱</h1>
      <h1 className="mb-4">Signup Form</h1>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm your password"
          className="form-control"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Signup
      </button>
      <p className="mt-3" style={{ fontSize: "1.2rem" }}>
        For Login,{" "}
        <Link to="/login" style={{ color: "blue" }}>
          Click Here
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;
