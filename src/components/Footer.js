import React from "react";
import ThemeContext from "../contexts/theme";
import NavTheme from "../utils/NavTheme";

export default function Footer() {
  const theme = React.useContext(ThemeContext);
  const currentTheme = NavTheme[theme];
  return (
    <footer
      class="footer"
      style={{
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`
      }}
    >
      <div class="container">
        <div class="row">
          <div class="footer-text">
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
            <p>
              Data:{" "}
              <a
                href="https://github.com/mathdroid/covid-19-api"
                rel="noopener noreferrer"
                target="_blank"
              >
                Mathdroid
              </a>{" "}
              (Global),{" "}
              <a
                href="https://github.com/COVID19Tracking/website/blob/master/_src/api.md"
                rel="noopener noreferrer"
                target="_blank"
              >
                The COVID Tracking Project
              </a>{" "}
              (US)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
