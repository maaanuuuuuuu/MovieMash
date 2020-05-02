import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { Theme, createMuiTheme } from "@material-ui/core";
import { purple, green } from "@material-ui/core/colors";
import { UserContext, IUser } from "./context";
import { useStateWithLocalStorage } from "./tools";
import { MainFrame } from "./features";

function App() {
  const housePartyTheme: Theme = createMuiTheme({
    palette: {
      primary: purple,
      secondary: green,
    }
  });
  const [user, setUser] = useStateWithLocalStorage("user", { id: "", email: "", isAuthenticated: false } as IUser);
  const logoutUser = (refresh: boolean = true): any => {
    const loggedOutUser: IUser = {
      id: "",
      isAuthenticated: false,
      email: "",
      token: "",
    };
    setUser(loggedOutUser);
    if (refresh) {
      window.location.reload();
    }
  };
  return (
    <ThemeProvider theme={housePartyTheme}>
      <UserContext.Provider value={{ user, setUser, logoutUser }}>
        <BrowserRouter>
          <Route path="/" component={MainFrame} exact={true} />
        </BrowserRouter>
      </UserContext.Provider>

    </ThemeProvider>
  );
}

export default App;
