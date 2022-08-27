import React, { useState } from "react";

export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
  // const [state, setState] = useState({
  //   isAuth: false,
  //   token: null
  // });

  // function handleLogin(token) {
  //   setState({
  //     ...state,
  //     isAuth: true,
  //     token: token
  //   });
  // }
  // function handleLogout() {
  //   setState({
  //     ...state,
  //     isAuth: false,
  //     token: null
  //   });
  // }

  const [isAuth , setIsAuth ] = useState(false);

  function toggle(){
    setIsAuth(!isAuth)
  }

  return (
    <AuthContext.Provider value={{ isAuth, toggle }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
