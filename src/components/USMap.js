import React, { memo } from "react";
import Loading from "./Loading";
import StateStats from "./StateStats";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from "react-simple-maps";
import useFetch from "../utils/useReducer";
import ThemeContext from "../contexts/theme";
import AppTheme from "../utils/AppTheme";
import allStates from "../utils/allStates.json";
import { format } from "date-fns";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21]
};

function US({ setTooltipContent }) {
  const [response, loading, error] = useFetch(
    "https://covidtracking.com/api/states"
  );

  const stats = response || [];
  const theme = React.useContext(ThemeContext);
  const currentTheme = AppTheme[theme];

  return (
    <div
      className="usPage"
      style={{
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`
      }}
    >
      <header className="usHeader">
        <h1>US Stats</h1>
      </header>
      <main>
        <section>
          {loading && <Loading text="Retrieving US data..." />}

          {error && <p className="error">{error.message}</p>}
        </section>
        <ComposableMap data-tip="" projection="geoAlbersUsa" className="us-map">
          <Geographies geography={geoUrl}>
            {({ geographies }) => (
              <>
                {geographies.map(geo => (
                  <Geography
                    key={geo.rsmKey}
                    stroke="#000"
                    geography={geo}
                    fill="#808080"
                    onMouseEnter={() => {
                      const abbrev = allStates.find(s => s.val === geo.id);

                      for (let i = 0; i < stats.length; i++) {
                        const formattedDate = format(
                          new Date(stats[i] && stats[i].lastUpdateEt),
                          "MM/dd hh:mm aa"
                        );
                        if (abbrev.id === stats[i].state) {
                          setTooltipContent(
                            <StateStats
                              state={stats[i] && stats[i].state}
                              positive={stats[i] && stats[i].positive}
                              negative={stats[i] && stats[i].negative}
                              death={
                                (stats[i] && stats[i].death) || "None reported"
                              }
                              lastUpdate={formattedDate}
                            />
                          );
                        }
                      }
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    style={{
                      default: {
                        fill: "#8293A4",
                        outline: "none"
                      },
                      hover: {
                        fill: "#B22222",
                        outline: "none"
                      },
                      pressed: {
                        fill: "#B22222",
                        outline: "none"
                      }
                    }}
                  />
                ))}
                {geographies.map(geo => {
                  const centroid = geoCentroid(geo);
                  const cur = allStates.find(s => s.val === geo.id);
                  console.log(cur.id);
                  return (
                    <g key={geo.rsmKey + "-name"}>
                      {cur &&
                        centroid[0] > -160 &&
                        centroid[0] < -67 &&
                        (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                          <Marker coordinates={centroid}>
                            <text y="2" fontSize={14} textAnchor="middle">
                              {cur.id}
                            </text>
                          </Marker>
                        ) : (
                          <Annotation
                            subject={centroid}
                            dx={offsets[cur.id][0]}
                            dy={offsets[cur.id][1]}
                          >
                            <text
                              x={4}
                              fontSize={14}
                              alignmentBaseline="middle"
                            >
                              {cur.id}
                            </text>
                          </Annotation>
                        ))}
                    </g>
                  );
                })}
              </>
            )}
          </Geographies>
        </ComposableMap>
      </main>
    </div>
  );
}

export default memo(US);
