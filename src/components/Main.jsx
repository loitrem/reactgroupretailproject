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
        <div className="mainWrapper">

            <div className="main">

                <div className="mainBannerWrapper">

                    <div className="mainBanner">

                        <div className="clothingBoxWrapper">
                            <div className="clothing">
                                <div className="bannerTopImg">
                                    <img src=''/>
                                </div>
                                <div className="bannerBottomTitle">
                                    
                                </div>
                                
                            </div>
                            <div className="clothing"></div>
                            <div className="clothing"></div>
                            <div className="clothing"></div>
                        </div>
                        <div className="groceriesBoxWrapper">
                            <div className="groceries"></div>
                            <div className="groceries"></div>
                            <div className="groceries"></div>
                            <div className="groceries"></div>
                        </div>
                        <div className="electronicsBoxWrapper">
                            <div className="electronics"></div>
                            <div className="electronics"></div>
                            <div className="electronics"></div>
                            <div className="electronics"></div>
                        </div>

                    </div>

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
    )
}

export default Main