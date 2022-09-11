import React, { useState } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import ModalCard from "../../../components/modalCard";
import { Typography } from "antd";
import FirstModal from "../../../components/firstModal";
import { AddDepartMent } from "../../../components/modalItems/addDepartment";
import { SaveDepartment } from "../../../components/modalItems/saveDepartment";
import { SaveFaculty } from "../../../components/modalItems/saveFaculty";
import { SaveProgramme } from "../../../components/modalItems/saveProgramme";
import { SaveSession } from "../../../components/modalItems/saveSession";
import { AdminLayout } from "../../../Layouts/adminLayout/adminLayout";

const { Text } = Typography;

export default function Index() {
  // AddDepartmentModal
  const [show, setShow] = useState(false);
  const [Reveal, setReveal] = useState(false);
  const [disclose, setdisclose] = useState(false);
  const [display, setdisplay] = useState(false);
  const [Open, setOpen] = useState(false);

  const handleShow = () => setShow(!show);

  // AddDepartmentModalEnd

  // SaveDepartmentModal

  const handleReveal = () => setReveal(!Reveal);
  const onClose = () => {
    setReveal(false);
    setdisclose(false);
    setShow(false);
    setdisplay(false);
    setOpen(false);
  };

  // SaveDeparmentModalEnd

  // SaveFacultyModal

  const handledisplay = () => setdisplay(!display);

  // SaveFacultyModalEnd

  // SaveProgrammeModal

  const handledisclose = () => setdisclose(!disclose);

  // SaveProgrammeModalEnd

  // SaveSessionModal

  const handleOpen = () => setOpen(!Open);

  // SaveSessionModalEnd

  return (
    <AdminLayout>
      <div style={{ marginTop: "30px" }}>
        <Container className="pr-5 pl-5">
          <Row>
            <Col lg={3} sm={6} className="pb-3" onClick={handleReveal}>
              <ModalCard>
                <Text
                  style={{
                    // position: absolute;
                    width: "158px",
                    height: "25px",
                    left: "589px",
                    top: "294px",

                    fontFamily: "Gilroy-ExtraBold",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "25px",

                    color: "#FFFFFF",
                  }}
                >
                  Save Department
                </Text>
              </ModalCard>
            </Col>
            <Col lg={3} sm={6} className="pb-3" onClick={handledisplay}>
              <ModalCard>
                <Text
                  style={{
                    // position: absolute;
                    width: "158px",
                    height: "25px",
                    left: "589px",
                    top: "294px",

                    fontFamily: "Gilroy-ExtraBold",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "25px",

                    color: "#FFFFFF",
                  }}
                >
                  Save Faculty
                </Text>
              </ModalCard>
            </Col>
            <Col lg={3} sm={6} className="pb-3" onClick={handledisclose}>
              <ModalCard>
                <Text
                  style={{
                    // position: absolute;
                    width: "158px",
                    height: "25px",
                    left: "589px",
                    top: "294px",

                    fontFamily: "Gilroy-ExtraBold",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "25px",

                    color: "#FFFFFF",
                  }}
                >
                  Save Programme
                </Text>
              </ModalCard>
            </Col>
            <Col lg={3} sm={6} className="pb-3" onClick={handleOpen}>
              <ModalCard>
                <Text
                  style={{
                    // position: absolute;
                    width: "158px",
                    height: "25px",
                    left: "589px",
                    top: "294px",

                    fontFamily: "Gilroy-ExtraBold",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "25px",

                    color: "#FFFFFF",
                  }}
                >
                  Save Session
                </Text>
              </ModalCard>
            </Col>
          </Row>
          <SaveDepartment
            show={Reveal}
            close={handleReveal}
            onclose={onClose}
          />
          <SaveFaculty show={display} close={handledisplay} onclose={onClose} />
          <SaveProgramme
            show={disclose}
            close={handledisclose}
            onclose={onClose}
          />
          <SaveSession show={Open} close={handleOpen} onclose={onClose} />
        </Container>
      </div>
    </AdminLayout>
  );
}
