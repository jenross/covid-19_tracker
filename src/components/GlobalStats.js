import React from "react";
import CountUp from "react-countup";
import { Card, CardBody, CardTitle } from "reactstrap";

const GlobalStats = ({ confirmed, dead, recovered }) => {
  return (
    <section className="globalStats">
      <>
        <div className="card-big-shadow">
          <Card
            className="card-just-text"
            data-background="color"
            data-color="yellow"
            data-radius="none"
          >
            <CardBody>
              <CardTitle>
                <h2 className="globalHeader">Confirmed</h2>
              </CardTitle>
              <p className="card-description">
                <CountUp start={0} end={confirmed} delay={0} separator=", ">
                  {({ countUpRef }) => (
                    <span className="globalNum" ref={countUpRef} />
                  )}
                </CountUp>
              </p>
            </CardBody>
          </Card>
        </div>
      </>
      <>
        <div className="card-big-shadow">
          <Card
            className="card-just-text"
            data-background="color"
            data-color="green"
            data-radius="none"
          >
            <CardBody>
              <CardTitle>
                <h2 className="globalHeader">Recovered</h2>
              </CardTitle>
              <p className="card-description">
                <CountUp start={0} end={recovered} delay={0} separator=", ">
                  {({ countUpRef }) => (
                    <span className="globalNum" ref={countUpRef} />
                  )}
                </CountUp>
              </p>
            </CardBody>
          </Card>
        </div>
      </>
      <>
        <div className="card-big-shadow">
          <Card
            className="card-just-text"
            data-background="color"
            data-color="orange"
            data-radius="none"
            id="deaths-card"
          >
            <CardBody>
              <CardTitle>
                <h2 className="globalHeader">Deaths</h2>
              </CardTitle>
              <p className="card-description">
                <CountUp start={0} end={dead} delay={0} separator=", ">
                  {({ countUpRef }) => (
                    <span className="globalNum" ref={countUpRef} />
                  )}
                </CountUp>
              </p>
            </CardBody>
          </Card>
        </div>
      </>
    </section>
  );
};

export default GlobalStats;
