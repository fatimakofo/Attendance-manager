import { createContext, useEffect, useState } from "react";
import { base_url } from "../utils/constants";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [tutors, setTutors] = useState([]);

  const getAllStudents = () => {
    fetch(`${base_url}/user/all/student`)
      .then((res) => res.json())
      .then((output) => {
        console.log(output);
        setStudents(output.data.users);
      })
      .catch((err) => console.log(err));
  };
  const getAllTutors = () => {
    fetch(`${base_url}/user/all/tutor`)
      .then((res) => res.json())
      .then((output) => {
        console.log(output);
        setTutors(output.data.users);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllStudents();
    getAllTutors();
  }, []);

  const value = {
    students,
    tutors,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
