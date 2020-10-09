import React from "react";
import { Circular  } from "styled-loaders-react";
export default function Loading() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Circular  color="#60c5ef" size="80px" duration="10s"/>
    </div>
  );
}
