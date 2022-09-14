import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleOnSubmit(e) {
    e.preventDefault();
    const url =
      "http://localhost:8888/?rest_route=/simple-jwt-login/v1/autologin&JWT=JWT";
    const payload = {
      email,
      password,
    };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => navigate("/login"));
  }

  return (
    <div>
      <>
        <h1>Create user</h1>
        <div className="formContainer">
          <form onSubmit={handleOnSubmit}>
            <div className="row">
              <div className="col-25">
                <label htmlFor="email">Email</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="email.."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="email">Password</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="password"
                  name="password"
                  placeholder="password.."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button type="submit">Sign In</button>
          </form>
        </div>
      </>
    </div>
  );
}
