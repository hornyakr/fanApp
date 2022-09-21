import React from "react";

import Match from "./Match";

export default function DailyMatches(props) {
  const { matches, teams, date, locations } = props;

  return matches && teams
    ? matches.map((match) => {
        let matchDate = new Date(match.date);
        if (
          matchDate.getFullYear() === date.getFullYear() &&
          matchDate.getMonth() === date.getMonth() &&
          matchDate.getDate() === date.getDate()
        ) {
          return (
            <Match
              key={match.id}
              match={match}
              domesticTeam={teams.find((team) => team.id === match.DomesticId)}
              guestTeam={teams.find((team) => team.id === match.GuestId)}
              location={locations.find(
                (location) => location.id === match.LocationId
              )}
            />
          );
        }
        return "";
      })
    : "Nincs meccs a megadott napon";
}
