import React, {useContext} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";
import ThemeSelector from "../functions/ThemeSelector";


const ToggleButton = () => {
  const {theme, changeTheme} = useContext(ThemeContext);
  const myTheme = ThemeSelector(theme);

  const handleClick = () => {
    changeTheme()    
  }

  return (
    <div className="button" style={{ background: myTheme.ui, color: myTheme.syntax}} onClick={() => handleClick()}>Button</div>
  );
}
 
export default ToggleButton;