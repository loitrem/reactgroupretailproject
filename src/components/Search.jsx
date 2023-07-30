import { Link } from "react-router-dom";
import React, {useContext, useEffect} from "react";
import { AppContext } from '../context/mainContext';
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

function Search() {
    let {setCall}=useContext(AppContext);
    const navigate = useNavigate();
    const searchRef = useRef(null)

    let searchValue = '';

    const search = (value)=> {
        setCall('/search?q='+value)
    }

    const handleChange = (event) =>{
        searchValue = event.target.value
    }

    return (
        <div className="searchWrapper">
            <div className="search">
                <div className="searchInputWrapper">
                    <input ref={searchRef} type="text" className="searchInput" placeholder="Search items" onChange={handleChange} />
                </div>
                <div className="searchBtnWrapper">
                    <button className="searchBtn" onClick={()=>{
                        navigate('/displaysearch') 
                        search(searchValue)
                        searchRef.current.value = '';
                        }}>
                    Search</button>
                </div> 
            </div>
        </div>
    )
}

export default Search