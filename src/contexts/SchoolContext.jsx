import React, { useContext, useState } from "react";

const SCHOOL_DEFAULT = {
  school: {},
  setSchool: () => {},
};
export const SchoolContext = React.createContext(SCHOOL_DEFAULT);

export const SchoolProvider = (props) => {
  const [school, setSchool] = useState(SCHOOL_DEFAULT.school);
  return (
    <SchoolContext.Provider value={{ school, setSchool }}>
      {props.children}
    </SchoolContext.Provider>
  );
};

export const useSchoolCTX = () => useContext(SchoolContext);
