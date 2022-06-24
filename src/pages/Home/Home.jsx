import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import { useSchools } from "../../queries/schools/schools.query";
import { toast } from "react-toastify";
import CardGrid from "../../components/CardGrid/CardGrid";

const Home = () => {
  const { data, isError, isLoading, error } = useSchools();
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
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container my-5 text-center ">
          <CardGrid schools={data && data.schools} />
        </div>
      )}
    </div>
  );
};

export default Home;
