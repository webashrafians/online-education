import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const cart = props.cart;
    const courseTotal = cart.reduce((sum, course) => sum + course.price, 0);
    const tax = courseTotal / 10;
    const gTotal = courseTotal + tax;
    return (
        <div className="cart">
            <h3>Course Enroll Info</h3>
            <br/>
            <p>Total Enroll: {cart.length}</p>
            <p>Total Course Fee: {courseTotal}</p>
            <p>Tax : {tax}</p>
            <hr/>
            <p><strong>Grand Total: {gTotal}</strong></p>
            <button className="placeBtn">Place Order</button>
        </div>
    );
};

export default Cart;