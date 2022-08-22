import React from 'react'
import { AdminLayout } from '../../../Layouts/adminLayout/adminLayout'

export default function index() {
  return (
    <AdminLayout>
    <div>
       <div className='container bg-light pb-5'>
        <div className='container bg-white pb-3'>
            <div className='container mt-5 mb-5'>
                <h4 className='text-dark pt-3 pl-4'>Manage Users</h4>
                <form className='pl-4 pr-4'>
                    <div className='form-row row'>
                        <div className='col-lg-6'>
                        <label>Form Section</label>
                            <select id="" className="form-control">
                                <option selected>Select Users by School</option>
                                <option>..</option>
                                <option>..</option>
                            </select>
                        </div>
                        <div className='col-lg-6'>
                            <label>Select Users by Department</label>
                            <select id="" className="form-control bg-light">
                                    <option selected>BIO-DATA</option>
                                    <option>..</option>
                                    <option>..</option>
                            </select>
                        </div>
                    </div>
                </form>
                <div className='text-right pt-4'>
                    <button className='bg-success text-white p-2 border-success rounded pr-4'>Manage</button>
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

