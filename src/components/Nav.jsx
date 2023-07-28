import { Link } from "react-router-dom";
import React, {useContext} from "react";
import { AppContext } from '../context/mainContext';


function Nav (){
    let {setCall}=useContext(AppContext);

    return (
        <div className="navWrapper">
            <div className="header">Shopping Company - Jungle?</div>
            <div className="nav">
                <Link to="/">
                    <div>Home</div>
                </Link>
                <Link to="/view">
                    <div onClick={()=>{
                        setCall('?limit=0')
                    }}>View All</div>
                </Link>
                <Link to="/categories">
                    <div>Categories</div>
                </Link>
            </div> 
        </div>
    );
};

export default Nav