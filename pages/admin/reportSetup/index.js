import React from 'react'

export default function index() {
  return (
    <div>
      <div className=' container bg-light pb-5 pt-5'>
            <header className='row'>
               <div className=' d-flex row'>
                   <div className='d-flex col-lg-6 col-sm-6 pt-3'>
                        <img src={"../../ilaro-logo.jpeg"} style={{width: '50px', height: '50px'}}/>
                        <h4 className='text-success  ml-3'>Federal Polytechnic Ilaro</h4>
                   </div>
                   <div className='col-lg-6 d-flex col-sm-6 pt-3'>
                        <h5 className='text-dark '>Ibekwe Lilian</h5>
                        <img className=' ml-2' src={"../../ilaro-logo.jpeg"} style={{width: '50px', height: '50px', borderRadius: '50%', border: '1px solid green'}}/>
                   </div>
               </div>
            </header>
            <div className='container bg-white pb-3 mt-4'>
                <div className='container bg-white pb-3'>
                    <h4 className='text-center pb-4 pt-5'>Dynamic Report Setup</h4>
                    <form>
                        <div className='form-row'>
                            <div className='form-group d-flex '>
                                <label className=''>Report Type</label>
                                <select id="" className="form-control">
                                    <option selected>--SELECT FEE TYPE--</option>
                                    <option>..</option>
                                    <option>..</option>
                                </select>    
                            </div>
                        </div>
                    </form>


                </div>

            </div>
      </div>
    </div>
  )
}
