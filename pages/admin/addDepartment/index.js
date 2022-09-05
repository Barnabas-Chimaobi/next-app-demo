import React from "react";
import { Input, Typography, Button, Space } from "antd";
import { Card, Form, Row, Col } from "react-bootstrap";
import Frontlayout from "../../../Layouts/FrontLayout/frontlayout";

const { Text } = Typography;

export default function AddDepartmentForm() {
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
        }}
      >
        <h3>Add Department</h3>
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
              }}
            >
              Name
            </Text>
            <Form.Select className="form-control">
              <option selected>-- SELECT DEPARTMENT NAME-- </option>
              <option>TEXT</option>
              <option>EMAIL</option>
              <option>PASSWORD</option>
            </Form.Select>
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
              }}
            >
              Faculty
            </Text>
            <Form.Select className="form-control">
              <option selected>--SELECT FACULTY</option>
              <option>TEXT</option>
              <option>EMAIL</option>
              <option>PASSWORD</option>
            </Form.Select>
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
              }}
            >
              Department Code
            </Text>
            <Form.Select className="form-control">
              <option selected>--Select DEPARTMENT CODE--</option>
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
          }}
        >
          <Button style={{ background: "#047735", borderRadius: "5px" }}>
            <Text
              style={{
                fontFamily: "Gilroy-Medium",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                textTransform: "capitalize",

                color: "#FFFFFF",
              }}
            >
              Submit
            </Text>
          </Button>
        </Space>
      </Card>
    </div>
    // </Frontlayout>
  );
}
