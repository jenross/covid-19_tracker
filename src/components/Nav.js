import React from "react";
import Headroom from "headroom.js";
import { Link } from "react-router-dom";
// export default function HeadroomSample() {
//   React.useEffect(() => {
//     // note that the domElement should be a valid dom element
//     // something like document.getElementById("my-id")
//     let headroom = new Headroom(domElement);
//     // initialise
//     headroom.init();
//   });
// }

export default function Nav() {
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
          </ul>
        </div>
      </div>
    </nav>
  );
}
