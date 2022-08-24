import React from 'react'
import { AdminLayout } from '../../../Layouts/adminLayout/adminLayout'
import { Select } from 'antd'
const { Option } = Select;

export default function index() {
  return (
    <AdminLayout>
    <div>
      <div className=' container bg-light pb-5 pt-5 pl-5'>
            <div className='container bg-white pb-3 mt-4'>
                <div className='container bg-white pb-3'>
                    <h4 className='text-center pb-4 pt-5'>Dynamic Reports Setup</h4>
                    <form>
                        <div className='form-row'>
                            <div className='form-group pl-3 '>
                                <label className=''>Report Type</label>
                                <Select id="" className="form-control" defaultValue={"--SELECT FEE TYPE--"} style={{width: '300px', marginLeft: '10px'}}>
                                    <option selected>REGULAR</option>
                                    <option>TEXT</option>
                                    <option>EMAIL</option>
                                    <option>PASSWORD</option>
                                </Select>    
                            </div>
                        </div>
                    </form>


                </div>

            </div>
      </div>
    </div>
    </AdminLayout>
  )
}
