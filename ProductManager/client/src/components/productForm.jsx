import axios from 'axios';
import react, { useState } from 'react'

const ProductForm = (props) => {
    const [newProduct, setNewProduct] = useState({});
    const [title, setTitle] = useState("");
    const [number, setNumber] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        setNewProduct({
            title: title,
            price: number,
            description: description,
        })
        console.log(newProduct);
        axios.post('http://localhost:8000/api/products/new', newProduct)
        .then( results => {
            console.log(results);
            props.setProducts([...props.products, newProduct])
        }).catch( err => {
            console.log(err);
        })
    }

    return (
        <form onSubmit={submitHandler} method="post">
            <div>
                <label>
                    <input type="text" onChange={e=>setTitle(e.target.value)} value={title}></input>
                </label>
            </div>
            <div>
                <label>
                    <input type="text" onChange={e=>setNumber(e.target.value)} value={number}></input>
                </label>
            </div>
            <div>
                <label>
                    <input type="text" onChange={e=>setDescription(e.target.value)} value={description}></input>
                </label>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default ProductForm;