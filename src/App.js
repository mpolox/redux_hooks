import React from "react";
import NavBar from "./components/Navbar";
import StudentList from "./components/StudentList";


import ToggleButton from "./components/ToggleButton";

//Context Providers
import StudentContextProvider from "./contexts/StudentsContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/Authcontext";
import StudentForm from "./components/StudentsForm";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar/>
          <StudentContextProvider>
            <StudentList/>
            <StudentForm/>
          </StudentContextProvider>
          <ToggleButton/>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );  
}

export default App;
