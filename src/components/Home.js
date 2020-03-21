import React from "react";
import GlobalStats from "./GlobalStats";
import useFetch from "../utils/useReducer";

import Footer from "./Footer";

import { format, parseISO } from "date-fns";
import earthdark from "../assets/img/earth_dark.svg";

function Home() {
  const [response, loading, error] = useFetch(
    "https://covid19.mathdro.id/api/"
  );

  const stats = response || [];

  const formattedDate = dateString =>
    format(parseISO(dateString || new Date()), "MM/dd/yyyy, HH:mm");

  return (
    <div className="homePage">
      <header className="homeHeader">
        <h1>Global Stats</h1>
        <p className="lastUpdated">
          Last updated: {stats.lastUpdate && formattedDate(stats.lastUpdate)}
        </p>
        <img
          className="earthVector"
          src={earthdark}
          alt="svg outline of earth"
        />
      </header>
      <main>
        <section>
          {loading ? (
            <p>Loading…</p>
          ) : (
            <GlobalStats
              confirmed={stats.confirmed && stats.confirmed.value}
              dead={stats.deaths && stats.deaths.value}
              recovered={stats.recovered && stats.recovered.value}
            />
          )}
          {error && <p className="error">{error.message}</p>}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
