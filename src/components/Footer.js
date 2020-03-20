import React from "react";

export default function Footer({ lastUpdated }) {
  return (
    <footer class="footer footer-big">
      <div class="container">
        <div class="row">
          <div class="col-sm-2 col-md-4">
            <div class="social-area">
              <p>
                © 2020, developed by{" "}
                <a
                  href="https://jenniferross.tech/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Jennifer Ross
                </a>
              </p>
              <p>Last updated: {lastUpdated}</p>
              <p>
                Global data:{" "}
                <a
                  href="https://github.com/mathdroid/covid-19-api"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Mathdroid
                </a>{" "}
                API
              </p>
              <p>
                US data:{" "}
                <a
                  href="https://github.com/COVID19Tracking/website/blob/master/_src/api.md"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  The COVID Tracking Project
                </a>{" "}
                API
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
