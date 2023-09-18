import React from 'react'
import "../styling/cart.scss"
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux";


const Cart = () => {
    const { cartItems, subTotal, tax, shipping, total } = useSelector(
        (state) => state.cart
      );
      const dispatch = useDispatch();
    
      const increment = (id) => {
        dispatch({
          type: "addToCart",
          payload: { id },
        });
        dispatch({ type: "calculatePrice" });
      };

      const decrement = (id) => {
        dispatch({
          type: "decrement",
          payload: { id },
        });
    
        dispatch({ type: "calculatePrice" });
      };

      const deleteHandler = (id) => {
        dispatch({
          type: "deleteFromCart",
          payload: { id },
        });
        dispatch({ type: "calculatePrice" });
      };

    return (
        <div className="cart">
            <main>
                {cartItems.length > 0 ? (
                    cartItems.map((i) => (
                        <CartItem
                            pen={i.pen}
                            label={i.label}
                            price={i.price}
                            qty={i.quantity}
                            id={i.id}
                            key={i.id}
                            decrement={decrement}
                            increment={increment}
                            deleteHandler={deleteHandler}
                        />
                    ))
                ) : (
                    <h1>No Items Yet</h1>
                )}
            </main>

            <aside>
                <h2>Subtotal: ${subTotal}</h2>
                <h2>Shipping: ${shipping}</h2>
                <h2>Tax: ${tax}</h2>
                <h2>Total: ${total}</h2>
            </aside>
        </div>
    );
};


const CartItem = ({
    pen,
    label,
    price,
    qty,
    id, 
    decrement,
    increment,
    deleteHandler,
}) => (
    <div className="cartItem">
        <img src={pen} alt="Item" />
        <article>
            <h3>{label}</h3>
            <p>{price}</p> 
        </article>

        <div className='but'>
            <button onClick={() => decrement(id)}>-</button>
            <p>{qty}</p>
            <button onClick={() => increment(id)}>+</button>

        <AiFillDelete onClick={() => deleteHandler(id)} />
        </div>
    </div>
);

export default Cart