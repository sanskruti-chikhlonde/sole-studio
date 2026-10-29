import { useState } from 'react'

function ProductCard(props) {

    const [quantity, setQuantity] = useState(1)

    return (
        <div>
            <h2>{props.name}</h2>
            <p>Price: ₹{props.price}</p>

            <button onClick={() => setQuantity(quantity - 1)}>-</button>
            <span> Quantity: {quantity} </span>
             <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
    );
}

export default ProductCard;