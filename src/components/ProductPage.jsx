import React, {useContext} from 'react';
import {AppContext} from '../context/mainContext'
function ProductPage() {
    let {product}=useContext(AppContext);

        console.log('IN PRODUCT PAGE');
        console.log('product info = ', product);
    return (
        <div className='productPage'>
            <div className="eachProduct">
                <img src={product.images[0]} className='productImg' alt='' />
                <div className="product">
                    {product.title}
                </div>
                <div className="description">
                    {product.description}
                </div>
                <div className="price">
                    ${product.price}
                </div>
                <div className="rating">
                    Rating: {product.rating}
                </div>
                <div className="brand">
                    {product.brand}
                </div>
            </div>
        </div>
    )
}
export default ProductPage