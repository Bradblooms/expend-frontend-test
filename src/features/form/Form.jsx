import React from "react";

import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { validate } from "./formValidator";

import { storeJobs } from "./jobActions";
import { TextInput } from "../../app/Custom/Inputs/TextInput";
import SelectInput from "../../app/Custom/Inputs/SelectInput";

const Form = props => {
  const onSubmit = async values => {
    await props.storeJobs(values);
  };

  const { handleSubmit, invalid, submitting, prestine, loading } = props;

  if (loading) return <h1>Submiting the job ....</h1>;

  return (
    <div className="form_Wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="firstName"
          label="First Name *"
          type="text"
          component={TextInput}
          placeholder="First name"
          autoFocus={true}
        />
        <Field
          name="lastName"
          label="Last Name *"
          type="text"
          placeholder="Last name"
          component={TextInput}
        />

        <Field
          name="email"
          label="Email *"
          type="text"
          placeholder="Email"
          component={TextInput}
        />
        <Field
          name="telephone"
          label="Telephone *"
          type="text"
          placeholder="Telephone"
          component={TextInput}
          width={45}
        />
        <Field
          name="dateOfBirth"
          label="Date of birth "
          type="date"
          placeholder="Date of Birth"
          component={TextInput}
          width={45}
        />

        <Field
          name="age"
          label="Age"
          type="text"
          placeholder="Age"
          component={TextInput}
        />
        <Field
          name="note"
          label="Note"
          type="text"
          placeholder="Notes"
          component={TextInput}
        />

        <Field
          name="gender"
          label="Gender"
          type="text"
          placeholder="Gender"
          component={SelectInput}
          options={["", "Male", "Female"]}
          defaultValue=""
        />
        <div className="submit_button_wrapper">
          <button
            //disabled={invalid || submitting || prestine}
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
};

const mapToState = state => ({
  loading: state.jobs.loading
});

export default connect(mapToState, { storeJobs })(
  reduxForm({ form: "form", validate, enableReinitialize: true })(Form)
);
