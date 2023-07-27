import { Link } from "react-router-dom";
import React from "react";

function Nav (){
    return (
        <div className="navWrapper">
            <div className="header">Shopping</div>
            <div className="nav">
                <Link to="/">
                    <div>Home</div>
                </Link>
                <Link to="/categories">
                    <div>Categories</div>
                </Link>
            </div> 
        </div>
    );
};

export default Nav