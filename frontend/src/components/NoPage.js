import React from "react";
import { Link } from "react-router-dom";

export default function NoPage() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center noPage">
      <div className="">
        <Link to="/">Vissza</Link>
      </div>
      <div className="">
        <b>400</b>
        <span>&nbsp;Az oldal nem található. Ellenőrizd a címet!</span>
      </div>
    </div>
  );
}
