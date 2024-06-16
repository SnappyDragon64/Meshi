import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [ username, setUsername ] = useState("");
    const [ refresh, setRefresh ] = useState(false);

    const handleRefresh = () => {
        setRefresh(!refresh);
    };

    return (
        <AppContext.Provider value={{ username, setUsername, refresh, handleRefresh }}>
            { children }
        </AppContext.Provider>
    );
};
