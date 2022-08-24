<<<<<<< HEAD
import React from 'react'
import Logo from '../../../Images/ilaro-logo.jpeg'
import { AdminLayout } from '../../../Layouts/adminLayout/adminLayout'
import { Select } from 'antd'
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
                                <Select id="" className="form-control" defaultValue={""}>
                                    <option selected>REGULAR</option>
                                    <option>TEXT</option>
                                    <option>EMAIL</option>
                                    <option>PASSWORD</option>
                                </Select> 
                               
                            </div>
                            <div className='form-group col-lg-3'>
                                <label>Form Session</label>
                                <Select id="" className="form-control" defaultValue={""}>
                                    <option selected>REGULAR</option>
                                    <option>TEXT</option>
                                    <option>EMAIL</option>
                                    <option>PASSWORD</option>
                                </Select> 
                                
                            </div>
                            <div className='form-group col-lg-3'>
                                <label>Programme</label>
                                <Select id="" className="form-control" defaultValue={""}>
                                    <option selected>REGULAR</option>
                                    <option>TEXT</option>
                                    <option>EMAIL</option>
                                    <option>PASSWORD</option>
                                </Select> 
                               
                            </div>
                            <div className='form-group col-lg-3'>
                                <label>Programme Level</label>
                                <Select id="" className="form-control" defaultValue={""}>
                                    <option selected>REGULAR</option>
                                    <option>TEXT</option>
                                    <option>EMAIL</option>
                                    <option>PASSWORD</option>
                                </Select>     
                            </div>

                        </div>
                    </form>
                    <div className='text-right' style={{paddingTop: '150px;'}}>
                        <button className='btn btn-success rounded mr-3 p-2' >Save & Continue</button>
=======
import React from "react";
// import Logo from "../../../Images/ilaro-logo.jpeg";
import { AdminLayout } from "../../../Layouts/adminLayout/adminLayout";

export default function index() {
  return (
    <AdminLayout>
      <div>
        <div className=" container bg-light pb-5">
          <div className=" container bg-white pb-3">
            <div className="container mt-5 mb- ">
              <h4 className="text-dark pt-3">Dynamic Fee Setup</h4>
              <form>
                <div className="form-row row">
                  <div className="form-group col-lg-3">
                    <label>Form Type</label>
                    <select id="" className="form-control">
                      <option selected>REGULAR</option>
                      <option>..</option>
                      <option>..</option>
                    </select>
                    <div className="card mt-3">
                      <ul>
                        <li style={{ listStyle: "none" }}>REGULAR</li>
                        <li style={{ listStyle: "none" }}>REGULAR</li>
                      </ul>
                    </div>
                  </div>
                  <div className="form-group col-lg-3">
                    <label>Form Session</label>
                    <select id="" className="form-control">
                      <option selected>REGULAR</option>
                      <option>..</option>
                      <option>..</option>
                    </select>
                    <div className="card mt-3">
                      <ul>
                        <li style={{ listStyle: "none" }}>REGULAR</li>
                        <li style={{ listStyle: "none" }}>REGULAR</li>
                      </ul>
                    </div>
                  </div>
                  <div className="form-group col-lg-3">
                    <label>Programme</label>
                    <select id="" className="form-control">
                      <option selected>REGULAR</option>
                      <option>..</option>
                      <option>..</option>
                    </select>
                    <div className="card mt-3">
                      <ul>
                        <li style={{ listStyle: "none" }}>REGULAR</li>
                        <li style={{ listStyle: "none" }}>REGULAR</li>
                      </ul>
>>>>>>> c1ac9fc9810c44ed9c3964619108f4f47a8905fb
                    </div>
                  </div>
                  <div className="form-group col-lg-3">
                    <label>Programme Level</label>
                    <select id="" className="form-control">
                      <option selected>REGULAR</option>
                      <option>..</option>
                      <option>..</option>
                    </select>
                    <div className="card mt-3">
                      <ul>
                        <li style={{ listStyle: "none" }}>REGULAR</li>
                        <li style={{ listStyle: "none" }}>REGULAR</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </form>
              <div className="text-right">
                <button className="bg-success text-white p-2 border-success rounded">
                  Save & Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
