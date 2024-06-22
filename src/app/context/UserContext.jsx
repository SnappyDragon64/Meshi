import {createContext, useState} from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [username, setUsername] = useState("");
  const [refresh, setRefresh] = useState(false);

  return (
    <UserContext.Provider value={{username, setUsername, refresh, setRefresh}}>
      {children}
    </UserContext.Provider>
  );
};
