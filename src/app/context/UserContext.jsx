import {createContext, useEffect, useState} from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [username, setUsername] = useState(() => {
    const savedUsername = localStorage.getItem("username");
    return savedUsername ? savedUsername : "";
  });

  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

  const [refresh, setRefresh] = useState(false);

  return (
    <UserContext.Provider value={{username, setUsername, refresh, setRefresh}}>
      {children}
    </UserContext.Provider>
  );
};
