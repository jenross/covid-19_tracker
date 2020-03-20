import React from "react";
import { Link } from "react-router-dom";

export default function Footer({ lastUpdated }) {
  return (
    <footer class="footer footer-big">
      <div class="container">
        <div class="row">
          <div class="ml-auto mr-auto col-sm-9 col-md-6">
            <div class="links">
              <ul class="uppercase-links">
                <Link to="/us">US</Link>
              </ul>
              <div class="copyright">
                © 2020, developed by{" "}
                <a
                  href="https://jenniferross.tech/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Jennifer Ross
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-2 col-md-4">
            <div class="social-area">
              <p>Last updated: {lastUpdated}</p>
              <p>
                Global data provided by the{" "}
                <a
                  href="https://github.com/mathdroid/covid-19-api"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Mathdroid
                </a>
                {" "}API
              </p>
              <p>
                US data provided by {" "}
                <a
                  href="https://github.com/COVID19Tracking/website/blob/master/_src/api.md"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  The COVID Tracking Project
                </a>
                {" "}API
              </p>

              {/* <a
                href="#pablo"
                class="btn-round btn-just-icon mr-1 btn btn-facebook"
              >
                <i class="fa fa-facebook"></i>
              </a>
              <a
                href="#pablo"
                class="btn-just-icon btn-round mr-1 btn btn-twitter"
              >
                <i class="fa fa-twitter"></i>
              </a>
              <a
                href="#pablo"
                class="btn-just-icon btn-round mr-1 btn btn-google"
              >
                <i class="fa fa-google-plus"></i>
              </a>
              <a
                href="#pablo"
                class="btn-just-icon btn-round btn btn-pinterest"
              >
                <i class="fa fa-pinterest-p"></i>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
