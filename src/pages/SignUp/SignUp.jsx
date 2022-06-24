import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";
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
  const [credentials, setCredentials] = useState();
  const { refetch, isError, error } = useSignUp(credentials);
  const { setUserInfo, setIsAuthenticated, setToken } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (credentials) {
      refetch()
        .then(({ data }) => {
          if (data && data.data.user) {
            setUserInfo({ ...data.data.user, roles: [1155] });
            setToken(data.data.accessToken);
            setIsAuthenticated(true);
            navigate("/profile");
          }
        })
        .catch((err) => {
          throw new Error(err);
        });
    }
  }, [
    credentials,
    refetch,
    navigate,
    setIsAuthenticated,
    setToken,
    setUserInfo,
  ]);

  useEffect(() => {
    if (isError) {
      toast.error(error.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [isError, error]);

  return (
    <div className="container mt-5 pt-5 w-100 d-flex justify-content-center align-items-stretch text-center flex-column">
      <h1>Créer un compte</h1>
      <Formik
        initialValues={{
          email: "",
          username: "",
          password: "",
          passwordConfirmation: "",
        }}
        onSubmit={({ email, password, username }) => {
          console.log({ email, password, username });
          setCredentials({ email, password, username });
        }}
        validationSchema={SignupSchema}
      >
        {({ handleSubmit, handleChange, values }) => (
          <form
            onSubmit={handleSubmit}
            className="my-3 w-50 mx-auto d-flex flex-column text-start"
          >
            <InputField
              placeholder="name@example.com"
              name="email"
              label="Email"
            />
            <InputField
              name="username"
              placeholder="Entrer un pseudo"
              label=" Nom d'utilisateur"
              onChange={handleChange}
              value={values.username}
            />
            <InputField
              placeholder="*******"
              name="password"
              label="Mot de passe"
              type="password"
              onChange={handleChange}
              value={values.password}
            />
            <InputField
              placeholder="*******"
              name="passwordConfirmation"
              label="Confirmer votre mot de passe"
              type="password"
              onChange={handleChange}
              value={values.passwordConfirmation}
            />
            <NavLink to="/login" className="text-center">
              <li className="d-inline-block m-3 color-primary ">
                Déjà inscrit? Je me connecte.
              </li>
            </NavLink>

            <button type="submit" className="btn btn-primary m-auto mt-5">
              Valider
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
