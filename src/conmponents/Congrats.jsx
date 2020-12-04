import React from "react";

const Congrats = (props) => {
  return (
    <React.Fragment>
      {props.success ? (
        <div data-test="component-congrats" className="alert alert-success">
          <span data-test="congrats-message">
            Congratulation! You gussed the word!
          </span>
        </div>
      ) : (
        <div data-test="component-congrats"></div>
      )}
    </React.Fragment>
  );
};

export default Congrats;
