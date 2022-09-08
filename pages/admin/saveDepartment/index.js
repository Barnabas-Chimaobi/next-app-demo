import React, { useState } from "react";
import { Input, Typography, Button, Space } from "antd";
import { Card, Form, Row, Col } from "react-bootstrap";
import Frontlayout from "../../../Layouts/FrontLayout/frontlayout";
import { SAVE_DEPARTMENT } from "../../../api/mutations/adminMutation";
import { useMutation } from "@apollo/client";

const { Text } = Typography;

export default function SaveDepartmentForm(props) {
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
  return (
    // <Frontlayout>
    <div
    // style={{
    //   padding: "4em 4em",
    // }}
    // className="card container"
    >
      <Card
        style={{
          background: "#FFFFFF",
          boxShadow:
            "0px 60px 147px rgba(0, 0, 0, 0.035), 0px 7.51293px 18.4067px rgba(0, 0, 0, 0.07)",
          borderRadius: "10px",
          border: "none",
          padding: "74px 54px",
        }}>
        <h3>Save Department</h3>
        <Row>
          <Col lg={6} xl={6} sm={6} style={{ marginBottom: "34px" }}>
            <Text
              style={{
                fontFamily: "Gilroy-Medium",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "17px",

                textTransform: "capitalize",

                color: "#3E4851",
              }}>
              Name
            </Text>
            <Form.Control
              type="text"
              onChange={(name) => {
                setDeptName(name.target.name);
              }}
              className="form-control"
            />
            {/* <option selected>-- SELECT DEPARTMENT NAME-- </option>
              <option>TEXT</option>
              <option>EMAIL</option>
              <option>PASSWORD</option>
            </Form.Text> */}
          </Col>
          <Col lg={6} xl={6} sm={6} style={{ marginBottom: "34px" }}>
            <Text
              style={{
                fontFamily: "Gilroy-Medium",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "17px",

                textTransform: "capitalize",

                color: "#3E4851",
              }}>
              Department Code
            </Text>
            <Form.Control
              type="text"
              onChange={(name) => {
                setDeptName(name.target.value);
              }}
              className="form-control"
            />
            {/* <option selected>-- SELECT DEPARTMENT NAME-- </option>
              <option>TEXT</option>
              <option>EMAIL</option>
              <option>PASSWORD</option>
            </Form.Text> */}
          </Col>
          <Col lg={6} xl={6} sm={6} style={{ marginBottom: "34px" }}>
            <Text
              style={{
                fontFamily: "Gilroy-Medium",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "17px",

                textTransform: "capitalize",

                color: "#3E4851",
              }}>
              Faculty
            </Text>
            <Form.Select
              // type="text"
              onChange={(name) => {
                setDeptName(name.target.value);
              }}
              className="form-control">
              <option selected>-- SELECT Faculty NAME-- </option>
              <option>TEXT</option>
              <option>EMAIL</option>
              <option>PASSWORD</option>
            </Form.Select>
          </Col>
        </Row>
        <Space
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}>
          <Button
            onClick={() => submitDepartment()}
            style={{ background: "#047735", borderRadius: "5px" }}>
            <Text
              style={{
                fontFamily: "Gilroy-Medium",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                textTransform: "capitalize",

                color: "#FFFFFF",
              }}>
              Submit
            </Text>
          </Button>
        </Space>
      </Card>
    </div>
    // </Frontlayout>
  );
}
