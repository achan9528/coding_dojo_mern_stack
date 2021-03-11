import react, {useState} from 'react';

const Tabs = (props) => {
    const [message, setMessage] = useState("");

    const onClickHandler = (e,item) => {
        e.preventDefault();
        setMessage(item);
    }

    return (
        <div>
            <ul style = {{listStyleType: "none"}}>
                {
                    props.tabs.map( (item,i) =>
                        <li style={{
                            display:"inline-block",
                            margin: "10px",
                        }} onClick={(e)=>onClickHandler(e,item)}>Tab {i + 1}</li>
                    )
                }
            </ul>
            <div>{message}</div>
        </div>
        
    )
}

export default Tabs;