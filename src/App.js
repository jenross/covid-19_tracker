import React from "react";
import Stats from "./components/Stats";
import CountrySelector from "./components/CountrySelector";

function App() {
  return (
    <div>
      <Stats url="https://covid19.mathdro.id/api"></Stats>
      <CountrySelector></CountrySelector>
    </div>
  );
}

export default App;
