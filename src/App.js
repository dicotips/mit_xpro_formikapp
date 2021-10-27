import React from "react";
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      emailField: '',
      passwordField: ''
    },
    onSubmit: values => {
      console.log('form:', values);
    },
    validate: values  => {
      let errors = {};
      if (!values.emailField) {
        errors.emailError = "Email is Required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
        errors.emailError = 'Username should be an email';
      };
      if (!values.passwordField) {
        errors.pswError = "Field Required";
      }
      if (values.passwordField && values.emailField) {
        alert("Login Successful");
      }
      return errors;

     }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input
          id="emailField"
          type="email"
          onSubmit={formik.handleChange}
          value={formik.values.emailError}
        />
        {formik.errors.emailError ? (
          <div style={{ color: "red" }}>{formik.errors.emailError}</div>
        ) : null}
        <div>Password</div>
        <input
          id="passwordField"
          type="password"
          onSubmit={formik.handleChange}
          value={formik.values.pswError}
        />
        {formik.errors.pswError ? (
          <div style={{ color: "red" }}>{formik.errors.pswError}</div>
        ) : null}
        <button type="submit" id="submitBtn">Submit</button>
      </form>
    </div>
  );
}

export default App;