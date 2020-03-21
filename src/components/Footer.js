import React from "react";
import ThemeContext from "../contexts/theme";
import AppTheme from "../utils/AppTheme";

export default function Footer() {
  const theme = React.useContext(ThemeContext);
  const currentTheme = AppTheme[theme];
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
    </footer>
  );
}
