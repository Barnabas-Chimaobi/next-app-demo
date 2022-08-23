import React from 'react'
import { AdminLayout } from '../../../Layouts/adminLayout/adminLayout'

export default function index() {
  return (
    <AdminLayout>
    <div>
      <div className=' container bg-light pb-5 pt-5 pl-5'>
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
    </AdminLayout>
  )
}
