import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";

import bgImg from "../images/bgImg.png";
import searchImg from "../icons/Search.svg";
import logoImg from "../icons/Logo.svg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { matchListing } from "../redux/actions/matchAction";
import { teamListing } from "../redux/actions/teamAction";
import { locationListing } from "../redux/actions/locationAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import DailyMatches from "../components/DailyMatches";
import NewsContainer from "../components/NewsContainer";

export const HomeScreen = () => {
  const [search, setSearch] = useState("");
  const [calendar, setcalendar] = useState(new Date());

  const teamList = useSelector((state) => state.teamList);
  const { teams } = teamList;
  const matchList = useSelector((state) => state.matchList);
  const { loading, error, matches } = matchList;
  const locationList = useSelector((state) => state.locationList);
  const { locations } = locationList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(teamListing());
    dispatch(locationListing());
    dispatch(matchListing());
  }, [dispatch]);

  const changeHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="homePageImage">
        <div className="container homePage">
          <div className="row">
            <div className="col-8">
              <form onChange={changeHandler} className="searchInput w-75">
                <div className="input-group input-group-sm mb-3">
                  <img
                    src={searchImg}
                    alt="Keresés"
                    className="input-group-text searchImg-input"
                    width="65"
                  />
                  <input
                    type="text"
                    id="search"
                    required
                    className="form-control"
                    aria-label="Sizing example input"
                    onChange={(e) => setSearch(e.target.value)}
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
              </form>
              <div className="w-75 text-white mt-5">
                <h1>Sport</h1>
                <h3 className="mb-5">Csapat Játékok & Meccsek</h3>
                <button className="btn btn-danger px-5 myButton mb-5">
                  Live
                </button>
                <h4>App Letöltés</h4>
                <button className="bg-white myButton p-3 border-0 ms-5 mt-3">
                  <img src={logoImg} alt="Logó" width="50" />
                </button>
              </div>
            </div>
            <div className="col-4 px-2">
              <Calendar
                onChange={setcalendar}
                value={calendar}
                tileContent={
                  ({ date, view }) => {
                    let circleCount = 0;
                    const circles =
                      view === "month"
                        ? matches?.map((match) => {
                            let matchDate = new Date(match.date);
                            if (circleCount < 3) {
                              if (
                                matchDate.getFullYear() ===
                                  date.getFullYear() &&
                                matchDate.getMonth() === date.getMonth() &&
                                matchDate.getDate() === date.getDate()
                              ) {
                                circleCount++;
                                return (
                                  <svg key={match.id} height="6" width="6">
                                    <circle cx="3" cy="3" r="3" fill="red" />
                                  </svg>
                                );
                              } else return null;
                            } else return null;
                          })
                        : null;
                    return <div>{circles}</div>;
                  } /*
                ) : view === "year" ? (
                  <p>year</p>
                ) : view === "decade" ? (
                  <p>decade</p>
                ) : view === "century" ? (
                  <p>century</p>
                ) */
                }
                navigationLabel={({ date, label, locale, view }) =>
                  `${date.toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}`
                }
              />

              {loading ? (
                <LoadingBox />
              ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
              ) : (
                <div className="d-flex flex-column matches align-items-center my-3 dailyMatches mt-5">
                  <DailyMatches
                    matches={matches}
                    teams={teams}
                    date={calendar}
                    locations={locations}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <NewsContainer />
    </>
  );
};
