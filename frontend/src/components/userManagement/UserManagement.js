import logo from "../../icons/Logo.svg";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./Login";
import Registration from "./Registration";
import ForgotPassword from "./ForgotPassword";
import { useState } from "react";

export default function UserManagement() {
  const userSignIn = useSelector((state) => state.userSignIn);
  const userRegister = useSelector((state) => state.userRegister);

  const [userManagementState, userManagementSetstate] = useState("login");

  return (
    <div className="text-center userManagement">
      <Link to="/">
        <img className="mb-5" src={logo} alt="SportLiveFan" />
      </Link>
      {(userSignIn.loading || userRegister.loading) && (
        <LoadingBox></LoadingBox>
      )}
      {userSignIn.error && (
        <MessageBox variant="danger">{userSignIn.error}</MessageBox>
      )}
      {userManagementState === "login" ? (
        <>
          <Login />
          <Link to="#" onClick={() => userManagementSetstate("forgotPassword")}>
            Elfelejtetted a jelszót?
          </Link>
          <br />
          <Link to="#" onClick={() => userManagementSetstate("registration")}>
            Regisztráció
          </Link>
        </>
      ) : userManagementState === "registration" ? (
        <>
          <Registration />
          <div>Már regisztrált nálunk? </div>
          <Link to="#" onClick={() => userManagementSetstate("login")}>
            Bejelentkezés
          </Link>
        </>
      ) : (
        <>
          <ForgotPassword />
          <Link to="#" onClick={() => userManagementSetstate("login")}>
            Bejelentkezés
          </Link>
          <br />
          <Link to="#" onClick={() => userManagementSetstate("registration")}>
            Regisztráció
          </Link>
        </>
      )}
    </div>
  );
}
