function Water(props){
    let state = "liquid";
    if (props.c >= 100){
        state = "gas"
    }
    else if (props.c <= 0){
        state = "solid"
    }
        return <div>At {props.c} C water is {state} </div>
    }
    
    export default Water