import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/userActions";

export default function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setComfirmPassword] = useState("");

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== comfirmPassword) {
      document.querySelector("#password").classList.add("bg-danger");
      document.querySelector("#confirmPassword").classList.add("bg-danger");
    } else {
      dispatch(register(firstName, lastName, email, password));
    }
  };
  return (
    <form className="container userManagementForm" onSubmit={submitHandler}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control text-center"
          id="lastName"
          placeholder="Vezetéknév"
          required
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control text-center"
          id="firstName"
          placeholder="Keresztnév"
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
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
      <div className="mb-3">
        <input
          type="password"
          className="form-control text-center"
          id="confirmPassword"
          placeholder="Jelszó újra"
          required
          onChange={(e) => setComfirmPassword(e.target.value)}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="check"
          required
        />
        <label className="form-check-label" htmlFor="check">
          Elfogadom a felhasználói feltételeket
        </label>
      </div>
      <button type="submit" className="btn btn-danger mb-4 w-100 myButton">
        Regisztrálok
      </button>
    </form>
  );
}
