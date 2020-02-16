import React, { Fragment } from "react";

function Alert({ alert, setAlert }) {
  const danger = alert.alertType === "danger";
  return (
    <Fragment>
      <div className="alert_modal_wrapper">
        <div className="alert_box_wrapper">
          <div>
            {danger ? (
              <i
                className={`${alert.alertType}_color fas fa-exclamation-triangle`}
              ></i>
            ) : (
              <i className={`${alert.alertType}_color fas fa-check`}></i>
            )}
          </div>
          <h1 className={`${alert.alertType}_color`}>{alert.header}</h1>
          <h4>{alert.msg}</h4>
          {danger && (
            <button
              className={`submit_button ${alert.alertType}_button`}
              onClick={() => setAlert(undefined)}
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    </Fragment>
  );
}
export default Alert;
