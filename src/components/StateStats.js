import React from "react";


const StateStats = ({ state, positive, negative, death, lastUpdate }) => {

  return (
    <section className="stateStats">
      <p><strong>{state}</strong></p>
      <p>Positive: {positive}</p>
      <p>Negative: {negative}</p>
      <p>Deaths: {death}</p>
      <p>Last Updated: {lastUpdate}</p>
    </section>
  );
};

export default StateStats;
