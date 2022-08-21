import React from 'react'
import Logo from '../../../Images/ilaro-logo.jpeg'



export default function index() {
  return (
    <div>
        <div className=' container bg-light pb-5'>
            <header className='row'>
               <div className=' d-flex row'>
                   <div className='d-flex col-lg-6 col-sm-6 pt-3'>
                        <img src={"../../ilaro-logo.jpeg"} style={{width: '50px', height: '50px'}}/>
                        <h4 className='text-success ml-3'>Federal Polytechnic Ilaro</h4>
                   </div>
                   <div className='col-lg-6 d-flex col-sm-6 pt-3'>
                        <h5 className='text-dark  mt-1'>Ibekwe Lilian</h5>
                        <img className=' ml-2' src={"../../ilaro-logo.jpeg"} style={{width: '50px', height: '50px', borderRadius: '50%', border: '1px solid green'}}/>
                   </div>
               </div>
            </header>
            <div className=' container bg-white pb-3'>
                <div className='container mt-5 mb-5 '>
                    <h4 className='text-dark pt-3'>Dynamic Fee Setup</h4>
                    <form>
                        <div className='form-row row'>
                            <div className='form-group col-lg-3'>
                                <label>Form Type</label>
                                <select id="" className="form-control">
                                    <option selected>REGULAR</option>
                                    <option>..</option>
                                    <option>..</option>
                                </select>
                                <div className='card mt-3'>
                                    <ul>
                                        <li style={{listStyle: 'none'}}>REGULAR</li>
                                        <li style={{listStyle: 'none'}}>REGULAR</li>
                                    </ul>
                                    
                                </div>
                            </div>
                            <div className='form-group col-lg-3'>
                                <label>Form Session</label>
                                <select id="" className="form-control">
                                    <option selected>REGULAR</option>
                                    <option>..</option>
                                    <option>..</option>
                                </select>
                                <div className='card mt-3'>
                                    <ul>
                                        <li style={{listStyle: 'none'}}>REGULAR</li>
                                        <li style={{listStyle: 'none'}}>REGULAR</li>
                                    </ul>
                                    
                                </div>
                            </div>
                            <div className='form-group col-lg-3'>
                                <label>Programme</label>
                                <select id="" className="form-control">
                                    <option selected>REGULAR</option>
                                    <option>..</option>
                                    <option>..</option>
                                </select>
                                <div className='card mt-3'>
                                    <ul>
                                        <li style={{listStyle: 'none'}}>REGULAR</li>
                                        <li style={{listStyle: 'none'}}>REGULAR</li>
                                    </ul>
                                    
                                </div>
                            </div>
                            <div className='form-group col-lg-3'>
                                <label>Programme Level</label>
                                <select id="" className="form-control">
                                    <option selected>REGULAR</option>
                                    <option>..</option>
                                    <option>..</option>
                                </select>
                                <div className='card mt-3'>
                                    <ul>
                                        <li style={{listStyle: 'none'}}>REGULAR</li>
                                        <li style={{listStyle: 'none'}}>REGULAR</li>
                                    </ul>
                                    
                                </div>
                            </div>

                        </div>
                    </form>
                    <div className='text-right'>
                        <button className='bg-success text-white p-2 border-success rounded'>Save & Continue</button>
                    </div>
                </div>
            </div>

        </div>

      
    </div>
  )
}
