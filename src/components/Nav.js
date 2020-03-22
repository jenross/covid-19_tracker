import React from "react";
import ThemeContext from "../contexts/theme";
import { Link } from "react-router-dom";
import NavTheme from "../utils/NavFooterTheme";

export default function Nav({ toggleTheme }) {
  const theme = React.useContext(ThemeContext);
  const currentTheme = NavTheme[theme];
  return (
    <nav
      id="navbar-main"
      class="navbar navbar-expand-lg headroom--not-top headroom--not-bottom headroom"
      style={{
        backgroundColor: `${currentTheme.backgroundColor}`
      }}
    >
      <div class="container">
        <div class="navbar-translate">
          <Link
            d="navbar-brand"
            class="navbar-brand"
            to="/"
            style={{
              color: `${currentTheme.textColor}`
            }}
          >
            Covid-19 Tracker
          </Link>
        </div>
        <div>
          <ul class="ml-auto navbar-nav">
            <li class="nav-item">
              <Link
                aria-haspopup="true"
                className="mr-4 nav-link"
                aria-expanded="false"
                to="/"
                style={{
                  color: `${currentTheme.textColor}`
                }}
              >
                World
              </Link>
            </li>
            <li class="nav-item">
              <Link
                aria-haspopup="true"
                className="mr-4 nav-link"
                aria-expanded="false"
                to="/us"
                style={{
                  color: `${currentTheme.textColor}`
                }}
              >
                US
              </Link>
            </li>
            <button
              style={{
                border: `${currentTheme.backgroundColor}`,
                fontSize: 26,
                backgroundColor: `${currentTheme.backgroundColor}`
              }}
              className="btn-clear"
              onClick={toggleTheme}
            >
              {theme === "light" ? "🔦" : "💡"}
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
