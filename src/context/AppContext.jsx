import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [ username, setUsername ] = useState("");
    const [ refresh, setRefresh ] = useState(false);

    return (
        <AppContext.Provider value={{ username, setUsername, refresh, setRefresh}}>
            { children }
        </AppContext.Provider>
    );
};
