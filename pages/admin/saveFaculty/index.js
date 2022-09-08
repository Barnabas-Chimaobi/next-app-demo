import React, { useState } from "react";
import { Input, Typography, Button, Space } from "antd";
import { Card, Form, Row, Col } from "react-bootstrap";
import Frontlayout from "../../../Layouts/FrontLayout/frontlayout";
import { SAVE_FACULTY } from "../../../api/mutations/adminMutation";
import { useMutation } from "@apollo/client";

const { Text } = Typography;

export default function SaveFacultyForm(props) {
  const [
    saveFaculty,
    { loading: facultyLoading, error: facultyError, data: facultyData },
  ] = useMutation(SAVE_FACULTY);
  const [facultyName, setFacultyName] = useState("");
  const [descriptions, setDescription] = useState("");
  const [closeOnSubmit, setCloseOnSubmit] = useState(false);

  const submitFaculty = async () => {
    setCloseOnSubmit(props.onclose);
    const dept = await saveFaculty({
      variables: {
        name: facultyName,
        description: descriptions,
      },
    });
    console.log(dept.data, "consolledddept======");
  };

  if (facultyError) {
    console.log(
      JSON.stringify(facultyError, null, 2),
      "errormutatiincoureseee==sssss====="
    );
  }
  if (facultyLoading) {
    console.log(facultyLoading, "loginloadinggsss====");
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
        <h3>Save Faculty</h3>
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
                setFacultyName(name.target.name);
              }}
              className="form-control"
            />
            {/* <option selected>-- SELECT FACULTY NAME-- </option>
              <option>TEXT</option>
              <option>EMAIL</option>
              <option>PASSWORD</option>
            </Form.Select> */}
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
              Description
            </Text>
            <Form.Control
              onChange={(name) => {
                setDescription(name.target.name);
              }}
              as="textarea"
              placeholder="ADD DESCRIPTION"
              className="pt-4 pb-4"
            />
          </Col>
        </Row>
        <Space
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}>
          <Button
            onClick={() => submitFaculty()}
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
