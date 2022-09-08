import React from 'react'
import { AdminLayout } from '../../../Layouts/adminLayout/adminLayout'
import { Select, Table } from 'antd';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
const { Option } = Select;


const tableHead = [
    {
        title:"Name", 
        dataIndex:"name", 
        key:"name"
    },
    {title:"Status", dataIndex:"status", key:"status"},
    {title:"Department", dataIndex:"department", key:"department"},
    {title:"Action", dataIndex:"action", key:"action"}
]

const tableData = [
    {
        name: "Ngozi Esther Onyeche",
        status:"HOD",
        department:"Political Science",
        action: <><button className='btn btn-success btn-sm' style={{width: '120px'}}>+Add</button> &nbsp; <button className='btn btn-danger btn-sm' style={{width: '120px'}}>Remove</button></>
    },
    {
        name: "Ibezim Lucky Onyeka",
        status:"Dean",
        department:"Political Science",
        action: <><button className='btn btn-success btn-sm' style={{width: '120px'}}> +Add </button> &nbsp; <button className='btn btn-danger btn-sm'  style={{width: '120px'}}>Remove</button></>
    },
    {
        name: "Nkanu Mary Chinwe",
        status:"Lecturer",
        department:"Political Science",
        action: <><button className='btn btn-success btn-sm' style={{width: '120px'}}>Add </button> &nbsp; <button className='btn btn-danger btn-sm' style={{width: '120px'}}>Remove</button></>
    },
    
]
export default function index() {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }

            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }

            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  return (
    <AdminLayout>
    <div style={{marginTop: "30px"}}>
       <div className='container bg-light pb-5 pl-5'>
        <div className='container bg-white pb-3 overflow-hidden'>
            <div className='container mt-5 mb-5'>
                <h4 className='text-dark pt-5 pl-4'>Manage Users</h4>
                <form className='pl-4 pr-4'>
                    <div className='form-row row pt-3'>
                        <div className='col-lg-6 col-sm-12'>
                            <label>Select users by school</label>
                            <Form.Select id="" className="form-control" defaultValue={""}>
                                <option>..</option>
                                <option>..</option>
                            </Form.Select>
                        </div>
                        <div className='col-lg-6 col-sm-12'>
                            <label>Select Users by Department</label>
                            <Form.Select id="" className="form-control" defaultValue={""}>
                                <option>..</option>
                                <option>..</option>
                            </Form.Select>
                        </div>
                    </div>
                </form>
                <div className='text-right' style={{paddingTop: '25px;'}}>
                    <button className='btn btn-success rounded mr-3'  style={{width:'150px;'}}>Manage</button>
                </div>
            </div>

        </div>
        {/* <div className='container bg-white pb-3 mt-4 pt-4'> */}
            {/* <div className='container col-lg-12'> */}
            <Table rowSelection={rowSelection} columns={tableHead} dataSource={tableData} />;

            {/* </div> */}

        {/* </div> */}
       </div>
    </div>
    </AdminLayout>
  )
}

