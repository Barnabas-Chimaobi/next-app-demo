import React from 'react';
import { AdminLayout } from '../../../Layouts/adminLayout/adminLayout';
import { Select, Table, Button } from 'antd';
import { Card, Form, Row, Col, Modal } from "react-bootstrap";
import { useState } from 'react';
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_FACULTY } from '../../../api/mutations/adminMutation';
import { GET_ALL_FACULTY } from '../../../api/queries/basicQueries';
import SaveFacultyForm from '../saveFaculty';

const {Option} = Select;

let tableHead;
let tableData;


export default function index() {
    // delete faculty mutation
    const [
      delFaculty,{loading: facultyLoading, error: facultyError, data: facultyData }
    ] = useMutation(DELETE_FACULTY);

    //get all faculty query
    const { loading:loadingFaculty, error:error, data:facultyList } = useQuery(GET_ALL_FACULTY);
    console.log(facultyList?.allFaculty);
    
    //mapping of faculties on table
    const mappedFaculty = facultyList?.allFaculty.map((x) => {
      return{
        name:x.name,
        //description:x.description,
        action: <><button className='btn btn-success btn-sm' style={{width: '120px'}}>Update</button> &nbsp; <button className='btn btn-danger btn-sm' style={{width: '120px'}}>Delete</button></>
      }
    })

    console.log(mappedFaculty, "mapped")

    

    
    const [facultyId, setFacultyId] = useState();
    const deleteFaculty = async () => {
      const remove = await delFaculty({
        variables: {
          id: facultyId
        }
      })
    }

    //table contents
    tableHead = [
      {
        title: 'Faculty',
        dataIndex: 'name',
        key: 'name'
      },
      
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        align: 'right'
      }
  
  ]
  tableData = mappedFaculty;
    
    //checkbox useState
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    //Modal
   const [isModalOpen, setIsModalOpen] = useState(false);

   const showModal = () => {
     setIsModalOpen(true);
   };
 
  //  const handleOk = () => {
  //    setIsModalOpen(false);
  //  };
 
   const handleCancel = () => {
     setIsModalOpen(false);
   };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  // const rowSelection = {
  //   selectedRowKeys,
  //   onChange: onSelectChange,
  //   selections: [
  //     Table.SELECTION_ALL,
  //     Table.SELECTION_INVERT,
  //     Table.SELECTION_NONE,
  //     {
  //       key: 'odd',
  //       text: 'Select Odd Row',
  //       onSelect: (changableRowKeys) => {
  //         let newSelectedRowKeys = [];
  //         newSelectedRowKeys = changableRowKeys.filter((_, index) => {
  //           if (index % 2 !== 0) {
  //             return false;
  //           }

  //           return true;
  //         });
  //         setSelectedRowKeys(newSelectedRowKeys);
  //       },
  //     },
  //     {
  //       key: 'even',
  //       text: 'Select Even Row',
  //       onSelect: (changableRowKeys) => {
  //         let newSelectedRowKeys = [];
  //         newSelectedRowKeys = changableRowKeys.filter((_, index) => {
  //           if (index % 2 !== 0) {
  //             return true;
  //           }

  //           return false;
  //         });
  //         setSelectedRowKeys(newSelectedRowKeys);
  //       },
  //     },
  //   ],
  // };

  console.log(facultyData, "faculties")
  return (
    <AdminLayout>
        
        {/* <Modal title="Basic Modal" open={true} 
        onOk={handleOk}
         onCancel={handleCancel}
         >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal> */}
        
        
      <Modal show={isModalOpen} onHide={handleCancel}>
        <Modal.Header>
        <h3>Add Faculty</h3>
        </Modal.Header>
       <Modal.Body>
          <SaveFacultyForm/>
       </Modal.Body>
      </Modal>
       <div style={{marginTop: "30px"}}>
        {loadingFaculty ? <p>Loading...</p> : null}
       <div className='container bg-light pb-5 pl-5'>
        <Row className='container overflow-hidden  mt-5 mb-5' style={{padding: '10px', backgroundColor: '#C7F5DB'}}> 
            <Col lg={12} sm={6} className=''>
                <h4 className='text-dark' style={{fontSize: '18px'}}>Manage Faculty</h4>
            </Col> 
        </Row>
        <Card style={{padding: '20px'}}>
            <div className='text-right mb-5 mt-5'>
                <button onClick={showModal} className='btn btn-success rounded'  style={{width:'150px;'}}>Add</button>      
            </div>
            <Table columns={tableHead} dataSource={tableData} />  
        </Card>
       </div>
       </div> 
    </AdminLayout>
  )
}
