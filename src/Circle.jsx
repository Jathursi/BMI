import React from 'react'
import './Circle.css'
function Circle() {
  return (
    <div>
        {/* <div className="circle-container">
            <div className="bmi-scale large">
                <div className="range underweight"></div>
                <div className="range normal-weight"></div>
            </div> 
            <div className="bmi-scale1 large1">
                <div className="range overweight"></div>
                <div className="range obese"></div>
             <div className="marker" style={{ left: `${calculateMarkerPosition(bmiValue)}%` }}></div>
            </div>
        </div> */}
        
        <div class="pie-wrap">
            <div class="underweight range">
            </div>
            <div class="normal-weight range">
            </div>
            <div class="overweight range">
            </div>
            <div class="obese range">
            </div>
            <div className="small">
                <div className="marker" style={{ left: `${calculateMarkerPosition(bmiValue)}%` }}></div>
            </div>
        </div>
        
    </div>
  )
}

export default Circle