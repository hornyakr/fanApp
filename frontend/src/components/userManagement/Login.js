import { signIn } from "../../redux/actions/userActions";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signIn(email, password));
  };
  return (
    <form className="container userManagementForm" onSubmit={submitHandler}>
      <div className="mb-3">
        <input
          type="email"
          className="form-control text-center"
          id="email"
          placeholder="E-mail"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control text-center"
          id="password"
          placeholder="Jelszó"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-danger mb-4 w-100 myButton">
        Bejelentkezés
      </button>
    </form>
  );
}
