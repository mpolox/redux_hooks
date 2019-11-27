import React, {createContext, useState} from 'react';
import axios from "axios";
const PATH = "https://localhost:44397/";

export const StudentContext = createContext();

const StudentContextProvider = (props) => {

  let initialStudents = null;

  const getInitialStudents = () => {
    axios.get(PATH +"user/All")
    .then(res => {
      setStudents(res.data);
    }).catch(err => {
      console.log("Error on axios request", err);
    });
    return initialStudents;
  }

  const addStudent = (name, lastName, lastNameMother, email) => {
    axios.post(PATH + "user", {name,lastName, lastNameMother, email})
    .then(res => {
      console.log("RES.DATA", res.data);
      const id = res.data.id;
      setStudents([...students, {id, name,lastName, lastNameMother, email}]);
    })
    .catch(err => {
      console.log("ERR", err)
    })
  }

  const deleteStudent = (id) => {
    console.log("DELTE:", {id});
    axios.delete(PATH + "user?id="+ id)
    .then(res => {
      console.log("DELETED");
    })
    .catch(err => {
      console.log("ERR", err)
    })  }

  const [students, setStudents] = useState(getInitialStudents);


  return (
    <StudentContext.Provider value={{students, addStudent, deleteStudent}}>
    {props.children}
    </StudentContext.Provider>
  );
}
 
export default StudentContextProvider;