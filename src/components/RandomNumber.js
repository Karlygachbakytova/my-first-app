function RandomNumber(props) {
    return <div>{Math.random()* (props.max - props.min)+props.min}</div>
}

export default RandomNumber;