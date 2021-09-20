import { Fragment, useState } from "react";
import { Button, Card } from 'react-bootstrap'
export default function Product(props) {
    return (
        <Fragment>
            <Card>
                <Card.Img src={props.product.img} />
                <Card.Body>
                    <Card.Title>{props.product.name}</Card.Title>
                    <Card.Text>{props.product.description}</Card.Text>
                </Card.Body>
                <Button onClick={() => console.log('123')}>Add To Cart</Button>
            </Card>
        </Fragment>
    )
    // const [isToastDisplayed, showToast] = useState(false)
    // const toggleToast = () => showToast(!isToastDisplayed)
    // return (
    //     <Fragment>
    //         <Toast show={isToastDisplayed} onClose={toggleToast}>
    //             <Toast.Header>Header</Toast.Header>
    //             <Toast.Body>Body</Toast.Body>
    //         </Toast>
    //         <Card>
    //             <Card.Img src={props.product.img}></Card.Img>
    //             <Card.Body>
    //                 <Card.Title>{props.product.name}</Card.Title>
    //                 <Card.Text>{props.product.description}</Card.Text>
    //             </Card.Body>
    //         </Card>
    //         <Button onClick={() => showToast(true)}>Show Toast</Button>
    //     </Fragment>
    // )
}