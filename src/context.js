import axios from "axios";
import React, { useContext, useState } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const [search, setSearch] = useState("");
    const [res, setRes] = useState("");
    const handleChange = (e) => {
        setSearch(e.target.value);
    };
    const handleSearch = (e) => {
        e.preventDefault();
        fetchUser();
    };
    const fetchUser = () => {
        axios
            .get(`https://api.github.com/users/${search}`)
            .then((response) => {
                const data = response.data;
                setRes(data);
            })
            .catch((err) => console.log(err));
    };
    return (
        <AppContext.Provider
            value={{
                search,
                res,
                setSearch,
                handleChange,
                handleSearch,
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
