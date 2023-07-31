import React, {useEffect, useContext} from 'react'
import { AppContext } from '../context/mainContext';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Main(props) {

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
                                    <div className="bannerTopImgWrapper" onClick={()=>{

                                    }}>
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
                <div className="categoryTitle sale">Items On Sale</div>
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
                                    <div className="topMainBottomRegularPrice">Reg. <strike>${parseFloat((dataArray[14].price*(dataArray[14].discountPercentage/100)+dataArray[14].price)).toFixed(2)}</strike> </div>
                                    <div className="percentageOff">{dataArray[14].discountPercentage}% OFF</div>
                                </div>
                                <div className="topMainBottomSalePrice">${dataArray[14].price}</div>
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
                                    <div className="topMainBottomRegularPrice">Reg. <strike>${parseFloat((dataArray[23].price*(dataArray[23].discountPercentage/100)+dataArray[23].price)).toFixed(2)}</strike> </div>
                                    <div className="percentageOff">{dataArray[23].discountPercentage}% OFF</div>
                                </div>
                                <div className="topMainBottomSalePrice">${dataArray[23].price}</div>
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
                                    <div className="topMainBottomRegularPrice">Reg. <strike>${parseFloat((dataArray[17].price*(dataArray[17].discountPercentage/100)+dataArray[17].price)).toFixed(2)}</strike> </div>
                                    <div className="percentageOff">{dataArray[17].discountPercentage}% OFF</div>
                                </div>
                                <div className="topMainBottomSalePrice">${dataArray[17].price}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="categoryTitle">Most Viewed Items</div>
                <div className="midMainWrapper">
                    
                    <div className="midMainContainer">

                        <div className="midMain">
                            <div className="midMainTop">
                                <img className='midMainTopImg' src={dataArray[27].images[0]} alt="" />
                            </div>
                            <div className="midMainBottom">
                            <div className="midMainBottomTitle">{dataArray[27].title}</div>
                                <div className="midMainBottomBrand">{dataArray[27].brand}</div>
                                <div className="midMainBottomRating">Customer Rating: {dataArray[27].rating}</div>
                                <div className="midMainBottomSalePrice">${dataArray[27].price}</div>
                            </div>
                        </div>

                        <div className="midMain">
                            <div className="midMainTop">
                                <img className='midMainTopImg' src={dataArray[55].images[0]} alt="" />
                            </div>
                            <div className="midMainBottom">
                            <div className="midMainBottomTitle">{dataArray[55].title}</div>
                                <div className="midMainBottomBrand">{dataArray[55].brand}</div>
                                <div className="midMainBottomRating">Customer Rating: {dataArray[55].rating}</div>
                                <div className="midMainBottomSalePrice">${dataArray[55].price}</div>
                            </div>
                        </div>

                        <div className="midMain">
                            <div className="midMainTop">
                                <img className='midMainTopImg' src={dataArray[72].images[0]} alt="" />
                            </div>
                            <div className="midMainBottom">
                            <div className="midMainBottomTitle">{dataArray[72].title}</div>
                                <div className="midMainBottomBrand">{dataArray[72].brand}</div>
                                <div className="midMainBottomRating">Customer Rating: {dataArray[72].rating}</div>
                                <div className="midMainBottomSalePrice">${dataArray[72].price}</div>
                            </div>
                        </div>

                        <div className="midMain">
                            <div className="midMainTop">
                                <img className='midMainTopImg' src={dataArray[32].images[0]} alt="" />
                            </div>
                            <div className="midMainBottom">
                            <div className="midMainBottomTitle">{dataArray[32].title}</div>
                                <div className="midMainBottomBrand">{dataArray[32].brand}</div>
                                <div className="midMainBottomRating">Customer Rating: {dataArray[32].rating}</div>
                                <div className="midMainBottomSalePrice">${dataArray[32].price}</div>
                            </div>
                        </div>

                        <div className="midMain">
                            <div className="midMainTop">
                                <img className='midMainTopImg' src={dataArray[89].images[0]} alt="" />
                            </div>
                            <div className="midMainBottom">
                            <div className="midMainBottomTitle">{dataArray[89].title}</div>
                                <div className="midMainBottomBrand">{dataArray[89].brand}</div>
                                <div className="midMainBottomRating">Customer Rating: {dataArray[89].rating}</div>
                                <div className="midMainBottomSalePrice">${dataArray[89].price}</div>
                            </div>
                        </div>

                        <div className="midMain">
                            <div className="midMainTop">
                                <img className='midMainTopImg' src={dataArray[95].images[0]} alt="" />
                            </div>
                            <div className="midMainBottom">
                            <div className="midMainBottomTitle">{dataArray[95].title}</div>
                                <div className="midMainBottomBrand">{dataArray[95].brand}</div>
                                <div className="midMainBottomRating">Customer Rating: {dataArray[95].rating}</div>
                                <div className="midMainBottomSalePrice">${dataArray[95].price}</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="categoryTitle">Recommended Items</div>
                <div className="bottomMainWrapper">
                    
                    <div className="bottomMainContainer">

                        <div className="bottomMain">
                            <div className="bottomMainTop">
                                <img className='bottomMainTopImg' src={dataArray[6].images[0]} alt="" />
                            </div>
                            <div className="bottomMainBottom">
                            <div className="bottomMainBottomTitle">{dataArray[6].title}</div>
                                <div className="bottomMainBottomBrand">{dataArray[6].brand}</div>
                                <div className="bottomMainBottomRating">Customer Rating: {dataArray[6].rating}</div>
                                <div className="bottomMainBottomSalePrice">${dataArray[6].price}</div>
                            </div>
                        </div>

                        <div className="bottomMain">
                            <div className="bottomMainTop">
                                <img className='bottomMainTopImg' src={dataArray[12].images[0]} alt="" />
                            </div>
                            <div className="bottomMainBottom">
                            <div className="bottomMainBottomTitle">{dataArray[12].title}</div>
                                <div className="bottomMainBottomBrand">{dataArray[12].brand}</div>
                                <div className="bottomMainBottomRating">Customer Rating: {dataArray[12].rating}</div>
                                <div className="bottomMainBottomSalePrice">${dataArray[12].price}</div>
                            </div>
                        </div>

                        <div className="bottomMain">
                            <div className="bottomMainTop">
                                <img className='bottomMainTopImg' src={dataArray[57].images[0]} alt="" />
                            </div>
                            <div className="bottomMainBottom">
                            <div className="bottomMainBottomTitle">{dataArray[57].title}</div>
                                <div className="bottomMainBottomBrand">{dataArray[57].brand}</div>
                                <div className="bottomMainBottomRating">Customer Rating: {dataArray[57].rating}</div>
                                <div className="bottomMainBottomSalePrice">${dataArray[57].price}</div>
                            </div>
                        </div>

                        <div className="bottomMain">
                            <div className="bottomMainTop">
                                <img className='bottomMainTopImg' src={dataArray[66].images[0]} alt="" />
                            </div>
                            <div className="bottomMainBottom">
                            <div className="bottomMainBottomTitle">{dataArray[66].title}</div>
                                <div className="bottomMainBottomBrand">{dataArray[66].brand}</div>
                                <div className="bottomMainBottomRating">Customer Rating: {dataArray[66].rating}</div>
                                <div className="bottomMainBottomSalePrice">${dataArray[66].price}</div>
                            </div>
                        </div>

                        <div className="bottomMain">
                            <div className="bottomMainTop">
                                <img className='bottomMainTopImg' src={dataArray[71].images[0]} alt="" />
                            </div>
                            <div className="bottomMainBottom">
                            <div className="bottomMainBottomTitle">{dataArray[71].title}</div>
                                <div className="bottomMainBottomBrand">{dataArray[71].brand}</div>
                                <div className="bottomMainBottomRating">Customer Rating: {dataArray[71].rating}</div>
                                <div className="bottomMainBottomSalePrice">${dataArray[71].price}</div>
                            </div>
                        </div>

                        <div className="bottomMain">
                            <div className="bottomMainTop">
                                <img className='bottomMainTopImg' src={dataArray[99].images[0]} alt="" />
                            </div>
                            <div className="bottomMainBottom">
                            <div className="bottomMainBottomTitle">{dataArray[99].title}</div>
                                <div className="bottomMainBottomBrand">{dataArray[99].brand}</div>
                                <div className="bottomMainBottomRating">Customer Rating: {dataArray[99].rating}</div>
                                <div className="bottomMainBottomSalePrice">${dataArray[99].price}</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="footerWrapper">
                    <div className="footer">
                        <div className="footerBottom">
                            <div className="knowUs">
                            <div className="footerList">
                            <div className="listTitle">Get to Know Us</div>
                            <div className="listContent">
                                <ul className="uList">
                                    <li className="list">Newsletter</li>
                                    <li className="list">About us</li>
                                    <li className="list">Accessibility</li>
                                    <li className="list">Sustainability</li>
                                    <li className="list">Press Center</li>
                                </ul>
                            </div>
                        </div>
                            </div>
                            <div className="makeMoney">
                            <div className="footerList">
                            <div className="listTitle">Make Money with us</div>
                            <div className="listContent">
                                <ul className="uList">
                                    <li className="list">Become an Affiliate</li>
                                    <li className="list">Become a Delivery Driver</li>
                                    <li className="list">Start a Package Delivery Buissness</li>
                                    <li className="list">Advertise Your Products</li>
                                </ul>
                            </div>
                        </div>
                            </div>
                            <div className="helpYou">
                            <div className="footerList">
                            <div className="listTitle">Let Us Help You</div>
                            <div className="listContent">
                                <ul className="uList">
                                    <li className="list">Your Account</li>
                                    <li className="list">Your Orders</li>
                                    <li className="list">Shipping Rates & Policies</li>
                                    <li className="list">Returns & Replacements</li>
                                    <li className="list">FAQ</li>
                                </ul>
                            </div>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Main