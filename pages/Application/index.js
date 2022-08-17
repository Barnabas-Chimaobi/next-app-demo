import React from 'react';
import ProgressCard from './progressCard';


export default function index() {
  return (
    <div>
        <div className="d-block d-lg-flex container mt-3 mb-3">
            <h2 className>Application Form</h2>
        </div>
        <div className="container d-block d-lg-flex">
            {/* rrr card */}
            <div className="card col-lg-8 col-sm-12">
                <div className="p-3 mt-4">
                    <h4>RRR Number</h4>
                    <p>Kindly Enter your RRR number (specified on your invoice), and click the Next Button to fill your         Application Form. <br /> 
                    Ensure you print your Acknowledgement Slip and Exam Slip after the submission of your form.</p>
                </div>
                <div>
                    <label htmlFor="inputJamb">RRR Number</label>
                    <input type="number" className="form-control bg-light" id="inputRRR" style={{width: '400px'}} />
                </div>
                {/*  next button */}
                <div className="mt-5">
                    <button type="submit" className="btn darkGreen " style={{width: '100px'}}><a className="submit-link" style={{textDecoration: 'none'}} href="applicationForm.html">Next</a></button>
                </div>
            </div>
             {/* New student app */}

            <ProgressCard/> 
            
        </div>
    </div>
  )
}
