import classes from "./Alert.module.css";
import ReactDOM from "react-dom";
import React from "react";

// This backdrop is to avoid the nesting of div elements when they serve the purpose of an overlay.
// It is rooted to a div in the body instead of in the root div, to simplify the DOM.
const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onConfirm}>
      <div className={classes.alert}>
        <div className={classes.alert__header}>{props.title} </div>
        <div className={classes.alert__content}>
          {props.message}
          <button
            type="reset"
            className={classes.button__ok}
            onClick={props.onConfirm}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

const Alert = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop
          onConfirm={props.onConfirm}
          title={props.title}
          message={props.message}
        />,
        document.getElementById("backdrop-root")
      )}
    </React.Fragment>
  );
};

export default Alert;
