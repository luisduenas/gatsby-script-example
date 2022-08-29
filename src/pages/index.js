import React from "react";
import { Script, ScriptStrategy } from "gatsby";
import "../styles/common.css";

const IndexPage = () => {
  return (
    <main className="index-main">
      <title>Using Gatsby Script</title>
      <h1>Using Gatsby Script</h1>

      <Script
        strategy={ScriptStrategy.offMainThread}
        src={`https://cdn.jsdelivr.net/npm/marked/marked.min.js`}
        forward={[`marked.parse`]}
      />
    </main>
  );
};

export default IndexPage;
