import React from 'react'
import { AdminLayout } from '../../../Layouts/adminLayout/adminLayout'
import { Breadcrumb, Layout, Menu } from 'antd';
import { colors } from '../../../utils/colors';
import { Select } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { Option } = Select;

const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

export default function index() {
  return (
      <AdminLayout>
    <div>
         <div className=' container bg-light pb-5 pl-2 pt-2'>
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
                    <h4 className='text-dark pt-3 pl-4 pt-5'>Application Dynamic Setup</h4>
                    <form className='pl-4 pr-4'>
                        <div className='form-row row'>
                           <div className='form-group col-lg-3 pt-4'>
                                <label>Input Type</label>
                                <Select id="" className="form-control" defaultValue={"BIO-DATA"}>
                                    <option>EMAIL</option>
                                    <option>PASSWORD</option>
                                </Select>
                            </div>
                            <div className='form-group col-lg-3 pt-4'>
                                <label>Input Type</label>
                                <Select id="" className="form-control" defaultValue={""}>
                                    <option selected>REGULAR</option>
                                    <option>TEXT</option>
                                    <option>EMAIL</option>
                                    <option>PASSWORD</option>
                                </Select> 
                            </div>
                            <div className='form-group col-lg-3 pt-4'>
                                <label>Input Name</label>
                                <Select id="" className="form-control" defaultValue={""}>
                                    <option selected>--</option>
                                    <option>..</option>
                                    <option>..</option>
                                </Select> 
                            </div>
                            <div className='form-group col-lg-3 pt-4'>
                                <label>Label</label>
                                <Select id="" className="form-control" defaultValue={""}>
                                    <option selected>--</option>
                                    <option>..</option>
                                    <option>..</option>
                                </Select>
                            </div>
                        </div>
                    </form>
                    <div className='text-right' style={{paddingTop: '150px;'}}>
                        <button className='btn btn-success rounded mr-3' style={{width:'100px;'}}>+Add</button>
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
                                <input type="date" className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                            <label>State of Origin</label>
                            <Select id="" className="form-control" defaultValue={""}>
                                <option selected></option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </Select> 
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Sex</label>
                                <Select id="" className="form-control" defaultValue={""}>
                                    <option selected></option>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </Select> 
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Religion</label>
                                <Select id="" className="form-control" defaultValue={""}>
                                    <option selected></option>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </Select> 
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Disability</label>
                                <Select id="" className="form-control" defaultValue={""}>
                                    <option selected></option>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </Select> 
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className="form-group">
                                <label htmlFor="name">State of Birth</label>
                                <Select id="" className="form-control" defaultValue={""}>
                                    <option selected></option>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </Select> 
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
                <div className='text-right pr-4' style={{paddingTop: '150px;'}}>
                    <button className='btn btn-success rounded mr-3' style={{width:'100px;'}}>Next</button>
                </div>
            </div>

        </div>
      
    </div>
    </AdminLayout>
  )
}
