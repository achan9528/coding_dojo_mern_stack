import axios from 'axios';
import react, { useState } from 'react'

const ProductForm = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/new', {
            title: title,
            price: price,
            description: description,
        })
        .then( results => {
            console.log(results);
            props.addProduct(results.data.product);
        }).catch( err => {
            console.log(err);
        })
    }

    return (
        <form onSubmit={submitHandler} method="post">
            <div>
                <label>
                    Title:
                    <input type="text" onChange={e=>setTitle(e.target.value)} value={title}></input>
                </label>
            </div>
            <div>
                <label>
                    Price:
                    <input type="text" onChange={e=>setPrice(e.target.value)} value={price}></input>
                </label>
            </div>
            <div>
                <label>
                    Description:
                    <input type="text" onChange={e=>setDescription(e.target.value)} value={description}></input>
                </label>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default ProductForm;