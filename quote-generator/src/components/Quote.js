import React from "react";
import {showQuote} from "../store/actions/actionCreators";
import {connect} from "react-redux";

const Quote = (props) => {
  return (
    <div className ="generator">
      <div className="quote-container">
        <h1>
          "{props.quote}"
          <span className="author">&mdash; Martin</span>
        </h1>

      </div>
      <button onClick ={props.showQuote}> Generate </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    quote: state.quote,
    author: state.author,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { 
    showQuote: () => dispatch(showQuote()),
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
