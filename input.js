import React from "react";
import ReactDOMServer from "react-dom/server";
import { styled } from "linaria/react";

console.log(
  ReactDOMServer.renderToString(
    React.createElement(
      styled.h1`
        color: red;
      `,
      { p: "p" } // Must set at least one prop, otherwise bug is not triggered.
    )
  )
);
