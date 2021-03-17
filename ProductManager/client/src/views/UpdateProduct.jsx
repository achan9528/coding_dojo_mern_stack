import { navigate } from '@reach/router';
import axios from 'axios';
import { useState, useEffect } from 'react/cjs/react.development';

const UpdateProduct = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then((response) => {
                setTitle(response.data.product.title);
                setPrice(response.data.product.price);
                setDescription(response.data.product.description);
            }).catch(err => {
                console.log(err);
            })
    }, [])

    const updateProduct = (e) => {
        e.preventDefault()
        axios.put("http://localhost:8000/api/products/update/" + props.id, {
            title: title,
            price: price,
            description: description
        }).then(response => {
            navigate("/");
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <form onSubmit={updateProduct}>
            <div>
                <label>
                    Title:
                    <input placeholder={title} onChange={e => setTitle(e.target.value)} value={title}></input>
                </label>
            </div>
            <div>
                <label>
                    Price:
                    <input placeholder={price} onChange={e => setPrice(e.target.value)} value={price}></input>
                </label>
            </div>
            <div>
                <label>
                    Description:
                    <input placeholder={description} onChange={e => setDescription(e.target.value)} value={description}></input>
                </label>
            </div>
            <button>Update</button>
        </form>
    )
}

export default UpdateProduct;