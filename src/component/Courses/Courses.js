import React from 'react';
import "./Courses.css";
import CourseHeader from './CourseHeader/CourseHeader';
import CourseSection from './../CourseSection/CourseSection';
const Courses = () => {
    return (
        <div className="courses">
            <CourseHeader/>
            <CourseSection/>
          
        </div>
    )
}

export default Courses
