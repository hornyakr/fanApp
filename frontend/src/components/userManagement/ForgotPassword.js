import React from "react";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
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
      <button type="submit" className="btn btn-danger mb-4 w-100 myButton">
        Küldés
      </button>
    </form>
  );
}
