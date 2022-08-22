import React from 'react'
import { AdminLayout } from '../../../Layouts/adminLayout/adminLayout'
import { Breadcrumb, Layout, Menu } from 'antd';
import { colors } from '../../../utils/colors';
const { Header, Content, Footer, Sider } = Layout;

export default function index() {
  return (
      <AdminLayout>
    <div>
         <div className=' container bg-light pb-5'>
            {/* <header className='d-flex justify-content-between row'>
               <div className='d-flex justify-content-between'>
                   <div className='d-flex col-lg-6 col-sm-6 pt-3'>
                        <img src={"../../ilaro-logo.jpeg"} style={{width: '50px', height: '50px'}}/>
                        <h4 className='text-success ml-3'>Federal Polytechnic Ilaro</h4>
                   </div>
                   <div className='col-lg-6 d-flex col-sm-6 pt-3'>
                        <h5 className='text-dark  mt-1'>Ibekwe Lilian</h5>
                        <img className=' ml-2' src={"../../ilaro-logo.jpeg"} style={{width: '50px', height: '50px', borderRadius: '50%', border: '1px solid green'}}/>
                   </div>
               </div>
            </header> */}
            <div className=' container bg-white pb-3'>
                <div className='container mt-5 mb-5 '>
                    <h4 className='text-dark pt-3 pl-4'>Application Dynamic Setup</h4>
                    <form className='pl-4 pr-4'>
                        <div className='form-row row'>
                            <div className='form-group col-lg-3'>
                                <label>Form Section</label>
                                <select id="" className="form-control">
                                    <option selected>BIO-DATA</option>
                                    <option>..</option>
                                    <option>..</option>
                                </select>
                               
                            </div>
                            <div className='form-group col-lg-3'>
                                <label>Input Type</label>
                                <select id="" className="form-control">
                                    <option selected>REGULAR</option>
                                    <option>..</option>
                                    <option>..</option>
                                </select>
                                <div className='card mt-3'>
                                    <ul>
                                        <li style={{listStyle: 'none'}}>TEXT</li>
                                        <li style={{listStyle: 'none'}}>EMAIL</li>
                                        <li style={{listStyle: 'none'}}>PASSWORD</li>
                                    </ul>
                                    
                                </div>
                            </div>
                            <div className='form-group col-lg-3'>
                                <label>Input Name</label>
                                <select id="" className="form-control">
                                    <option selected>--</option>
                                    <option>..</option>
                                    <option>..</option>
                                </select>
                               
                            </div>
                            <div className='form-group col-lg-3'>
                                <label>Label</label>
                                <select id="" className="form-control">
                                    <option selected>--</option>
                                    <option>..</option>
                                    <option>..</option>
                                </select>
                               
                            </div>

                        </div>
                    </form>
                    <div className='text-right'>
                        <button className='bg-success text-white p-2 border-success rounded pr-4'>Save & Continue</button>
                    </div>
                </div>
            </div>
            <div className='container bg-white pb-3 mt-4 pt-4'>
                <h4 className='mt-4 pl-4'>Student Bio-Data</h4>
                <form className='mt-4 pl-4 pr-4'>
                    <div className='row'>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" className="form-control" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className="form-group">
                                <label htmlFor="name">Birth Date</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">State Of Origin </label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Sex</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Religion</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Disability</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className="form-group">
                                <label htmlFor="name">State of Birth</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">City of Residence</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Phone Number</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Permanent Residence</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">If others, specify</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div>
                        </div>
                    </div>            
                </form>
                <div className='text-right pr-4'>
                    <button className='bg-success text-white p-2 border-success rounded'>Next</button>
                </div>
            </div>

        </div>
      
    </div>
    </AdminLayout>
  )
}
