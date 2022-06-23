import React from "react";
import { Formik, Form, useFormik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";

import "./signup.css";
import { useSignUp } from "../../queries/auth/auth.query";
import { useAuth } from "../../contexts/AuthContext";
import InputField from "../../components/InputField/InputField";

// VALIDATION
const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("L'adresse saisie est invalide.")
    .required("Veuillz saisir votre adresse mail."),
  username: Yup.string()
    .min(5, "Veuillez saisir au moins 5 caractères.")
    .max(50, "Veuillez saisir maximum 50 caractères.")
    .required("Veuillz saisir votre nom d'utilisateur."),
  password: Yup.string()
    .min(5, "Veuillez saisir au moins 5 caractères.")
    .max(50, "Veuillez saisir maximum 50 caractères.")
    .required("Veuillz saisir un mot de passe."),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Le mot de passe de confirmation ne correspond pas."
  ),
});

const SignUp = () => {
  const { refetch } = useSignUp();
  const { setUserInfo, setIsAuthenticated, setToken } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      passwordConfirmation: "",
    },
    onSubmit: (values) => {
      refetch(values).then(({ data }) => {
        if (data.data.user) {
          setUserInfo({ ...data.data.user, roles: [1155] });
          setToken(data.data.accessToken);
          setIsAuthenticated(true);
          navigate("/profile");
        }
      });
    },
  });
  return (
    <div className="container mt-5 pt-5 w-100 d-flex justify-content-center align-items-stretch text-center flex-column">
      <h1>Créer un compte</h1>
      <Formik
        initialValues={formik.initialValues}
        onSubmit={formik.handleSubmit}
        validationSchema={SignupSchema}
      >
        <Form className="my-3 w-50 mx-auto d-flex flex-column text-start">
          <InputField
            placeholder="name@example.com"
            name="email"
            label="Email"
          />
          <InputField
            name="username"
            placeholder="Entrer un pseudo"
            label=" Nom d'utilisateur"
          />
          <InputField
            placeholder="*******"
            name="password"
            label="Mot de passe"
            type="password"
          />
          <InputField
            placeholder="*******"
            name="passwordConfirmation"
            label="Confirmer votre mot de passe"
            type="password"
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
