import React from "react";

const StateStats = ({ state, positive, negative, death, lastUpdate }) => {
  return (
    <section>
      <p>State: {state}</p>
      <p>Positive: {positive}</p>
      <p>Negative: {negative}</p>
      <p>Deaths: {death}</p>
      <p>Last Updated: {lastUpdate}</p>
    </section>
  );
};

export default StateStats;
