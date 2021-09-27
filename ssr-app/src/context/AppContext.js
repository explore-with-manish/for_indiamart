import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const [appData, setAppData] = useState([]);

    return (
        <AppContext.Provider value={[appData, setAppData]}>
            {props.children}
        </AppContext.Provider>
    );
};