import React, { useState } from "react";
import {
  Button,
  Container,
  Navbar,
  NavbarBrand,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { GoSignOut } from "react-icons/go";

import logo from "../icons/Logo.svg";
import menu from "../icons/Menu.svg";
import user from "../icons/User.svg";
import close from "../icons/Close.svg";
import UserManagement from "./userManagement/UserManagement";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../redux/actions/userActions";

export const MainNavbar = () => {
  const [showMainMenu, setShowMainMenu] = useState(false);
  const handleCloseMainMenu = () => setShowMainMenu(false);
  const handleShowMainMenu = () => setShowMainMenu(true);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const handleCloseUserMenu = () => setShowUserMenu(false);
  const handleShowUserMenu = () => setShowUserMenu(true);

  const yearNow = new Date().getFullYear();

  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;

  const dispatch = useDispatch();
  const singOutHandler = () => {
    dispatch(signOut());
  };

  return (
    <>
      <Navbar className="position-fixed top-0 w-100">
        <Container fluid="xxl" className="mx-3 mx-xxl-auto py-3">
          <div className="d-flex align-items-center">
            <NavbarBrand>
              <Link to="/">
                <img height="120" src={logo} alt="SportLiveFan" />
              </Link>
            </NavbarBrand>
            <ul className="nav gap-4 d-none d-sm-flex ps-3 ps-xxl-5 ms-xxl-5">
              <li className="nav-item text-uppercase">
                <Link to="/about">Rólunk</Link>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <Button
              className="me-3"
              variant="primary-outline"
              onClick={handleShowUserMenu}
            >
              <img src={user} alt="Felhasználó" width="40" />
            </Button>
            <Button variant="primary-outline" onClick={handleShowMainMenu}>
              <img src={menu} alt="Menü" />
            </Button>
          </div>
        </Container>
      </Navbar>
      <Offcanvas
        show={showMainMenu}
        onHide={handleCloseMainMenu}
        placement="end"
      >
        <Offcanvas.Header>
          <Offcanvas.Title>Menü</Offcanvas.Title>
          <Button variant="primary-outline" onClick={handleCloseMainMenu}>
            <img src={close} alt="Close" />
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="text-uppercase">
            <li>
              <Link to="#">Élő meccsek</Link>
            </li>
            <li>
              <Link to="#">Csapatok</Link>
            </li>
            <li>
              <Link to="#">Kedvenc csapat</Link>
            </li>
            <li>
              <Link to="#">Naptár</Link>
            </li>
          </ul>
        </Offcanvas.Body>
        <div className="offcanvas-footer">
          <footer className="d-flex justify-content-center bg-dark text-white py-3">
            Hornyák Richárd &copy; 2022 -<span>{yearNow}&nbsp;</span> Minden jog
            fenntartva
          </footer>
        </div>
      </Offcanvas>
      <Offcanvas
        show={showUserMenu}
        onHide={handleCloseUserMenu}
        placement="end"
      >
        <Offcanvas.Header>
          <Offcanvas.Title>
            {userInfo ? (
              <>
                {userInfo.firstName + " " + userInfo.lastName}{" "}
                <Link to="#signOut" onClick={singOutHandler}>
                  <GoSignOut className="text-white ms-3" />
                </Link>
              </>
            ) : (
              "SportLiveFan"
            )}
          </Offcanvas.Title>
          <Button variant="primary-outline" onClick={handleCloseUserMenu}>
            <img src={close} alt="Close" />
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex align-items-center justify-content-center">
          {userInfo ? "Beállítások" : <UserManagement />}
        </Offcanvas.Body>
        <div className="offcanvas-footer">
          <footer className="d-flex justify-content-center bg-dark text-white py-3">
            Hornyák Richárd &copy; 2022 -<span>{yearNow}&nbsp;</span> Minden jog
            fenntartva
          </footer>
        </div>
      </Offcanvas>
    </>
  );
};
