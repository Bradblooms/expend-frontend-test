import React from "react";
import PropTypes from "prop-types";

const TextInput = ({
  input,
  width,
  type,
  min,
  max,
  step,
  label,
  info,
  placeholder,
  autofocus,
  ref,
  setFieldToBeFocused = () => {},
  meta: { touched, error }
}) => {
  return (
    <div
      className={
        touched && !!error ? "form_input_wrapper_error" : "form_input_wrapper"
      }
      error={touched && !!error}
    >
      <div className="form_lable_container">
        <label>{label && label}</label>
      </div>

      <div>
        <input
          {...input}
          ref={input => setFieldToBeFocused(input)}
          placeholder={placeholder}
          type={type}
          style={{ width: width }}
        />
      </div>
      {touched && error && <label>{error}</label>}
    </div>
  );
};

export default TextInput;

TextInput.defaultProps = {
  width: "100%"
};

TextInput.propTypes = {
  input: PropTypes.node,
  width: PropTypes.number,
  type: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  label: PropTypes.string,
  placeholder: PropTypes.string
};
