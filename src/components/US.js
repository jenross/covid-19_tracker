import React, { memo } from "react";
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
import allStates from "../utils/allStates.json";

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

  return (
    <div>
      <header>
        <h1>USA</h1>
      </header>
      <main>
        <section>
          {loading && <p>Loading...</p>}

          {error && <p className="error">{error.message}</p>}
        </section>
        <ComposableMap data-tip="" projection="geoAlbersUsa">
          <Geographies geography={geoUrl}>
            {({ geographies }) => (
              <>
                {geographies.map(geo => (
                  <Geography
                    key={geo.rsmKey}
                    stroke="#FFF"
                    geography={geo}
                    fill="#DDD"
                    onMouseEnter={() => {
                      const abbrev = allStates.find(s => s.val === geo.id);
                      for (let i = 0; i < stats.length; i++) {
                        if (abbrev.id === stats[i].state) {
                          setTooltipContent(
                            <StateStats
                              state={stats[i] && stats[i].state}
                              positive={stats[i] && stats[i].positive}
                              negative={stats[i] && stats[i].negative}
                              death={
                                (stats[i] && stats[i].death) || "None reported"
                              }
                              lastUpdate={stats[i] && stats[i].lastUpdateEt}
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
                        fill: "#D6D6DA",
                        outline: "none"
                      },
                      hover: {
                        fill: "#F53",
                        outline: "none"
                      },
                      pressed: {
                        fill: "#E42",
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
