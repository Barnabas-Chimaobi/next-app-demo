import React from "react";
import { AdminLayout } from "../../Layouts/adminLayout/adminLayout";
import { Select, Table, Card } from "antd";
import { useState } from "react";
import { Form } from "react-bootstrap";
const { Option } = Select;
import { SaveDepartment } from "../../components/modalItems/saveDepartment";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ALL_DEPARTMENT } from "../../api/queries/basicQueries";
import { SAVE_DEPARTMENT } from "../../api/mutations/adminMutation";

const headers = [
  {
    title: "Department",
    dataIndex: "name",
    key: "name",
  },
  { title: "Faculty", dataIndex: "faculty", key: "faculty" },
  { title: "Dept-Code", dataIndex: "deptCode", key: "deptCode" },
  { title: "Action", dataIndex: "action", key: "action" },
];

let data;

//  = [
//   {
//     faculty: "Faculty Of Engineering",
//     department: "Chemical Engineering",
//     deptCode: "ENG - 411",
//     action: (
//       <>
//         <button className="btn btn-success btn-sm" style={{ width: "120px" }}>
//           Update
//         </button>{" "}
//         &nbsp;{" "}
//         <button className="btn btn-danger btn-sm" style={{ width: "120px" }}>
//           Delete
//         </button>
//       </>
//     ),
//   },

//   {
//     faculty: "School Of Medical Sciences",
//     department: "Medicine & Surgery",
//     deptCode: "MED - 601",
//     action: (
//       <>
//         <button className="btn btn-success btn-sm" style={{ width: "120px" }}>
//           {" "}
//           Update{" "}
//         </button>{" "}
//         &nbsp;{" "}
//         <button className="btn btn-danger btn-sm" style={{ width: "120px" }}>
//           Delete
//         </button>
//       </>
//     ),
//   },

//   {
//     faculty: "Faculty of Biological Sciences",
//     department: "Biochemistry",
//     deptCode: "BIO - 401",
//     action: (
//       <>
//         <button className="btn btn-success btn-sm" style={{ width: "120px" }}>
//           Update{" "}
//         </button>{" "}
//         &nbsp;{" "}
//         <button className="btn btn-danger btn-sm" style={{ width: "120px" }}>
//           Delete
//         </button>
//       </>
//     ),
//   },

//   {
//     faculty: "Faculty of Physical Sciences",
//     department: "Industrial Physics",
//     deptCode: "CHEM - 211",
//     action: (
//       <>
//         <button className="btn btn-success btn-sm" style={{ width: "120px" }}>
//           Update{" "}
//         </button>{" "}
//         &nbsp;{" "}
//         <button className="btn btn-danger btn-sm" style={{ width: "120px" }}>
//           Delete
//         </button>
//       </>
//     ),
//   },

//   {
//     faculty: "Faculty of Education",
//     department: "Education Biology",
//     deptCode: "EDU - 331",
//     action: (
//       <>
//         <button className="btn btn-success btn-sm" style={{ width: "120px" }}>
//           Update{" "}
//         </button>{" "}
//         &nbsp;{" "}
//         <button className="btn btn-danger btn-sm" style={{ width: "120px" }}>
//           Delete
//         </button>
//       </>
//     ),
//   },
//   {
//     faculty: "Faculty of Social Sciences",
//     department: "Political Science",
//     deptCode: "POL - 422",
//     action: (
//       <>
//         <button className="btn btn-success btn-sm" style={{ width: "120px" }}>
//           Update{" "}
//         </button>{" "}
//         &nbsp;{" "}
//         <button className="btn btn-danger btn-sm" style={{ width: "120px" }}>
//           Delete
//         </button>
//       </>
//     ),
//   },
//   {
//     faculty: "Faculty of Health Sciences",
//     department: "Nursing Science",
//     deptCode: "NUR - 341",
//     action: (
//       <>
//         <button className="btn btn-success btn-sm" style={{ width: "120px" }}>
//           Update{" "}
//         </button>{" "}
//         &nbsp;{" "}
//         <button className="btn btn-danger btn-sm" style={{ width: "120px" }}>
//           Delete
//         </button>
//       </>
//     ),
//   },

//   {
//     faculty: "Faculty of Law",
//     department: "Law",
//     deptCode: "LAW - 514",
//     action: (
//       <>
//         <button className="btn btn-success btn-sm" style={{ width: "120px" }}>
//           Update{" "}
//         </button>{" "}
//         &nbsp;{" "}
//         <button className="btn btn-danger btn-sm" style={{ width: "120px" }}>
//           Delete
//         </button>
//       </>
//     ),
//   },

//   {
//     faculty: "Faculty of Environmental Sciences",
//     department: "Architecture",
//     deptCode: "ARC - 232",
//     action: (
//       <>
//         <button className="btn btn-success btn-sm" style={{ width: "120px" }}>
//           Update{" "}
//         </button>{" "}
//         &nbsp;{" "}
//         <button className="btn btn-danger btn-sm" style={{ width: "120px" }}>
//           Delete
//         </button>
//       </>
//     ),
//   },
// ];

// Fetch Department from the server

export default function index() {
  // SaveDepartmentModal
  const [Reveal, setReveal] = useState(false);
  const handleReveal = () => setReveal(!Reveal);
  const onClose = () => {
    // setReveal(false);

    setOpen(false);
  };

  const [deptList, setDept] = useState([]);

  // SaveDeparmentModalEnd

  const {
    loading: departmentLoading,
    error: error,
    data: departmentData,
  } = useQuery(GET_ALL_DEPARTMENT);

  //map department list for rendering on the data table
  data = departmentData?.allDepartment.map((x, i) => {
    return {
      name: x.name,
      faculty: x.faculty,
      deptCode: x.deptCode,
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
    };
  });
//setDepartment(mappedDeptList);









// MUTATIONS FOR MANAGE DEPARTMENT

const [saveDept, { loading: deptLoading, error: deptError, data: deptData }] =
    useMutation(SAVE_DEPARTMENT);
  const [deptName, setDeptName] = useState("");
  const [description, setDescription] = useState("");
  const [closeOnSubmit, setCloseOnSubmit] = useState(false);

  const submitDepartment = async () => {
    setCloseOnSubmit(props.onclose);
    const dept = await saveDept({
      variables: {
        name: deptName,
        faculty: [],
        code: "dghjklasdhakj",
      },
    });
    console.log(dept.data, "consolledddept======");
  };

  if (deptError) {
    console.log(
      JSON.stringify(deptError, null, 2),
      "errormutatiincoureseee==sssss====="
    );
  }
  if (deptLoading) {
    console.log(deptLoading, "loginloadinggsss====");
  }

// END OF MUTATIONS


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
                Manage Department
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
                onClick={handleReveal}
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
      <SaveDepartment show={Reveal} close={handleReveal} onclose={onClose} />
    </AdminLayout>
  );
}
