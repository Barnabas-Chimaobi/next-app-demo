import React, { useState } from "react";
import { Input, Typography, Button, Space, DatePicker } from "antd";
import { Card, Form, Row, Col } from "react-bootstrap";
import Frontlayout from "../../../Layouts/FrontLayout/frontlayout";
import { useMutation } from "@apollo/client";
import { SAVE_SESSION } from "../../../api/mutations/adminMutation";
import Error from "../../../components/CustomMessages/Error";
import Success from "../../../components/CustomMessages/Success";
import Warning from "../../../components/CustomMessages/Warning";

const { Text } = Typography;

export default function SaveSessionForm(props) {
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

  console.log(sessionError + "dhdjdjddjde");
  return (
    // <Frontlayout>
    <div
    // style={{
    //   padding: "4em 4em",
    // }}
    // className="card container"
    >
      {sessionError ? (
        <Error title="Error Title" subtitle="Error Subtitle" />
      ) : null}
      {sessionData ? (
        <Success title="Success Title" subtitle="Error subtitle" />
      ) : null}
      <Card
        style={{
          background: "#FFFFFF",
          boxShadow:
            "0px 60px 147px rgba(0, 0, 0, 0.035), 0px 7.51293px 18.4067px rgba(0, 0, 0, 0.07)",
          borderRadius: "10px",
          border: "none",
          padding: "74px 54px",
        }}>
        <h3>Save Session</h3>
        <Row>
          <Col lg={12} xl={12} sm={6} style={{ marginBottom: "34px" }}>
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
            <Form.Select
              className="form-control"
              onChange={(e) => setName(e.target.value)}>
              <option selected>-- SELECT SESSION NAME-- </option>
              <option>TEXT</option>
              <option>EMAIL</option>
              <option>PASSWORD</option>
            </Form.Select>
          </Col>

          <Col lg={9} xl={6} sm={6} style={{ marginBottom: "34px" }}>
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
              Start Date
            </Text>
            {/* <DatePicker /> */}
            <Form.Control
              type="date"
              onChange={(e) => setStartDate(e.target.value)}
              style={{ color: "black" }}
            />
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
              End Date
            </Text>
            <Form.Control
              type="date"
              onChange={(e) => setEndDate(e.target.value)}
              style={{ color: "black" }}
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
            style={{ background: "#047735", borderRadius: "5px" }}
            onClick={() => AddSession()}>
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
