import React, {useContext} from 'react';
import {AppContext} from '../context/mainContext'
function ProductPage() {
    let {product}=useContext(AppContext);

        console.log('IN PRODUCT PAGE');
        console.log('product info = ', product);
    return (
        <div className='productPageWrapper'>
            <div className="productPage">
            <div className="productPageCellLeft">
                <div className="productPageImg">
                <img className='productPageLeftImg' src={product.images[0]} alt='' />
                </div>
            </div>
            <div className="productPageCellRight">
                <div className="productPageNameRight">{product.title}</div>
                <div className="productPageDescRight">{product.description}</div>
                <div className="productPageBrandRight">Brand: {product.brand}</div>
                <div className="productPageRatingRight">Customer Rating: {product.rating}</div>
                <div className="productPagePriceRight">${product.price}</div>
            </div>
            </div>
        </div>
    )
}
export default ProductPage