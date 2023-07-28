import React, {useEffect, useContext} from 'react'
import { AppContext } from '../context/mainContext';
import { useNavigate } from "react-router-dom";


function Main() {

    let {call, setCall}=useContext(AppContext);
    let {data, setData}=useContext(AppContext);
    console.log("*************************");
    console.log(call);
    console.log("*************************");

    const navigate = useNavigate();



    return (
        <div onClick={()=>{
            navigate('/viewall')
            setCall('?limit=30')
        }}>
            test
            <div className="mainWrapper">

                <div className="main">

                    <div className="mainBannerWrapper">

                        <div className="mainBanner">Banner Here</div>

                    </div>

                    <div className="topMainWrapper">
                        sale ads?
                        <div className="topMain">Products Here</div>
                        <div className="topMain">Products Here</div>
                        <div className="topMain">Products Here</div>
                        <div className="topMain">Products Here</div>
                        <div className="topMain">Products Here</div>
                        <div className="topMain">Products Here</div>

                    </div>
                    <div className="midMainWrapper">most viewed?
                        <div className="midMain">Products Here</div>
                        <div className="midMain">Products Here</div>
                        <div className="midMain">Products Here</div>
                        <div className="midMain">Products Here</div>
                        <div className="midMain">Products Here</div>
                        <div className="midMain">Products Here</div>

                    </div>
                    <div className="bottomMainWrapper">

                        recommended?
                        <div className="bottomMain">Products Here</div>
                        <div className="bottomMain">Products Here</div>
                        <div className="bottomMain">Products Here</div>
                        <div className="bottomMain">Products Here</div>
                        <div className="bottomMain">Products Here</div>
                        <div className="bottomMain">Products Here</div>

                    </div>


                </div>

            </div>
        </div>
    )
}

export default Main