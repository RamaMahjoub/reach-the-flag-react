import React from "react";
import { Link } from "react-router-dom";

export const NoMatch = () => {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/levels">Go to the start page</Link>
            </p>
        </div>
    );
}