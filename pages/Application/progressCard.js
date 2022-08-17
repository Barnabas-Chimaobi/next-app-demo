import React from 'react'

export default function progressCard() {
  return (
    
        <div className="card col-lg-4 col-sm-12 darkGreen ml-lg-3 mt-sm-3" style={{paddingBottom: '40px'}}>
                <div className="mr-4 mt-4 lightGreen text-white rounded p-2">
                    <h4><i className="fa-solid fa-user text-white" />New Student Application</h4>
                </div>
                <div className="container d-flex mt-3">
                    <div className="Activestep ">
                    <p className="lightYellow ml-3 mt-2 stepNumber">01</p>
                    </div>
                    <div className="ml-2">
                    <p className="lightYellow">Step 1</p>
                    <h5 className="text-white">Generate Invoice</h5>
                    </div>
                </div>
                <div className="container vlDefault ml-5">
                </div>
                <div className="container d-flex mt-3 fadedGrey">
                    <div className="Defaultstep ">
                    <p className="fadedGrey ml-3 mt-2 stepNumber">02</p>
                    </div>
                    <div className="ml-2">
                    <p className="lightYellow">Step 2</p>
                    <h5 className="text-white">Make Payment</h5>
                    </div>
                </div>
                <div className="container vlDefault ml-5">
                </div>
                <div className="container d-flex mt-3">
                    <div className="Defaultstep ">
                    <p className="fadedGrey ml-3 mt-2 stepNumber">03</p>
                    </div>
                    <div className="ml-2">
                    <p className="fadedGrey">Step 3</p>
                    <h5 className="text-white">Application Form</h5>
                    </div>
                </div>
                <div className="container vlDefault ml-5">
                </div>
                <div className="container d-flex mt-3">
                    <div className="Defaultstep ">
                    <p className="fadedGrey ml-3 mt-2 stepNumber">04</p>
                    </div>
                    <div className="ml-2">
                    <p className="fadedGrey">Step 4</p>
                    <h5 className="text-white">Acknowledgement Slip</h5>
                    </div>
                </div>
            </div>
      
    
  )
}
