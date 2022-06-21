import React, { useState } from "react";
import { Formik, Form, useFormik } from "formik";
import { useLogin } from "../../queries/auth.query";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState();
  const { data, refetch } = useLogin(credentials);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      setCredentials(values);
      refetch(values);
      console.log("Values : " + values);
    },
  });
  console.log(data);

  if (data && data.status) {
    navigate("/");
  }
  return (
    <div
      style={{ height: "100vh" }}
      className="container w-100 d-flex justify-content-center align-items-stretch text-center flex-column"
    >
      <h1 className="my-5">Connexion</h1>
      <Formik
        initialValues={formik.initialValues}
        onSubmit={formik.handleSubmit}
      >
        <Form className="my-5 w-50 mx-auto d-flex flex-column text-start">
          <label className="mt-5" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            className="form-control m-auto"
            id="email"
            placeholder="name@example.com"
            value={formik.values.email}
            onChange={formik.handleChange}
          />

          <label className="mt-5" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="form-control  m-auto"
            id="password"
            placeholder="*******"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <NavLink to="/sign-up">
            <li className="d-inline-block m-3 color-primary">
              Pas encore inscrit? Cliquez ici pour créer un compte.
            </li>
          </NavLink>

          <button type="submit" className="btn btn-primary m-auto mt-5">
            Se connecter
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
