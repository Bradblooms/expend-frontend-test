import React from "react";
import PropTypes from "prop-types";

export const TextInput = React.forwardRef(
  (
    {
      input,
      width,
      type,
      label,
      placeholder,
      autoFocus,
      meta: { touched, error }
    },
    ref
  ) => (
    <div
      className={
        touched && !!error ? "form_input_wrapper_error" : "form_input_wrapper"
      }
    >
      <div className="form_lable_container">
        <label>
          <p>{label && label}</p>
        </label>
      </div>

      <div>
        <input
          {...input}
          ref={ref}
          placeholder={placeholder}
          type={type}
          style={{ width: `${width}%` }}
          autoFocus={autoFocus}
        />
      </div>
      {touched && error && <label>{error}</label>}
    </div>
  )
);

TextInput.defaultProps = {
  width: 100
};

TextInput.propTypes = {
  input: PropTypes.object,
  width: PropTypes.number,
  type: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  label: PropTypes.string,
  placeholder: PropTypes.string
};
