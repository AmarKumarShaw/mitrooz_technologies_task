import React from 'react';
import "./CourseHeader.css";
const CourseHeader = () => {
    return (
        <div className='course-header'>
            <div className="course-content">
                <div className="course-content-left">
                    <p className='course-header'>Courses</p>
                </div>
                <div className="course-content-right">
                    <div className="course-content-right-headers">
                        <div className="course-content-right-header blue-content">
                            <img src="./images/calendar.svg" alt="" />
                            <p>Calendar</p>
                        </div>
                        <div className="course-content-right-header blue-content">
                            <img src="./images/analytics.svg" alt="" />
                            <p>Analytics</p>
                        </div>
                        <div className="course-content-right-header blue-content">
                            <img src="./images/export.svg" alt="" />
                            <p>Export</p>
                        </div>
                        <div className="course-content-right-header">
                            <img src="./images/filter.svg" alt="" />
                            <p>Filter</p>
                        </div>
                        <div style={{width:199}} className="course-content-right-header">
                            <img src="./images/column_setting.svg" alt="" />
                            <p >Column Setting</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseHeader
