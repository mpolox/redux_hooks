import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  
  const [isAuth, setIsAuth] = useState(false);

  const toggleAuth = () => {
    setIsAuth (!isAuth);
  }

  return (  
    <AuthContext.Provider value={{isAuth,toggleAuth}}>
    {props.children}
    </AuthContext.Provider>
  );
}
 
export default AuthContextProvider;