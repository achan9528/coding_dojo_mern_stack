import axios from 'axios';
import react, { useState } from 'react'
import { Link } from '@reach/router';

const ProductList = (props) => {
    return (
        <ul>
            {
                props.products.map( (item,i) => (
                    <li key={i}>
                        <Link to={'/products/'+item._id}>{item._id}</Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default ProductList;