import React from "react";

export default function Match(props) {
  const { match, domesticTeam, guestTeam, location } = props;

  return (
    <div className="d-flex myButton bg-white px-4 py-2 align-items-center my-2">
      <img
        src={"images/teams/" + domesticTeam.logo}
        alt="Hazai"
        width="40"
        className="me-3"
      />
      <div className="text-center">
        <div>
          <span>{match.domesticGoals}</span>
          <span className="px-1">&#8211;</span>
          <span>{match.guestGoals}</span>
        </div>
        <div>{match.date.slice(0, 10)}</div>
        <div>{location.name}</div>
      </div>
      <img
        src={"images/teams/" + guestTeam.logo}
        alt="Vendég"
        width="40"
        className="ms-3"
      />
    </div>
  );
}
