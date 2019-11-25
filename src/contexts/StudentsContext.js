import React, {createContext, useState} from 'react';
import axios from "axios";

export const StudentContext = createContext();

const StudentContextProvider = (props) => {

  const initialStudents = 
  [
    {
      name: "Marcopolo",
      lastName: "Ramos",
      lastNameMother: "Peña",
      number: "987654321",
      email: "mpolox@gmail.com"
    },
    {
      name: "Emilia",
      lastName: "Ramos",
      lastNameMother: "Galvan",
      number: "321321321",
      email: "emy@gmail.com"
    },
    {
      name: "Alexandra",
      lastName: "Galván",
      lastNameMother: "Esparza",
      number: "654321654",
      email: "alex@gmail.com"
    },
    {
      name: "Polin",
      lastName: "Ramos",
      lastNameMother: "Galván",
      number: "111222333",
      email: "polin@gmail.com"
    }
  ]

  const getInitialStudents = () => {
    console.log("Execute axios");
    axios.get("https://localhost:44397/user/All")
    .then(res => {
      console.log("-------->", res.data);
    });
    return initialStudents;
  }

  const [students, setStudents] = useState(getInitialStudents);

  const addStudent = (name, lastName, lastNameMother, number, email) => {
    setStudents(...students, 
      {name, lastName, lastNameMother, number, email}
    );
  }

  return (
    <StudentContext.Provider value={{students, addStudent}}>
    {props.children}
    </StudentContext.Provider>
  );
}
 
export default StudentContextProvider;