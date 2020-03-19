// import React from "react";
// import useStats from "../utils/useStats";

// export default function Stats({ url }) {
//   const { stats, loading, error } = useStats(url);

//   if (error)
//     return (
//       <div>
//         <p>No current data available</p>
//       </div>
//     );
//   if (loading || !stats) {
//     return (
//       <div>
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <React.Fragment>
//       <div>
//         <h3>Confirmed:</h3>
//         <span>{stats.confirmed.value}</span>
//       </div>

//       <div>
//         <h3>Deaths:</h3>
//         <span>{stats.deaths.value}</span>
//       </div>

//       <div>
//         <h3>Recovered:</h3>
//         <span>{stats.recovered.value}</span>
//       </div>
//     </React.Fragment>
//   );
// }
