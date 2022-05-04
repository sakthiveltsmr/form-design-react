import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    phone: Yup.number()
    .required("phone number is required"),
    address: Yup.string()
      .min(4, "minium characters must be 4")
      .required("address is required"),
    college: Yup.string().required("college name must be required"),
    internperiod: Yup.string().required("internperiod is required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        college: "",
        internperiod: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div className="card-container ">
          <Card
            style={{
              marginTop: "2%",
            }}
          >
            <Card.Header className="text-center">
              <h1>Sign Up</h1>
            </Card.Header>
            <Card.Body>
              <Form>
                <TextField label="First Name" name="firstName" type="text" />
                <TextField label="Last Name" name="lastName" type="text" />
                <TextField label="Email" name="email" type="email" />
                <TextField label="Password" name="password" type="password" />
                <TextField label="Phone" name="phone" type="text" />
                <TextField label="Address" name="address" type="textarea" />
                <TextField label="College" name="college" type="text" />
                <TextField
                  label="InternPeriod"
                  name="internperiod"
                  type="text"
                />
                {/* <Link to="/login" className="link"> */}
                <button className="btn btn-dark mt-2" type="submit">
                  Register
                </button>
                {/* </Link> */}
                <button className="btn btn-danger mt-2 ms-5" type="reset">
                  Reset
                </button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      )}
    </Formik>
  );
};

export default Signup;
