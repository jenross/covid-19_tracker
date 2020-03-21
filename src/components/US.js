import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import ReactTooltip from "react-tooltip";

import US from "./USMap";

export default function USPage() {
  const [content, setContent] = useState("");
  return (
    <React.Fragment>
      <Nav />
      <div>
        <US setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
      <Footer />
    </React.Fragment>
  );
}
