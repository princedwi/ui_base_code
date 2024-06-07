import * as React from "react";
import { useState } from "react";
import Marker from "./marker";
// import { button } from '@mui/material';
// import Description from '../../Layout/Description';

export default function Map() {
  const [dump, setDump] = useState("START");

  return (
    <div>
      <p>Simple example with memoization {dump}</p>
      <div style={wrapperStyles.buttonContainer}>
        <button color="secondary" onClick={() => setDump("FIRST button")}>
          First{" "}
        </button>
        <button color="secondary" onClick={() => setDump("SECOND button")}>
          Second{" "}
        </button>
      </div>
      <Marker />
    </div>
  );
}
export const wrapperStyles = {
  wrapper: {
    padding: "15px",
    marginTop: "15px",
  },
  buttonContainer: {
    display: "grid",
    gridAutoFlow: "column",
    gridGap: "10px",
    gridAutoColumns: "max-content",
    padding: "10px 0",
  },
};
