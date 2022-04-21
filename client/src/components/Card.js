import React, {useEffect} from "react";

const Card = (props) => {
console.log(props.data);
    return (
        <h1>{props.data.title}</h1>
    )
}

export default Card;