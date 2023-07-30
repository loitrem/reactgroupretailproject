import { Link } from "react-router-dom";
import React, {useContext} from "react";
import { AppContext } from '../context/mainContext';
import logo from '../logoJungle.png';
import cart from '../cart.png';


function Nav (){
    let {setCall}=useContext(AppContext);

    return (
        <div className="navWrapper">
            <div className="header">
                <div className="headerLeft"><a href="#" className="logoHome"><img src={logo} alt="" className="logo" /></a></div>
                <div className="headerRight">
                    <div className="topHeaderLinks">
                        <a href="#" className="login">Login</a> | 
                        <a href="#" className="login"> SignUp</a>
                    </div>
                    <div className="bottomHeaderLinks">
                        <a href="#" className="cartText"><div className="cartText">Cart <img src={cart} alt="" className="cart" /></div></a>
                        
                    </div>
                    
                </div>
            </div>
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