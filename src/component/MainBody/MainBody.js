import React from 'react';
import "./MainBody.css";
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Courses from '../Courses/Courses';
import CourseSection from '../CourseSection/CourseSection';
const MainBody = () => {
    return (
        <div className="main-body">
            
             <Sidebar/>

            <Navbar/>
            <Courses/>
            
        </div>
    )
}

export default MainBody
