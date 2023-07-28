import { Link } from "react-router-dom";
import React, {useContext} from "react";
import { AppContext } from '../context/mainContext';
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function Nav (){
    let {setCall}=useContext(AppContext);
    const navigate = useNavigate();
    const searchRef = useRef(null)


    let searchValue = '';

    const search = (value)=> {
        console.log('/search?q='+value);
        setCall('/search?q='+value)
    }

    const handleChange = (event) =>{
        searchValue = event.target.value
    }

    return (
        <div className="navWrapper">
            <div className="header">Shopping Company - Jungle?</div>
            <div className="nav">
                <Link to="/">
                    <div>Home</div>
                </Link>
                <Link to="/viewall">
                    <div>View All</div>
                </Link>
                <Link to="/categories">
                    <div>Categories</div>
                </Link>
                <Link to="/displaysearch">
                    <div className="search"><div className="searchInputWrapper"></div><input ref={searchRef} type="text" className="searchInput" onChange={handleChange} /><div className="searchBtnWrapper"><button className="searchBtn" onClick={()=>{
                        navigate('/displaysearch')
                        search(searchValue)
                        searchRef.current.value = '';
                    }}>Search</button></div></div>
                </Link>
            </div> 
        </div>
    );
};

export default Nav