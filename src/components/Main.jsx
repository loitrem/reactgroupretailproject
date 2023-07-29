import React, {useEffect, useContext} from 'react'
import { AppContext } from '../context/mainContext';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Main(props) {

    console.log("*************************");
    console.log('Main Page Data ', props.products);
    console.log("*************************");

    const navigate = useNavigate();

    let dataArray = []

    if (props.products){
        props.products.map((current)=>{
            dataArray.push(current);
        })
    }

    return (
        <div className="mainWrapper">

            <div className="main">
                <div className="mainBannerWrapper">
                    <div className="mainBanner">
                        <div className="clothingBoxWrapper">
                            <div className="clothingTitle">Clothing</div>
                            <div className="clothingOuter">
                                <div className="clothing">
                                    <div className="bannerTopImgWrapper">
                                        <img className='bannerTopImg' src={dataArray[42].images[4]}/>
                                    </div>
                                    <div className="bannerBottomTitle">
                                        Women's Apparel
                                    </div>
                                </div>
                                <div className="clothing">
                                    <div className="bannerTopImgWrapper">
                                        <img className='bannerTopImg' src={dataArray[51].images[2]}/>
                                    </div>
                                    <div className="bannerBottomTitle">
                                        Men's Apparel
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="groceriesBoxWrapper">
                        <div className="clothingTitle">Clothing</div>
                            <div className="clothingOuter">
                                <div className="clothing">
                                    <div className="bannerTopImgWrapper">
                                        <img className='bannerTopImg' src={dataArray[42].images[4]}/>
                                    </div>
                                    <div className="bannerBottomTitle">
                                        Women's Apparel
                                    </div>
                                </div>
                                <div className="clothing">
                                    <div className="bannerTopImgWrapper">
                                        <img className='bannerTopImg' src={dataArray[51].images[2]}/>
                                    </div>
                                    <div className="bannerBottomTitle">
                                        Men's Apparel
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="electronicsBoxWrapper">
                        <div className="clothingTitle">Clothing</div>
                            <div className="clothingOuter">
                                <div className="clothing">
                                    <div className="bannerTopImgWrapper">
                                        <img className='bannerTopImg' src={dataArray[42].images[4]}/>
                                    </div>
                                    <div className="bannerBottomTitle">
                                        Women's Apparel
                                    </div>
                                </div>
                                <div className="clothing">
                                    <div className="bannerTopImgWrapper">
                                        <img className='bannerTopImg' src={dataArray[51].images[2]}/>
                                    </div>
                                    <div className="bannerBottomTitle">
                                        Men's Apparel
                                    </div>
                                </div>
                            </div>
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