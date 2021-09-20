import { Fragment } from "react";

export default function Product(props){
    return(
        <Fragment>
            <div>{props.product.name}</div>
            <img src={props.product.img} alt={"Olleh"}/>
        </Fragment>
    )
}