import axios from 'axios';
import react, { useState, useEffect } from 'react'
import ProductForm from '../components/productForm'
import ProductList from '../components/ProductList'

const Home = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then(response=>{
            setProducts(response.data.products);
        }).catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div>
            <ProductForm products={products} setProducts={setProducts}></ProductForm>
            <ProductList products={products}></ProductList>
        </div>
    )
}

export default Home;