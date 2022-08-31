import React from 'react'
import Logo from '../../../Images/ilaro-logo.jpeg'
import { AdminLayout } from '../../../Layouts/adminLayout/adminLayout'
import { Select } from 'antd';
import { Form } from 'react-bootstrap';
const { Option } = Select;

export default function index() {
  return (
      <AdminLayout>
    <div>
        <div className=' container bg-light pb-5 pl-5'>
            <div className=' container bg-white pb-3'>
                <div className='container mt-5 mb-5 pt-5'>
                    <h4 className='text-dark pt-3'>Dynamic Fee Setup</h4>
                    <form>
                        <div className='form-row row pt-3'>
                            <div className='form-group col-lg-3 col-lg-12'>
                                <label>Form Type</label>
                                <Form.Select id="" className="form-control" defaultValue={""}>
                                    <option selected>REGULAR</option>
                                    <option>TEXT</option>
                                    <option>EMAIL</option>
                                    <option>PASSWORD</option>
                                </Form.Select> 
                               
                            </div>
                            <div className='form-group col-lg-3'>
                                <label>Form Session</label>
                                <Form.Select id="" className="form-control" defaultValue={""}>
                                    <option selected>REGULAR</option>
                                    <option>TEXT</option>
                                    <option>EMAIL</option>
                                    <option>PASSWORD</option>
                                </Form.Select> 
  
                            </div>
                            <div className='form-group col-lg-3'>
                                <label>Programme</label>
                                <Form.Select id="" className="form-control" defaultValue={""}>
                                    <option selected>REGULAR</option>
                                    <option>TEXT</option>
                                    <option>EMAIL</option>
                                    <option>PASSWORD</option>
                                </Form.Select> 
                               
                            </div>
                            <div className='form-group col-lg-3'>
                                <label>Programme Level</label>
                                <Form.Select id="" className="form-control" defaultValue={""}>
                                    <option selected>REGULAR</option>
                                    <option>TEXT</option>
                                    <option>EMAIL</option>
                                    <option>PASSWORD</option>
                                </Form.Select>     
                            </div>
                        </div>    
                  </form>
                    <div className='text-right' style={{paddingTop: '150px;'}}>
                        <button className='btn btn-success rounded mr-3 p-2' >Save & Continue</button>
                    </div>
                </div>
            </div>

        </div>

      
    </div>
    </AdminLayout>
  )
}
