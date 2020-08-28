import React, { useState } from 'react';
import Course from '../Course/Course';
import courseInfo from '../../fakeData/courseInfo';
import Cart from '../Cart/Cart';

const Shop = () => {
  const [course, setCourse] = useState(courseInfo);
  const [cart, setCart] = useState([]);

  const handleButton = ((course) => {
    const newCart = [...cart, course];
    setCart(newCart);
  });

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    {
                        course.map((course) =>(
                            <Course course={course} handleButton={handleButton}></Course>
                        ))
                    }
                </div>
                <div className="col-lg-4">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;