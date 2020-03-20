import React from "react";

export default function Footer({ lastUpdated }) {
  return (
    <footer>
      <div>
        <p>Last updated: {lastUpdated}</p>
      </div>
      <div>
        <p>
          Built by:{" "}
          <a
            href="https://jenniferross.tech/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Jennifer Ross
          </a>
        </p>
        <p>
          Global data provided by:{" "}
          <a
            href="https://github.com/mathdroid/covid-19-api"
            rel="noopener noreferrer"
            target="_blank"
          >
            Mathdroid
          </a>
        </p>
        <p>
          US data provided by:{" "}
          <a
            href="https://github.com/COVID19Tracking/website/blob/master/_src/api.md"
            rel="noopener noreferrer"
            target="_blank"
          >
            The COVID Tracking Project
          </a>
        </p>
      </div>
    </footer>
  );
}
