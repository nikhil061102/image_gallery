import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await fetch("/user/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.err) {
        alert("Some error occurred. Please check console & try again !")
        console.log('Error : ', data.err);
      }
      if (data.errors) {
        alert("Some error occurred. Please check console & try again !")
        data.errors.forEach((el) => {
          console.log('Error : ', el.msg);
        });
      }
      if (data.email) {
        window.location.assign("/home");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-5">
      <h1 style={{ fontSize: '4rem' }}>🖼 Welcome to Photo Gallery App📱</h1>
      <h1 className="mb-4">Login Form</h1>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          id="email"
          placeholder='Enter your email'
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password:</label>
        <input
          type="password"
          id="password"
          placeholder='Enter your password'
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Login</button>
      <p className="mt-3" style={{ fontSize: '1.2rem' }}>For Signup, <Link to="/signup" style={{ color: 'blue' }}>Click Here</Link></p>
    </div>
  );
};

export default LoginForm;
