import React, { useContext } from "react";
import ThemeSelector from "../functions/ThemeSelector";

// Contexts
import { StudentContext } from "../contexts/StudentsContext";
import { ThemeContext } from "../contexts/ThemeContext";

const StudentList = () => {
  const { theme } = useContext(ThemeContext);
  const { students, deleteStudent } = useContext(StudentContext);
  const myTheme = ThemeSelector(theme);

  return (
    <div className="item-list" style={{ color: myTheme.syntax, background: myTheme.bg }}>
      {console.log("TTTTTTTT2",students)}
      <ul>
        {          
          students ?
            students.map(student => {
              return (
                <li key={student.id} style={{ background: myTheme.ui }}>{student.id}- {student.name} {student.lastName} ({student.email})
                  <button className="rightButton" onClick={ () => {deleteStudent(student.id)}}>X</button>
                </li>
              )
            }) :
            <div className="loader"></div>
        }
      </ul>
    </div>
  );
}

export default StudentList;