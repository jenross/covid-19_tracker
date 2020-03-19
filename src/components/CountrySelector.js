// import React, { useState } from "react";
// import useStats from "../utils/useStats";
// import Stats from "./Stats";
// import SetSelected from "./SetSelected";

// export default function CountrySelector() {
//   const { stats } = useStats("https://covid19.mathdro.id/api/countries");

//   const [selectedCountry, setSelectedCountry] = useState("USA");
//   if (!stats)
//     return (
//       <div>
//         <p>Loading...</p>
//       </div>
//     );

//   return (
//     <div>
//       <h2>
//         {Object.entries(stats.countries).map(([country, code]) => {
//           if (code === selectedCountry) {
//             return country;
//           }
//         })}{" "}
//         Stats
//       </h2>

//       <div>
//         <SetSelected stats={stats} setSelectedCountry={setSelectedCountry} />
//       </div>

//       <Stats
//         url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
//       ></Stats>
//     </div>
//   );
// }
