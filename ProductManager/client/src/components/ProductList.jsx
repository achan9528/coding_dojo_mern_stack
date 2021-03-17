import axios from 'axios';
import react, { useState } from 'react'
import { Link } from '@reach/router';

const ProductList = (props) => {

    const deleteProduct = (e, product) => {
        e.preventDefault();
        props.deleteProduct(product)
    }  

    return (
        <ul style={{listStyleType: "none", padding: "0px"}}>
            <li><h2>All Products</h2></li>
            {
                props.products.map( (item,i) => {
                    console.log(item);
                return (
                    <li key={i}>
                        <ul style={{listStyleType:"none"}}>
                            <li style={{display:"inline-block", margin:"10px"}}>
                                <Link to={'/products/'+item._id}>{item.title}</Link>
                            </li>
                            <li style={{display:"inline-block" , margin:"10px"}}>
                                <button onClick={(e) => deleteProduct(e,item)}>Delete</button>
                            </li>
                        </ul>
                    </li>
                )})
            }
        </ul>
    )
}

export default ProductList;