import axios from 'axios';
import { useState, useEffect } from 'react/cjs/react.development';

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
    return (
        <ul style={{listStyleType: "none"}}>
            <li><h2>{product.title}</h2></li>
            <li>Price: {product.price}</li>
            <li>Description: {product.description}</li>
        </ul>
    )
}

export default ProductDetail;