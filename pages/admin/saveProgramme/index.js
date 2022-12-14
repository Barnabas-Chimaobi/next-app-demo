import React, { useState } from "react";
import { Input, Typography, Button, Space } from "antd";
import { Card, Form, Row, Col } from "react-bootstrap";
import Frontlayout from "../../../Layouts/FrontLayout/frontlayout";
import { useMutation } from "@apollo/client";
import { SAVE_PROGRAMME } from "../../../api/mutations/adminMutation";

const { Text } = Typography;

export default function SAVEPROGRAMMEFORM(props) {
  const [
    saveProgramme,
    { loading: programmeLoading, error: programmeError, data: programmeData },
  ] = useMutation(SAVE_PROGRAMME);
  const [programmeName, setProgrammeName] = useState("");
  const [descriptions, setDescription] = useState("");
  const [closeOnSubmit, setCloseOnSubmit] = useState(false);

  const submitProgramme = async () => {
    setCloseOnSubmit(props.onclose);
    const dept = await saveProgramme({
      variables: {
        name: programmeName,
        description: descriptions,
      },
    });
    console.log(dept.data, "consolledddept======");
  };

      if(programmeError){ console.log(JSON.stringify(programmeError, null, 2), 'errormutatiincoureseee==sssss=====') }
      if(programmeLoading){console.log(programmeLoading, 'loginloadinggsss====')}
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
            <Form.Control type="text" className="form-control" onChange={(e) => setProgrammeName(e.target.value)} />
            {/* <option selected>-- SELECT PROGRAMME NAME-- </option>
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
              as="textarea"
              placeholder="ADD DESCRIPTION"
              className="pt-4 pb-4"
              onChange={(e) => setDescription(e.target.value)}
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
            style={{ borderRadius: "5px" }}
            type="primary"
            danger>
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
              Cancel
            </Text>
          </Button>  
          <Button
            onClick={() => submitProgramme()}
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
