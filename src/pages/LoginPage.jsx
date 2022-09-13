import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleOnSubmit(e) {
    e.preventDefault();
    const payload = { email, password };

    const url = "";

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        const token = data.token;
        localStorage.setItem("cms-token", token);
        navigate("/");
      });
  }

  return (
    <div>
      <>
        <h1>Login</h1>
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
            <button type="submit">Login</button>
          </form>
        </div>
      </>
    </div>
  );
}
