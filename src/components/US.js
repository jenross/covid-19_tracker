import React, { useState } from "react";

import Footer from "./Footer";
import ReactTooltip from "react-tooltip";

import US from "./USMap";

export default function USPage() {
  const [content, setContent] = useState("");
  return (
    <React.Fragment>
      <div>
        <US setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
      <Footer />
    </React.Fragment>
  );
}
