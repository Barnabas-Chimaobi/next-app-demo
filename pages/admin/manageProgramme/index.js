import React, { useState } from 'react';
import { AdminLayout } from '../../../Layouts/adminLayout/adminLayout';
import {Select, Table,} from 'antd';
import { Card, Form, Row, Col, Modal,Button } from "react-bootstrap";
import SAVEPROGRAMMEFORM from '../saveProgramme';
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_PROGRAMME } from '../../../api/queries/basicQueries';
import { DELETE_PROGRAMME } from '../../../api/mutations/adminMutation';


const {Option} = Select;

//declaring table content variables
let tableHead;
let tableData;


export default function index() {
    // delete programme mutation
    const [
        delProgramme, {loading: programmeLoading, error: programmeError, data: programmeData}
    ] = useMutation(DELETE_PROGRAMME);

    //get all programme query
    const { loading: loadingProgramme, error: error, data: programmeList } = useQuery(GET_ALL_PROGRAMME);
    
    console.log(programmeList?.allProgramme);

    //mapping of programmes on table
    const mappedProgramme = programmeList?.allProgramme.map((x) => {
        return{
            programme: x.name,
            action: <><button className='btn btn-success btn-sm' style={{width: '120px'}}>Update</button> &nbsp; <button className='btn btn-danger btn-sm' style={{width: '120px'}}>Delete</button></>
        }
    })

    console.log(mappedProgramme, 'mappedQuery');

    //Define table contents
    const tableHead = [
        {
            title: 'Programme',
            dataIndex: 'programme',
            key: 'programme'
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            align: 'right'
        }
    ]
    const tableData = mappedProgramme;
    
    // const tableData = [
    //     {
    //         programme: 'HND - Part Time',
    //         action: <><button className='btn btn-success btn-sm' style={{width: '120px'}}>Update</button> &nbsp; <button className='btn btn-danger btn-sm' style={{width: '120px'}}>Delete</button></>
    //     },
    //     {
    //         programme: 'Regular',
    //         action: <><button className='btn btn-success btn-sm' style={{width: '120px'}}>Update</button> &nbsp; <button className='btn btn-danger btn-sm' style={{width: '120px'}}>Delete</button></>
    //     },
    //     {
    //         programme: 'HND -  Full Time',
    //         action:  <><button className='btn btn-success btn-sm' style={{width: '120px'}}>Update</button> &nbsp; <button className='btn btn-danger btn-sm' style={{width: '120px'}}>Delete</button></>
    //     }
    // ]
        //checkbox usestate
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    //modal usestate
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    }


    

    // const rowSelection = {
    //     selectedRowKeys,
    //     onChange: onSelectChange,
    //     selections: [
    //       Table.SELECTION_ALL,
    //       Table.SELECTION_INVERT,
    //       Table.SELECTION_NONE,
    //       {
    //         key: 'odd',
    //         text: 'Select Odd Row',
    //         onSelect: (changableRowKeys) => {
    //           let newSelectedRowKeys = [];
    //           newSelectedRowKeys = changableRowKeys.filter((_, index) => {
    //             if (index % 2 !== 0) {
    //               return false;
    //             }
    
    //             return true;
    //           });
    //           setSelectedRowKeys(newSelectedRowKeys);
    //         },
    //       },
    //       {
    //         key: 'even',
    //         text: 'Select Even Row',
    //         onSelect: (changableRowKeys) => {
    //           let newSelectedRowKeys = [];
    //           newSelectedRowKeys = changableRowKeys.filter((_, index) => {
    //             if (index % 2 !== 0) {
    //               return true;
    //             }
    
    //             return false;
    //           });
    //           setSelectedRowKeys(newSelectedRowKeys);
    //         },
    //       },
    //     ],
    //   };
  return (
    <div>
        <AdminLayout>
            <Modal show={isModalOpen} onHide={handleCancel}>
                <Modal.Header>
                    <h3>Add Programme</h3>
                </Modal.Header>
                <Modal.Body>
                    <SAVEPROGRAMMEFORM/>
                </Modal.Body>
            </Modal>
            <div className='container bg-light pb-5 pl-5'>
                <Row className='container overflow-hidden  mt-5 mb-5' style={{padding: '10px', backgroundColor: '#C7F5DB'}}> 
                    <Col lg={12} sm={6} className=''>
                        <h4 className='text-dark' style={{fontSize: '18px'}}>Manage Programme</h4>
                    </Col> 
                </Row>
                <Card style={{padding: '20px'}}>
                    <div className='text-right mb-5 mt-5'>
                        <button onClick={showModal} className='btn btn-success rounded'  style={{width:'150px;'}}>Add</button>      
                    </div>
                    <Table columns={tableHead} dataSource={tableData} />  
                </Card>
            </div>
        </AdminLayout>
      
    </div>
  )
}
