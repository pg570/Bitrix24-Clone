import React, { useState } from "react";

export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {


  const [isAuth , setIsAuth ] = useState(true);

  function toggle(){
    setIsAuth(!isAuth)
  }

  return (
    <AuthContext.Provider value={{ isAuth: isAuth, toggle:  toggle }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
