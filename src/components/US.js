import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import US from "./USMap";

export default function USPage() {
  const [content, setContent] = useState("");
  return (
    <div>
      <US setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}