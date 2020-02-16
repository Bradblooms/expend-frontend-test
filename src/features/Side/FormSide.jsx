import React, { Fragment } from "react";
import { ReactComponent as Svg } from "./curve_side.svg";

function FormSide() {
  return (
    <Fragment>
      <div className="form_side_wrapper">
        <Svg />
        <div className="huge_custom_text">
          <h1>JOB FORM</h1>
        </div>
      </div>
    </Fragment>
  );
}
export default FormSide;
