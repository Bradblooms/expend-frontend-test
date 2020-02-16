import React from 'react';
import { connect } from 'react-redux';

//Components
import Alert from 'features/alert/Alert';
import Form from "./features/form/Form"
import FormSide from 'features/Side/FormSide';

//Actions
import { setAlert } from "./features/alert/alertActions"


const mapState = state => ({
  alert: state.alert.success
})

function App({ alert, setAlert }) {
  return (
    <div className="app_wrapper">
      <div className="form_page_Container">
        {alert && alert.msg && <Alert alert={alert} setAlert={setAlert} />}
        <Form />
        <FormSide />
      </div>
    </div>
  );
}

export default connect(mapState, { setAlert })(App);
