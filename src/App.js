import React from "react";
import "./App.css";
import GithubDetails from "./components/GithubDetails";
import GithubForm from "./components/GithubForm";
import { useGlobalContext } from "./context";

function App() {
    const { res } = useGlobalContext();
    return (
        <div className="App">
            <h1>Hello Elliot!!!</h1>
            <GithubForm />
            {res && <GithubDetails />}
        </div>
    );
}

export default App;
