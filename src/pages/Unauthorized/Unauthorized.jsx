import { useNavigate } from "react-router-dom";
import "./unauthorized.css";

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div className="container">
      <h1>Non Autorisé</h1>
      <br />
      <p>Vous n'avez pas accès à la page demandée.</p>
      <div>
        <button className="btn btn-warm" onClick={goBack}>
          Retour
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;
