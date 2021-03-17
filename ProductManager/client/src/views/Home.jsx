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

    const deleteProduct = (product) => {
        axios.delete("http://localhost:8000/api/products/delete/" + product._id)
        .then(response => {
            console.log(products);
            setProducts(products.filter(p=>p._id!=product._id));
            // console.log(products);
        }).catch((err)=>{
            console.log(err);
        });
    }

    const addProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    }

    return (
        <div>
            <ProductForm products={products} addProduct={addProduct}></ProductForm>
            <ProductList products={products} deleteProduct={deleteProduct}></ProductList>
        </div>
    )
}

export default Home;