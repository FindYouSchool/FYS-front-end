import React, { useEffect } from "react";
import Loader from "../../../components/Loader/Loader";
import Notice from "../../../components/Notice/Notice";
import { useNoticeBySchool } from "../../../queries/schools/schools.query";
import { toast } from "react-toastify";
import { useSchoolCTX } from "../../../contexts/SchoolContext";

const SchoolNotice = () => {
  const { school } = useSchoolCTX();
  const {
    data: notices,
    isLoading,
    isError,
    error,
  } = useNoticeBySchool(school.id);
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
  console.log(notices);
  return (
    <div className="container text-center">
      <h3 className="m-5">
        {notices.map((notice, key) => {
          return <Notice notice={notice} key={key} />;
        })}
      </h3>
    </div>
  );
};

export default SchoolNotice;
