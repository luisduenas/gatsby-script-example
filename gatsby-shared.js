import React from "react";
import { Script } from "gatsby";

/**
 * Shared `wrapPageElement` and `wrapRootElement` functions to be
 * re-exported in gatsby-browser and gatsby-ssr.
 */

export const wrapPageElement = ({ element }) => (
  <>
    {element}
    <Script>{`console.log('success loading script in wrapPageElement')`}</Script>
  </>
);

export const wrapRootElement = ({ element }) => (
  <>
    {element}
    <Script>{`console.log('success loading script in wrapRootElement')`}</Script>
  </>
);
