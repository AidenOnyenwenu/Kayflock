// Import the necessary packages
import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";

function NoPage() {
    /*
    This is the component which is rendered when the user tries to access a invalid URL
    */
    
    return (
        <>
        <Header />
        <main>
            <div id="page-not-found">
                <h2 className="page-not-found-message">Sorry, but the page you're trying to travel to does not exist.</h2>
                <br></br>
                <h2>Click <Link to="/">here</Link> to be navigated back to the homepage.</h2>
            </div>
        </main>
        </>
    );
}

// This exports the app component by default, meaning the component does not have to be selected by name in its destination
export default NoPage;