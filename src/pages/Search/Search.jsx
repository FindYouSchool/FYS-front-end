import React, { useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import { useSearch } from "../../contexts/SearchContext";
import { useSchools } from "../../queries/schools/schools.query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./search.css";

const Search = () => {
  const { search, filters } = useSearch();
  const { data, refetch, isLoading, isError, error } = useSchools();
  const navigate = useNavigate();

  useEffect(() => {
    if (search === "") {
      navigate("/");
    }
  });

  useEffect(() => {
    refetch({ search, filters });
  }, [search, filters, refetch]);

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

  if (isLoading) {
    return <Loader size="large" />;
  }
  if (!data || data.length === 0) {
    return (
      <div className="container mt-5 py-4 w-100 text-center">
        <h1 className="text-secondary">Aucun résultat pour : {search}</h1>
      </div>
    );
  }
  return (
    <div className="container py-4 w-100 text-center">
      <h1>Resultat pour : {search}</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default Search;
