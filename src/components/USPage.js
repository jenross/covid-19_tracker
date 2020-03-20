import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import US from "./US";

export default function USPage() {
  const [content, setContent] = useState("");
  return (
    <div>
      <US setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}