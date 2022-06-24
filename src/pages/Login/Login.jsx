import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { useLogin } from "../../queries/auth/auth.query";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import * as Yup from "yup";
import InputField from "../../components/InputField/InputField";
import { toast } from "react-toastify";

// VALIDATION
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("L'adresse saisie est invalide.")
    .required("Veuillz saisir votre adresse mail."),

  password: Yup.string().required("Veuillz saisir un mot de passe."),
});

const Login = (props) => {
  const [credentials, setCredentials] = useState();
  const auth = useAuth();
  const { data, refetch, isError, error } = useLogin(credentials);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  useEffect(() => {
    if (credentials) {
      refetch();
    }
  }, [credentials, refetch]);

  useEffect(() => {
    if (data && data.success) {
      auth.setToken(data.data.accessToken);
      auth.setUserInfo({ ...data.data.user });
      auth.setIsAuthenticated(true);
      navigate(from, { replace: true });
    }
  }, [data, auth, navigate, from]);

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
      <h1>Connexion</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          setCredentials(values);
        }}
        validationSchema={loginSchema}
      >
        {({ handleSubmit, handleChange, values }) => (
          <form
            onSubmit={handleSubmit}
            className="my-5 w-50 mx-auto d-flex flex-column text-start"
          >
            <InputField
              id="email"
              placeholder="name@example.com"
              name="email"
              label="Email"
              onChange={handleChange}
              value={values.email}
            />
            <InputField
              id="password"
              placeholder="*******"
              name="password"
              label="Mot de passe"
              type="password"
              onChange={handleChange}
              value={values.password}
            />

            <NavLink to="/sign-up" className="text-center">
              <li className="d-inline-block m-3 text-primary ">
                Pas encore inscrit? Je crée mon compte.
              </li>
            </NavLink>
            <NavLink to="/reset-password" className="text-center">
              <li className="d-inline-block text-secondary  ">
                Mot de passe oublié? Réinitaliser mon mot de passe.
              </li>
            </NavLink>

            <button type="submit" className="btn btn-primary m-auto mt-5">
              Se connecter
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
