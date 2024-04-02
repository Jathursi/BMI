import React, {useState} from 'react'
import './App.css'
function App() {
      const [height, setHeight] = useState('');
      const [weight, setWeight] = useState('');
      const [bmiValue, setBmiValue] = useState(''); 
      const [bmiMessage, setBmiMessage] = useState(''); 
      // const [showMarkerAnimation, setShowMarkerAnimation] = useState(false);
  
      const calculateMarkerPosition = (bmi) => {
              if (bmi < 18.5) {
                  return (bmi / 18.5) * 45; // 0 to 18.5 corresponds to 0 to 45 degrees
              } else if (bmi < 25) {
                  return ((bmi - 18.5) / (25 - 18.5)) * 45 + 45; // 18.5 to 25 corresponds to 45 to 90 degrees
              } else if (bmi < 30) {
                  return ((bmi - 25) / (30 - 25)) * 45 + 90; // 25 to 30 corresponds to 90 to 135 degrees
              } else {
                  return Math.min(((bmi - 30) / (40 - 30)) * 45 + 135, 180); // 30 to 40 corresponds to 135 to 180 degrees
              }
      };
      const calculateBmi = (e) => {
          e.preventDefault();
          if (height && weight) { 
              const heightMeter = height /100;
              const bmi = weight / (heightMeter * heightMeter);
              setBmiValue(bmi);
  
              let message = ''; 
              if (bmi < 18.5) { 
                  message = 'You are Underweight'; 
              } 
              else if (bmi >= 18.5 && bmi < 25) { 
                  message = 'You are Normal weight'; 
              } 
              else if (bmi >= 25 && bmi < 30) { 
                  message = 'You are Overweight'; 
              } 
              else { 
                  message = 'You are Obese'; 
              } 
              setBmiMessage(message); 
              // setShowMarkerAnimation(true);
          } 
          else { 
              setBmiValue(''); 
              setBmiMessage(''); 
              // setShowMarkerAnimation(true);
          } 
  };
    return (
      <div className='container'>
          <div className="wrapper">
              <div className="header">
                      <h1>BMI Calculator</h1>
              </div>
              <div className="wrap">
                  <div className="calculator">
                      <form onSubmit={calculateBmi}>
                          <div className="top">
                              <div className="gender">
                                  <div className="male">
                                      <input type='radio' placeholder='male'/>
                                      <h2>Male</h2>
                                  </div>
                                  <div className="male">
                                      <input type='radio' placeholder='female'/>
                                      <h2>Female</h2>
                                  </div>
                              </div>
                              <div className="btn">
                                  <button className='white'>Imperial</button>
                                  <button className='blue'>Metric</button>
                              </div>
                          </div>
                          <div className="form">
                              <div className="age">
                                  <h2>Age</h2>
                                  <input type='number' placeholder='years' name='age' />
                              </div>
                              <div className="height">
                                  <h2>Height</h2>
                                  <input type='number' placeholder='cm' name='height' onChange={(e) => setHeight(e.target.value)}/>
                              </div>
                              <div className="weight">
                                  <h2>Weight</h2>
                                  <input type='number' placeholder='Kg' name='weight' onChange={(e) => setWeight(e.target.value)}/>
                              </div>
                          </div>
                          <div className="end_btn">
                              <button>calculate</button>
                          </div>
                      </form>
                  </div>
                  <div className="display">
                      <div className="subhead">
                          <h2>Result</h2>
                          <div className="show">
                          {bmiValue && bmiMessage && ( 
                              <div className="result"> 
                                  <p> 
                                      Your BMI: <span className="bmi-value">{bmiValue}</span> 
                                  </p> 
                                  <p> 
                                       <span className="bmi-message">{bmiMessage}</span> 
                                  </p>
                              </div> 
                              )} 
                              {/* BMI Scale */}
                              <div className="pie-wrap">
                                  <div className="underweight range">
                                      <p>0</p>
                                  </div>
                                  <div className="normal-weight range">
                                      <p>18.5</p>
                                  </div>
                                  <div className="overweight range">
                                      <p>25</p>
                                  </div>
                                  <div className="obese range">
                                      <p>30</p>
                                  </div>
                                  <div className="small">
                                      <div className="marker" style={{ transform: "rotate(" + calculateMarkerPosition(bmiValue) + "deg)" }}>
                                          <div className="triangel"></div>
                                          <div className="triangel2"></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
  

export default App;
