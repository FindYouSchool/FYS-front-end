import React from "react";
import { Formik, Form, useFormik } from "formik";
import { NavLink } from "react-router-dom";

import "./signup.css";

const SignUp = () => {
  // const [userInfo, setUserInfo] = useState();

  const formik = useFormik({
    initialValues: {
      email: "",
      lastname: "",
      firstname: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      // setUserInfo(values);
    },
  });
  return (
    <div
      style={{ height: "100vh" }}
      className="container w-100 d-flex justify-content-center align-items-stretch text-center flex-column"
    >
      <h1 className="">Créer un compte</h1>
      <Formik
        initialValues={formik.initialValues}
        onSubmit={formik.handleSubmit}
      >
        <Form className="my-5 w-50 mx-auto d-flex flex-column text-start">
          <label className="mt-5" htmlFor="email">
            Email
          </label>
          <input
            required
            type="email"
            className="form-control m-auto"
            id="email"
            placeholder="name@example.com"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <label className="mt-5" htmlFor="email">
            Nom
          </label>
          <input
            required
            className="form-control m-auto"
            id="lastname"
            placeholder="Entrer votre nom"
            value={formik.values.lastname}
            onChange={formik.handleChange}
          />
          <label className="mt-5" htmlFor="email">
            Prénom
          </label>
          <input
            required
            className="form-control m-auto"
            id="firstname"
            placeholder="Entrer votre prénom"
            value={formik.values.firstname}
            onChange={formik.handleChange}
          />

          <label className="mt-5" htmlFor="password">
            Mot de passe
          </label>
          <input
            required
            type="password"
            className="form-control  m-auto"
            id="password"
            placeholder="*******"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <label className="mt-5" htmlFor="password">
            Confirmer votre mot de passe{" "}
          </label>
          <input
            required
            type="password"
            className="form-control  m-auto"
            id="confirm-password"
            placeholder="*******"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <NavLink to="/login" className="text-center">
            <li className="d-inline-block m-3 color-primary ">
              Déjà inscrit? Je me connecte.
            </li>
          </NavLink>

          <button type="submit" className="btn btn-primary m-auto mt-5">
            Valider
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
