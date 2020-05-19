import React from "react";

const StateStats = ({ state, positive, negative, death, lastUpdate }) => {
  return (
    <section className="stateStats">
      <p data-testid="state" value={state}>
        <strong>{state}</strong>
      </p>
      <p data-testid="positive" value={positive}>
        Positive: {positive}
      </p>
      <p data-testid="negative" value={negative}>
        Negative: {negative}
      </p>
      <p data-testid="state-deaths" value={death}>
        Deaths: {death}
      </p>
      <p data-testid="state-last-updated" value={lastUpdate}>
        Last Updated: {lastUpdate}
      </p>
    </section>
  );
};

export default StateStats;
