import React from "react";
import ThemeContext from "../contexts/theme";
import { Link } from "react-router-dom";

export default function Nav({ toggleTheme }) {
  const theme = React.useContext(ThemeContext);
  return (
    <nav
      id="navbar-main"
      class="fixed-top navbar navbar-expand-lg headroom--not-top headroom--not-bottom headroom headroom--pinned"
    >
      <div class="container">
        <div class="navbar-translate">
          <Link d="navbar-brand" class="navbar-brand" to="/">
            Covid-19 Tracker
          </Link>
        </div>
        <div>
          <ul class="ml-auto navbar-nav">
            <li class="nav-item">
              <Link
                aria-haspopup="true"
                class="mr-4 nav-link"
                aria-expanded="false"
                to="/"
              >
                World
              </Link>
            </li>
            <li class="nav-item">
              <Link
                aria-haspopup="true"
                class="mr-4 nav-link"
                aria-expanded="false"
                to="/us"
              >
                US
              </Link>
            </li>
            {theme === "light" ? "🔦" : "💡"}
          </ul>
        </div>
      </div>
    </nav>
  );
}
