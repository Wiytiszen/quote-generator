import React from "react";
import {fetchPosts} from "../store/actions/actionCreators";
import {connect} from "react-redux";

const Quote = (props) => {
  return (
    <div className ="generator">
      <div className="quote-container">
        <h1>
          "{props.quote}"
          <span className="author">&mdash; {props.author}</span>
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
    showQuote: () => dispatch(fetchPosts()),
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
