import axios from 'axios';
import react, { useState } from 'react'
import { Link } from '@reach/router';

const ProductList = (props) => {
    return (
        <ul style={{listStyleType: "none", padding: "0px"}}>
            <li><h2>All Products</h2></li>
            {
                props.products.map( (item,i) => (
                    <li key={i}>
                        <Link to={'/products/'+item._id}>{item.title}</Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default ProductList;