import React, { Component } from "react";

import { connect } from "react-redux";
import { Field, reduxForm, reset } from "redux-form";
import {
  createValidator,
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";

import { storeJobs } from "./jobActions";
import TextInput from "../../app/Custom/Inputs/TextInput";

const isValidEmail = createValidator(
  message => value => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return message;
    }
  },
  "Invalid email address"
);

const validate = combineValidators({
  firstName: isRequired({ message: "plase enter your first name" }),
  email: composeValidators(
    isRequired({ message: "plase enter your email address" }),
    isValidEmail
  )()
});

class Form extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = async values => {
    console.log(values);
    await this.props.storeJobs(values);
    //this.props.reset("form");
  };

  componentDidMount() {
    this.setState(() => {
      this.textInput.focus();
    });
  }

  render() {
    const { handleSubmit, invalid, submitting, prestine } = this.props;
    return (
      <div className="form_Wrapper">
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            setFieldToBeFocused={input => {
              this.textInput = input;
            }}
            name="firstName"
            label="First Name"
            type="text"
            component={TextInput}
            placeholder="First name"
          />
          <Field
            name="lastName"
            label="Last Name"
            type="text"
            placeholder="Last name"
            component={TextInput}
          />

          <Field
            name="email"
            label="Email"
            type="text"
            placeholder="Email"
            component={TextInput}
          />
          <Field
            name="telephone"
            label="Telephone"
            type="text"
            placeholder="Telephone"
            component={TextInput}
          />
          <Field
            name="dateOfBirth"
            label="Date of birth"
            type="text"
            placeholder="Date of Birth"
            component={TextInput}
          />

          <Field
            name="age"
            label="Age"
            type="text"
            placeholder="Age"
            component={TextInput}
          />
          <Field
            name="telephone"
            label="telephone"
            type="text"
            placeholder="Notes"
            component={TextInput}
          />
          <Field
            name="telephone"
            label="telephone"
            type="text"
            placeholder="Notes"
            component={TextInput}
          />
          <Field
            name="gender"
            label="Gender"
            type="text"
            placeholder="Gender"
            component={TextInput}
          />
          <div className="submit_button_wrapper">
            <button
              disabled={invalid || submitting || prestine}
              className={
                invalid || submitting || prestine
                  ? "submit_button disabled_button"
                  : "submit_button active_button"
              }
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = store => ({});

// const mapDispatchToProps = dispatch => {
//   return {
//     storeJobs: jobs => {
//       dispatch(storeJobs(jobs));
//     }
//   };
// };

export default connect(mapStateToProps, { storeJobs })(
  reduxForm({ form: "form", validate, enableReinitialize: true })(Form)
);
