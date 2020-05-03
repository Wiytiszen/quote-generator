import React from "react";

const Quote = (props) => {
  return (
    <div className ="generator">
      <div className="quote-container">
        <h1>
          "{props.quote}"
          <span className="author">&mdash; Martin</span>
        </h1>

      </div>
      <button> Generate </button>
    </div>
  );
};

export default Quote;
