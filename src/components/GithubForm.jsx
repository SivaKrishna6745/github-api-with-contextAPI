import React from "react";
import { useGlobalContext } from "../context";

function GithubForm() {
    const { search, handleChange, handleSearch } = useGlobalContext();
    return (
        <form className="form-group" onSubmit={handleSearch}>
            <input
                type="text"
                className="form-control"
                value={search}
                onChange={handleChange}
            />
            <button className="btn">Search</button>
        </form>
    );
}

export default GithubForm;
