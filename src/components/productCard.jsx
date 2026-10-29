import { useState, useEffect } from 'react'

function ProductCard(props) {

    const [quantity, setQuantity] = useState(1)
    const [totalPrice,setTotalPrice] =useState(props.price)

    useEffect(() => {
        setTotalPrice(quantity * props.price)
    }, [quantity, props.price])

    function increasesQuantity(){
        if (quantity >= 9) {
            alert('Maximum quantity is 9')
        } else {
            setQuantity(quantity + 1)
        }
    }

    function decreaseQuantity(){
        if (quantity <=1){
            alert("Minimum quantity is 1")
        } else {
            setQuantity(quantity - 1)
        } 
    }

    return (
        <div>
            <img src={props.image} alt= {props.name} width="200" />

            <h2>{props.name}</h2>
            <p>Price: ₹{props.price}</p>

            <button onClick={decreaseQuantity}>-</button>
            <span> Quantity: {quantity} </span>
             <button onClick={increasesQuantity}>+</button>

             <p>Total Price: {totalPrice}</p>
        </div>
    );
}

export default ProductCard;