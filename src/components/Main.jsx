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
                        <div className="electronicsBoxWrapper">
                        <div className="electronicsTitle">Electronics</div>
                            <div className="electronicsOuter">
                                <div className="electronics">
                                    <div className="bannerTopImgWrapper">
                                        <img className='bannerTopImg' src={dataArray[1].images[2]}/>
                                    </div>
                                    <div className="bannerBottomTitle">
                                        Smartphones
                                    </div>
                                </div>
                                <div className="electronics">
                                    <div className="bannerTopImgWrapper">
                                        <img className='bannerTopImg' src={dataArray[7].images[4]}/>
                                    </div>
                                    <div className="bannerBottomTitle">
                                        Laptops
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="furnitureBoxWrapper">
                        <div className="furnitureTitle">Furniture</div>
                            <div className="furnitureOuter">
                                <div className="furniture">
                                    <div className="bannerTopImgWrapper">
                                        <img className='bannerTopImg' src={dataArray[31].images[1]}/>
                                    </div>
                                    <div className="bannerBottomTitle">
                                        Outdoor
                                    </div>
                                </div>
                                <div className="furniture">
                                    <div className="bannerTopImgWrapper">
                                        <img className='bannerTopImg' src={dataArray[34].images[0]}/>
                                    </div>
                                    <div className="bannerBottomTitle">
                                        Dressers
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="topMainWrapper">
                    <div className="topMainContainer">
                        <div className="topMain">
                            <div className="topMainTop">
                                <img className='topMainTopImg' src={dataArray[14].images[0]} alt="" />
                            </div>
                            <div className="topMainBottom">
                                <div className="topMainBottomTitle">{dataArray[14].title}</div>
                                <div className="topMainBottomBrand">{dataArray[14].brand}</div>
                                <div className="topMainBottomRating">Customer Rating: {dataArray[14].rating}</div>
                                <div className="topMainBottomSalePriceWrapper">
                                    <div className="topMainBottomRegularPrice">Reg. <strike>${dataArray[14].price}</strike> </div>
                                    <div className="percentageOff">{dataArray[15].discountPercentage}%</div>
                                </div>
                                <div className="topMainBottomSalePrice">${parseFloat((dataArray[15].price*(dataArray[15].discountPercentage/100)+dataArray[15].price)).toFixed(2)}</div>
                            </div>
                        </div>
                        <div className="topMain">
                            <div className="topMainTop">
                                <img className='topMainTopImg' src={dataArray[23].images[0]} alt="" />
                            </div>
                            <div className="topMainBottom">
                                <div className="topMainBottomTitle">{dataArray[23].title}</div>
                                <div className="topMainBottomBrand">{dataArray[23].brand}</div>
                                <div className="topMainBottomRating">Customer Rating: {dataArray[23].rating}</div>
                                <div className="topMainBottomSalePriceWrapper">
                                    <div className="topMainBottomRegularPrice">Reg. <strike>${dataArray[23].price}</strike> </div>
                                    <div className="percentageOff">{dataArray[23].discountPercentage}%</div>
                                </div>
                                <div className="topMainBottomSalePrice">${parseFloat((dataArray[23].price*(dataArray[23].discountPercentage/100)+dataArray[15].price)).toFixed(2)}</div>
                            </div>
                        </div>
                        <div className="topMain">
                            <div className="topMainTop">
                                <img className='topMainTopImg' src={dataArray[17].images[0]} alt="" />
                            </div>
                            <div className="topMainBottom">
                                <div className="topMainBottomTitle">{dataArray[17].title}</div>
                                <div className="topMainBottomBrand">{dataArray[17].brand}</div>
                                <div className="topMainBottomRating">Customer Rating: {dataArray[17].rating}</div>
                                <div className="topMainBottomSalePriceWrapper">
                                    <div className="topMainBottomRegularPrice">Reg. <strike>${dataArray[17].price}</strike> </div>
                                    <div className="percentageOff">{dataArray[17].discountPercentage}%</div>
                                </div>
                                <div className="topMainBottomSalePrice">${parseFloat((dataArray[15].price*(dataArray[15].discountPercentage/100)+dataArray[15].price)).toFixed(2)}</div>
                            </div>
                        </div>
                    </div>
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