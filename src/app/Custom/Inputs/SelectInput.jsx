import React from "react";
import PropTypes from "prop-types";

const TextInput = ({
  input,
  width,
  type,
  label,
  placeholder,
  options,
  meta: { touched, error }
}) => {
  return (
    <div
      className={
        touched && !!error ? "form_input_wrapper_error" : "form_input_wrapper"
      }
    >
      <div className="form_lable_container">
        <label>{label && label}</label>
      </div>

      <div className="custom-select" style={{ width: "50%" }}>
        <select
          {...input}
          placeholder={placeholder}
          type={type}
          onChange={(e, data) => input.onChange(e.target.value)}
          style={{ width: width }}
          value={input.value || ""}
        >
          {options.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {touched && error && <label>{error}</label>}
    </div>
  );
};

export default TextInput;

TextInput.defaultProps = {
  width: "100%",
  options: []
};

TextInput.propTypes = {
  input: PropTypes.object,
  width: PropTypes.string,
  type: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  label: PropTypes.string,
  placeholder: PropTypes.string
};
