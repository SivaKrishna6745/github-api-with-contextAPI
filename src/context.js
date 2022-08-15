import React, { useContext, useState } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const [change, setChange] = useState("");
    const [search, setSearch] = useState(false);

    const handleChange = (e) => {
        setChange(e.target.value);
    };
    return (
        <AppContext.Provider
            value={{
                change,
                search,
                setChange,
                setSearch,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
