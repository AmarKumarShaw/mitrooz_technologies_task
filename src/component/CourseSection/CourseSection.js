import React,{useState} from 'react'
import "./CourseSection.css"


const CourseSection = () => {
    const [open,setOpen] = useState(false)
    return (

        <div className='course-section'>
            <div>
                <div className="course-section-heading">
                    <p>Session</p>
                    <p>Status</p>
                    <p>Course Name</p>
                    <p>Begin Date</p>
                    <p>End Date</p>
                    <p>Registrants</p>
                    <p>Trainers</p>
                    <p>Certificate</p>
                </div>
                <div className="course-section-detail">
<div>                    <div className="course-section-details">
                        <div>
                            <img className="img-right-space" src="./images/elip.svg" alt="" />
                            <p>3</p>
                        </div>
                        <div>
                            <img src="./images/red-dot.svg" className="img-right-space" alt="" />
                            <p>Live</p>
                        </div>
                        <div>
                            <p className='course-name'>Negotiation</p>
                        </div>
                        <div>
                            <p>12/06/2021</p>
                        </div>
                        <div>
                            <p>29/05/2021</p>
                        </div>


                        <div>
                            <p>60</p>
                        </div>
                        <div>
                            <div className='img-left-reduce'>
                                <img src="./images/ava1.svg" alt="" />
                                <img src="./images/ava2.svg" alt="" />
                                <img src="./images/ava3.svg" alt="" />
                                <img src="./images/ava4.svg" alt="" />
                            </div>
                        </div>
                        <div>
                            <p>Yes</p>
                            <img className="img-space-between" src="./images/warning.svg" alt="" />
                            <img src="./images/menu.svg" alt="" />
                        </div>

                            
                    </div>

                    </div>


                    <div className="course-section-details">
                        <div>
                            <img className="img-right-space" src="./images/elip.svg" alt="" />
                            <p>2</p>
                        </div>
                        <div>
                            <img src="./images/bluedot.svg" className="img-right-space" alt="" />
                            <p>Upcoming</p>
                        </div>
                        <div>
                            <p className='course-name'>Interaction</p>
                        </div>
                        <div>
                            <p>12/06/2021</p>
                        </div>
                        <div>
                            <p>29/05/2021</p>
                        </div>


                        <div>
                            <p>60</p>
                        </div>
                        <div>
                            <div className='img-left-reduce'>
                                <img src="./images/ava1.svg" alt="" />
                                <img src="./images/ava2.svg" alt="" />
                                <img src="./images/ava3.svg" alt="" />
                                <img src="./images/ava4.svg" alt="" />
                            </div>
                        </div>
                        <div>
                            <p>Yes</p>
                            <img className="img-space-between" src="./images/warning.svg" alt="" />
                            <img src="./images/menu.svg" alt="" />
                        </div>


                    </div>
                    <div className="course-section-details">
                        <div>
                            <img className="img-right-space" src="./images/elip.svg" alt="" />
                            <p>2</p>
                        </div>
                        <div>
                            <img src="./images/graydot.svg" className="img-right-space" alt="" />
                            <p>Drafts</p>
                        </div>
                        <div>
                            <p className='course-name'>Feedback</p>
                        </div>
                        <div>
                            <p>12/06/2021</p>
                        </div>
                        <div>
                            <p>29/05/2021</p>
                        </div>
                        <div>
                            <p>60</p>
                        </div>
                        <div>
                            <div className='img-left-reduce'>
                                <img src="./images/ava1.svg" alt="" />
                                <img src="./images/ava2.svg" alt="" />
                                <img src="./images/ava3.svg" alt="" />
                                <img src="./images/ava4.svg" alt="" />
                            </div>
                        </div>
                        <div>
                            <p>Yes</p>
                            <img className="img-space-between" src="./images/warning.svg" alt="" />
                            <img src="./images/menu.svg" alt="" />
                        </div>
                    </div>


                </div>



            </div>
        </div>
    )
}

export default CourseSection
