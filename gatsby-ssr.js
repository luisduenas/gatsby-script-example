import React from "react";
export { wrapPageElement, wrapRootElement } from "./gatsby-shared";

export const onRenderBody = ({ setHeadComponents }) => {
  /**
   * Enable debug mode via Partytown's vanilla config. Change to `debug: true` to enable.
   * @see {@link https://partytown.builder.io/configuration#vanilla-config}
   */
  setHeadComponents([
    <script
      key="debug"
      dangerouslySetInnerHTML={{
        __html: `partytown = {
          debug: false
        }`,
      }}
    />,
  ]);
};
