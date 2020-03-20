import React from "react";

const GlobalStats = ({ confirmed, dead, recovered }) => {
  return (
    <section>
      <h2>Confirmed</h2>
      <p>{confirmed}</p>
      <h2>Deaths</h2>
      <p>{dead}</p>
      <h2>Recovered</h2>
      <p>{recovered}</p>
    </section>
  );
};

export default GlobalStats;
