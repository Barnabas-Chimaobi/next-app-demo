import React, { useState } from "react";
import ProgressCard from "../Application/progressCard";
import PersonDetails from "./personDetails";
import Olevel from "./olevel";
import Education from "./education";
import Documents from "./documents";
import Programme from "./programme";
import NewForm from "./NewForm";
import NewProgressCard from "../Application/NewProgressCard";
import { Col, Container, Row } from "react-bootstrap";
import Frontlayout from "../../Layouts/FrontLayout/frontlayout";

export default function index() {
  const [show, setShow] = useState("personDetails");

  const toggleTabs = (key) => {
    console.log(key, "gfhjiojhvgcfhjiopjihugvjkhgvjk");
    switch (key) {
      case "personDetails":
        setShow(key);
        break;
      case "olevel":
        setShow(key);
        break;
      case "education":
        setShow(key);
        break;
      case "documents":
        setShow(key);
        break;
      case "programme":
        setShow(key);
        break;
      default:
        break;
    }
  };
  return (
    <Frontlayout>
      <div>
        <div
          className="
      ">
          <div className="">
            {/* <h2 className>Application Form</h2>
          <p>HND FULL TIME</p>
        </div>
      </div>
      <div className="container d-lg-flex">
        <div className="col-lg-8 col-sm-12"> */}
            {/* mini nav */}
            {/* <center>
           <div className="row pb-4">
                <div className="col-lg-3">
                    <a onClick={() => toggleTabs('personDetails')}  style={{textDecoration: "none", color: "black"}}><i class="fa-solid fa-user"></i>Personal Details</a>
                </div>
                <div className="col-lg-2">
                    <a  onClick={() => toggleTabs('olevel')} style={{textDecoration: "none", color: "black"}}><i class="fa-solid fa-file"></i>O'Level</a> 
                </div>
                <div className="col-lg-2">
                    <a onClick={() => toggleTabs('education')}  style={{textDecoration: "none", color: "black"}}><i class="fa-solid fa-building-columns"></i>Education</a>
                </div>
                <div className="col-lg-2">
                    <a onClick={() => toggleTabs('documents')}  style={{textDecoration: "none", color: "black"}}><i class="fa-solid fa-copy"></i>Documents</a>
                </div>
                <div className="col-lg-2">
                    <a onClick={() => toggleTabs('programme')}  style={{textDecoration: "none", color: "black"}}><i class="fa-solid fa-book-open"></i>Programme</a>  
                </div>
            </div>
           </center> */}

            {/* Personal deets  */}
            {/* {show == 'personDetails' && <PersonDetails />
          }

          {/* O-level */}
            {/* { show == 'olevel' && <Olevel />
          } */}

            {/* education */}
            {/* {show == 'education' && <Education />
          } */}

            {/* documents */}
            {/* {show == 'documents' && <Documents />
          } */}

            {/* Programme */}
            {/* {show == 'programme' && <Programme />
          } */}
            {/* <NewForm /> */}
          </div>
          <Container>
            <div style={{ marginTop: "20px", alignItems: "center" }}>
              <Row>
                <Col lg={8} sm={6} md={6} xl={8} style={{ marginTop: "55px" }}>
                  <NewForm />
                </Col>
                <Col
                  lg={4}
                  sm={6}
                  md={6}
                  xl={4}
                  className="mt-sm-4"
                  style={{ marginTop: "" }}>
                  <ProgressCard />
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </Frontlayout>
  );
}
