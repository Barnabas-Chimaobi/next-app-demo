import React from 'react'
import { AdminLayout } from '../../../Layouts/adminLayout/adminLayout'
import { Select } from 'antd';
const { Option } = Select;

export default function index() {
  return (
    <AdminLayout>
    <div>
       <div className='container bg-light pb-5 pl-5'>
        <div className='container bg-white pb-3'>
            <div className='container mt-5 mb-5'>
                <h4 className='text-dark pt-5 pl-4'>Manage Users</h4>
                <form className='pl-4 pr-4'>
                    <div className='form-row row pt-3'>
                        <div className='col-lg-6'>
                            <label>Select users by school</label>
                            <Select id="" className="form-control" defaultValue={""}>
                                <option>..</option>
                                <option>..</option>
                            </Select>
                        </div>
                        <div className='col-lg-6'>
                            <label>Select Users by Department</label>
                            <Select id="" className="form-control" defaultValue={""}>
                                <option>..</option>
                                <option>..</option>
                            </Select>
                        </div>
                    </div>
                </form>
                <div className='text-right' style={{paddingTop: '150px;'}}>
                    <button className='btn btn-success rounded mr-3'  style={{width:'150px;'}}>Manage</button>
                </div>
            </div>

        </div>
        <div className='container bg-white pb-3 mt-4 pt-4'>
            

        </div>
       </div>
    </div>
    </AdminLayout>
  )
}

