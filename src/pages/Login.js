import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import "./Login.scss";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const [error, setError] = useState(false);
  function handle(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function login() {
    let { name, password } = user;
    if (name !== "user" || password !== "password") {
      setError(true);
    } else {
      navigate("/dashboard");
    }
  }
  return (
    <div className="login">
      {error === true && (
        <Modal
          close={() => setError(false)}
          modalmessage="please log in with user as 'user' and password as 'password' "
        />
      )}
      <input value={user.name} name="name" onChange={handle} />
      <input value={user.password} name="password" onChange={handle} />
      <button onClick={login}>log in</button>
    </div>
  );
}

export default Login;
