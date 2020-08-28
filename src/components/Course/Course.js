import React from 'react';
import './Course.css';

const Course = (props) => {
    const {name, instructor, image, price} = props.course;
    return (
        <div className="course">
            <div className="image">
                <img src={image} alt=""/>
            </div>
            <div className="course-content">
                <h1>Course Name: {name}</h1>
                <h4>Instructor Name: {instructor}</h4>enroleBtn
                <p>Course Fee: {price}</p>
                <br/>
                <button onClick={ () => (props.handleButton(props.course) )} className="enroleBtn">Enroll Now</button>
            </div>
        </div>
    );
};

export default Course;