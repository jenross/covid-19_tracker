import React from "react";
import GlobalStats from "./GlobalStats";
import useFetch from "../utils/useReducer";

function Home() {
  const [response, loading, error] = useFetch(
    "https://covid19.mathdro.id/api/"
  );

  const stats = response || [];

  return (
    <div>
      <header>
        <h1>Covid-19 Tracker</h1>
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
    </div>
  );
}

export default Home;
