import React, { useContext, useState } from "react";

import ThemeSelector from "../functions/ThemeSelector";

// Contexts
import { StudentContext } from "../contexts/StudentsContext";
import { ThemeContext } from "../contexts/ThemeContext";


const StudentForm = () => {

  
  const { theme } = useContext(ThemeContext);
  const { addStudent } = useContext(StudentContext);

  const myTheme = ThemeSelector(theme);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameMother, setLastNameMother] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && lastName && email) {
      addStudent(name,lastName,lastNameMother,email);
      setName("");
      setLastName("");
      setLastNameMother("");
      setEmail("");
    } else {
      console.log("Nothing to add");
    }
  }

  return (
  <form onSubmit={handleSubmit} style={{ color: myTheme.syntax, background: myTheme.bg }}>    
    <input style={{ background: myTheme.ui, color: myTheme.syntax}} type="text" placeholder={"Name:"} onChange={(e) => setName(e.target.value)} value={name}></input>
    <input style={{ background: myTheme.ui, color: myTheme.syntax}} type="text" placeholder={"Apellido Paterno:"} onChange={(e) => setLastName(e.target.value)} value={lastName}></input>
    <input style={{ background: myTheme.ui, color: myTheme.syntax }} type="text" placeholder={"Apellido Materno:"} onChange={(e) => setLastNameMother(e.target.value)} value={lastNameMother}></input>
    <input style={{ background: myTheme.ui, color: myTheme.syntax }} type="text" placeholder={"Email:"} onChange={(e) => setEmail(e.target.value)} value={email}></input>
    <input type="submit" value ="Agregar Usuario"></input>
  </form> 
  );
}
 
export default StudentForm;
