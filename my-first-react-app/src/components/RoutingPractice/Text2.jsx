const Text2 = (props) => {
    const style = {
        color: props.textColor,
        backgroundColor: props.bgColor,
    }
    return (
        <div>
            <h1 style={style}>The word is {props.word}</h1>
        </div>
    )
}

export default Text2;
