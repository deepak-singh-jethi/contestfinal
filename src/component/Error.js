import React from "react";

function Error({ error }) {
  return (
    <div id="Error">
      <h1>Error</h1>
      <p>{error}</p>
    </div>
  );
}

export default Error;
