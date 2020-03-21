import React from "react";
import CountUp from "react-countup";
// import { Card, CardBody, CardTitle } from "reactstrap";

const GlobalStats = ({ confirmed, dead, recovered }) => {
  return (
    <section className="globalStats">
      <>
        <div>
          <h2 className="globalHeader">Confirmed</h2>

          <p className="card-description">
            <CountUp start={0} end={confirmed} delay={0} separator=", ">
              {({ countUpRef }) => (
                <span id="confirmed" className="globalNum" ref={countUpRef} />
              )}
            </CountUp>
          </p>
        </div>
      </>
      <>
        <div>
          <h2 className="globalHeader">Recovered</h2>

          <p className="card-description">
            <CountUp start={0} end={recovered} delay={0} separator=", ">
              {({ countUpRef }) => (
                <span id="recovered" className="globalNum" ref={countUpRef} />
              )}
            </CountUp>
          </p>
        </div>
      </>
      <>
        <div>
          <h2 className="globalHeader">Deaths</h2>

          <p className="card-description">
            <CountUp start={0} end={dead} delay={0} separator=", ">
              {({ countUpRef }) => (
                <span id="deaths" className="globalNum" ref={countUpRef} />
              )}
            </CountUp>
          </p>
        </div>
      </>
    </section>
  );
};

export default GlobalStats;
