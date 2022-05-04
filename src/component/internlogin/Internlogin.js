import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import { Card } from "react-bootstrap";

const Internlogin = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
  });
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div className="card-container d-flex justify-content-center mt-5">
          <Card
            style={{
              marginTop: "2%",
              width: "400px",
            }}
          >
            <Card.Header className="text-center">
              <h1>Sign in</h1>
            </Card.Header>
            <Card.Body>
              <Form>
                <TextField label="Email" name="email" type="email" />
                <TextField label="Password" name="password" type="password" />
                <div className="text-center">
                  <button
                    className="btn btn-dark mt-2 text-center"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <div className="text-center mt-3">
                  <a href="/" className="text-primary mt-2 ">
                    Back to Register
                  </a>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      )}
    </Formik>
  );
};

export default Internlogin;
