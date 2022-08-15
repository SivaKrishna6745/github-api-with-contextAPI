import React from "react";
import { useGlobalContext } from "../context";

function GithubDetails() {
    const { res } = useGlobalContext();
    return (
        <>
            <h5>Username: {res.login}</h5>
            <h5>
                Avatar: <br />
                <img
                    src={res.avatar_url}
                    alt="avatar"
                    className="profile-img"
                />
            </h5>
        </>
    );
}

export default GithubDetails;
