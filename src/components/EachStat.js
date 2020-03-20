import React from "react";

const EachStat = ({ stat }) => {
  const { confirmed, dead, recovered } = stat;
  return (
    <div>
      <h2>Confirmed</h2>
      <p>{confirmed}</p>
      <h2>Dead</h2>
      <p>{dead}</p>
      <h2>Recovered</h2>
      <p>{recovered}</p>
    </div>
  );
};

export default EachStat;
