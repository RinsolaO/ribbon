import React from 'react'
import './styles.css'
import pressure from './img/blood-pressure.png'
import bloodTest from './img/blood-test.png'
import xray from './img/x-ray.png'

const recentActivity = () => {
    return (
        <div className =' recent-activity'>
            <p>Recent Activity </p>
            <div className="white-container">
            <div className="health-flex">
                <img src={bloodTest} alt="blood test"/>
                <span> HIV Blood Draw Test</span>
                <p> A100 </p>
            </div>
            <div className="health-flex">
                <img src={xray} alt="Xray"/>
                <span> TB Radiology XRay</span>
                <p> A30 </p>
            </div>
            <div className="health-flex">
                <img src={pressure} alt="blood pressure test"/>
                <span> Blood Pressure Check</span>
                <p> A10 </p>
            </div>
            </div>
        </div>
    )
}

export default recentActivity
