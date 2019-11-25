import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

const  ThemeContextProvider = (props) => {

  const initialSate = {
    currentThemeId: 1,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee"},
    dark:  { syntax: "#eee", ui: "#333", bg: "#555"},
    red:  { syntax: "#111222", ui: "#333666", bg: "#ccc555"},
    blue:  { syntax: "#111222", ui: "#025734", bg: "#543123"}
  }
  const [theme, setTheme] = useState(initialSate);

  /* function to change the theme */
  const changeTheme = () => {
    let newValue = theme.currentThemeId + 1;
    if (newValue > 4) {
      newValue = 1;
    }
    
    setTheme({ ...theme, currentThemeId:newValue});    
  }

    return (
      <ThemeContext.Provider value={{theme,changeTheme}}>
        {props.children}
      </ThemeContext.Provider>
    );  

}

export default ThemeContextProvider;