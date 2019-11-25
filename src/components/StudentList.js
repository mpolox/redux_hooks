import React, {useContext} from "react";
import ThemeSelector from "../functions/ThemeSelector";

// Contexts
import { StudentContext } from "../contexts/StudentsContext";
import {ThemeContext} from "../contexts/ThemeContext";

const StudentList = () => {
  const {theme} = useContext(ThemeContext);
  const {students} = useContext(StudentContext);
  const myTheme = ThemeSelector(theme);

  return (
    <div className="item-list" style={{ color: myTheme.syntax, background: myTheme.bg }}>
      <ul>
        {
          students.map(student => {
            return (
              <li key={student.number} style={{ background: myTheme.ui}}>{student.name} {student.lastName} ({student.email})</li>
            )
          })
        }
      </ul>
    </div>
  );
}
 
export default StudentList;