import React from 'react'
import { AdminLayout } from '../../../Layouts/adminLayout/adminLayout'

export default function index() {
  return (
    <AdminLayout>
    <div >
        <div className='container bg-light pb-5'>
            <div className='container rounded bg-white pb-3 mt-4'>
                    <div className='container bg-white pb-3'>
                        <form className='row'>
                        <h4 className='text-center pb-4 pt-5'>Set Report Parameters</h4>   
                        <div className='col-lg-6'> 
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Session</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                    <option>--</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Programme</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                    <option>--</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Department</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                    <option>--</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                </div>
                        </div>
                        <div className='col-lg-6'>
                                <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Semester</label>
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option>--</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Level</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>--</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                        <div className='text-right'>
                            <button className='bg-success text-white p-2 border-success rounded mr-3'>Display Report</button>
                            <button className='border-success text-success p-2 rounded'>Bulk Report</button>

                        </div>
                    </div>

            </div>

        </div>
        <div className='container bg-light pb-5'>
            <div className='container rounded bg-white pb-3 mt-4'>
                    <div className='container bg-white pb-3'>
                        <form className='row'>
                        <h4 className='text-center pb-4 pt-5'>Set Report Parameters</h4>   
                        <div className='col-lg-6'> 
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Session</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                    <option>--</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Programme</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                    <option>--</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Department</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                    <option>--</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                </div>
                        </div>
                        <div className='col-lg-6'>
                                <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Semester</label>
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option>--</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Level</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>--</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                        <div className='text-right'>
                            <button className='bg-success text-white p-2 border-success rounded mr-3'>Display Report</button>
                            <button className='border-success text-success p-2 rounded'>Bulk Report</button>

                        </div>
                    </div>

            </div>

        </div>
        
    </div>
    </AdminLayout>
  )
}
