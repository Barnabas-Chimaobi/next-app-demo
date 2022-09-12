import React from "react";
import { AdminLayout } from "../../Layouts/adminLayout/adminLayout";
import { Select, Table, Card } from "antd";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { SaveSession } from "../../components/modalItems/saveSession";
import { useQuery, useMutation } from "@apollo/client";
import { SAVE_SESSION } from "../../api/mutations/adminMutation";
import { GET_ALL_SESSION } from "../../api/queries/basicQueries";
// import { gql, useQuery, useMutation, useLazyQuery } from "@apollo/client";

const { Option } = Select;

const headers = [
  {
    title: "Session",
    dataIndex: "name",
    key: "name",
  },
  { title: "Action", dataIndex: "action", key: "action" },
];

let data;
export default function index() {
  // SaveSession Modal
  const [Open, setOpen] = useState(false);
  const [sessionList, setSession] = useState([]);

  const onClose = () => {
    setOpen(false);
  };

  const handleOpen = () => setOpen(!Open);
  // SaveSessionModal

  //fetch the list of sessions from the server
  const {loading: sessionLoading, error:error, data: sessionData} = useQuery(GET_ALL_SESSION)

  //map session list for rendering on the data table
   data = sessionData?.allSession.map((x,i) => {
      return{
          name:x.name,
          action: (
            <>
              <button className="btn btn-success btn-sm" style={{ width: "120px" }}>
                Update
              </button>{" "}
              &nbsp;{" "}
              <button className="btn btn-danger btn-sm" style={{ width: "120px" }}>
                Delete
              </button>
            </>
          ),
      }
  })
  //setSession(mappedSessionList);



//   MUTATIONS FOR MANAGE SESSION

const [
    sessionAdd,
    { loading: sessionLoad, error: sessionError, data: sessionData },
  ] = useMutation(SAVE_SESSION);

  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [closeOnSubmit, setCloseOnSubmit] = useState(false);

  const AddSession = async () => {
    // setCloseOnSubmit(props.onclose);
    setTimeout(() => {
      setCloseOnSubmit(props.onclose);
    }, 2000);
    const session = await sessionAdd({
      variables: {
        name: name,
        startDate: startDate,
        endDate: endDate,
      },
    });
  };

//   MUTATIONS FOR MANAGE SESSION








  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
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
        key: "odd",
        text: "Select Odd Row",
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
        key: "even",
        text: "Select Even Row",
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
      <div style={{ marginTop: "30px" }}>
        <div className="container bg-light pb-5 pl-5">
          <div
            className="container overflow-hidden"
            style={{ background: "#C7F5DB" }}
          >
            <div className="container mt-3 mb-3  d-flex justify-content-between">
              <h4 className="text-dark pl-4" style={{ fontWeight: "700" }}>
                Manage Session
              </h4>

              {/* <div className="text-right" style={{ paddingTop: "25px;" }}> */}

              {/* </div> */}
            </div>
          </div>
          {/* <div className='container bg-white pb-3 mt-4 pt-4'> */}
          {/* <div className='container col-lg-12'> */}
          <Card className="mt-4">
            <div className="d-flex justify-content-end mb-4">
              <button
                className="btn btn-success   rounded mr-3"
                style={{ width: "150px;", left: "976px" }}
                onClick={handleOpen}
              >
                +Add
              </button>
            </div>
            <Table
              rowSelection={rowSelection}
              columns={headers}
              dataSource={data}
            />
          </Card>
          ;{/* </div> */}
          {/* </div> */}
        </div>
      </div>
      <SaveSession show={Open} close={handleOpen} onclose={onClose} />
    </AdminLayout>
  );
}
