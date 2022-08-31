import React from 'react'
import { AdminLayout } from '../../../Layouts/adminLayout/adminLayout'
import { Select } from 'antd'
import { Form } from 'react-bootstrap';
const { Option } = Select;



export default function index() {
  return (
    <AdminLayout>
    <div >
       <div className='container bg-light pb-5 pl-5 pr-5'>
            <div className='container rounded bg-white pb-3 mt-4'>
                    <div className='container bg-white pb-3'>
                        <form className='row'>
                        <h4 className='text-center pb-4 pt-5'>Set Report Parameters</h4>   
                        <div className='col-lg-6'> 
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Session</label>
                                    <Form.Select id="" className="form-control" defaultValue={""}>
                                        <option selected>REGULAR</option>
                                        <option>TEXT</option>
                                        <option>EMAIL</option>
                                        <option>PASSWORD</option>
                                    </Form.Select> 
                               
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Programme</label>
                                    <Form.Select id="" className="form-control" defaultValue={""}>
                                        <option selected>REGULAR</option>
                                        <option>TEXT</option>
                                        <option>EMAIL</option>
                                        <option>PASSWORD</option>
                                    </Form.Select> 
                               
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Department</label>
                                    <Form.Select id="" className="form-control" defaultValue={""}>
                                        <option selected>REGULAR</option>
                                        <option>TEXT</option>
                                        <option>EMAIL</option>
                                        <option>PASSWORD</option>
                                    </Form.Select> 
                               
                                </div>
                        </div>
                        <div className='col-lg-6'>
                                <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Semester</label>
                                        <Form.Select id="" className="form-control" defaultValue={""}>
                                            <option selected>REGULAR</option>
                                            <option>TEXT</option>
                                            <option>EMAIL</option>
                                            <option>PASSWORD</option>
                                        </Form.Select> 
                               
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Level</label>
                                    <Form.Select id="" className="" defaultValue={""}>
                                        <option selected>REGULAR</option>
                                        <option>TEXT</option>
                                        <option>EMAIL</option>
                                        <option>PASSWORD</option>
                                    </Form.Select> 
                               
                                </div>
                            </div>
                        </form>
                        <div className='text-right' style={{paddingTop: '150px', alignItems: 'center',}}>
                            <button className='btn btn-success rounded' style={{margin: "10px"}}>Display Report</button>
                            <button className=' btn border-success bg-white text-success p-2 rounded' style={{margin: "10px"}}>Bulk Report</button>

                        </div>
                    </div>

            </div>

        </div>        
    </div>
    </AdminLayout>
  )
}
