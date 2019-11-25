import React, {useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";
import {AuthContext} from "../contexts/Authcontext";
import ThemeSelector from "../functions/ThemeSelector";

const NavBar = (StudentConsumer) => {
  const {theme} = useContext(ThemeContext);
  const {isAuth, toggleAuth} = useContext(AuthContext);
  const myTheme = ThemeSelector(theme);
  const label = isAuth ? "TRUE" : "FALSE";

  return (
    <nav style={{ background: myTheme.ui, color: myTheme.syntax}}>
      <h2>Theme: {theme.currentThemeId}</h2>
      <h1>Students App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button onClick={toggleAuth}>{label}</button>
    </nav>
  )
}

export default NavBar