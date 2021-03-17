import axios from 'axios';
import { useState, useEffect } from 'react/cjs/react.development';
import { Link, navigate } from '@reach/router';

const ProductDetail = (props) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then((response) => {
                setProduct(response.data.product);
            }).catch(err => {
                console.log(err);
            })
    }, [])

    const deleteProduct = (e, product) => {
        e.preventDefault();
        axios.delete("http://localhost:8000/api/products/delete/" + product._id)
        .then(response => {
            navigate('/')
        }).catch((err)=>{
            console.log(err);
        });
    }

    return (
        <ul style={{listStyleType: "none"}}>
            <li><h2>{product.title}</h2></li>
            <li>Price: {product.price}</li>
            <li>Description: {product.description}</li>
            <li><Link to={"/products/" + product._id + "/edit"}>Edit</Link></li>
            <li><button onClick={e=>{deleteProduct(e,product)}}>Delete</button></li>
        </ul>
    )
}

export default ProductDetail;