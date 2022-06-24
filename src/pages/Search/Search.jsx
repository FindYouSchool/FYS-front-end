import React, { useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import { useSearch } from "../../contexts/SearchContext";
import { useSchoolSearch } from "../../queries/schools/schools.query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./search.css";
import CardGrid from "../../components/CardGrid/CardGrid";

const Search = () => {
  const { search, filters } = useSearch();
  const { data, refetch, isLoading, isError, error } = useSchoolSearch({
    search,
    filters,
  });
  const navigate = useNavigate();

  console.log(data);

  useEffect(() => {
    if (search === "") {
      navigate("/");
    }
  });

  useEffect(() => {
    refetch();
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
      <div className="container my-5 text-center ">
        <CardGrid schools={data && data} />
      </div>
    </div>
  );
};

export default Search;
