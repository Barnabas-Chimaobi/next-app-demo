import React from "react";
import { Input } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import Frontlayout from "../../Layouts/FrontLayout/frontlayout";
import ProgressCard from "../admission/ProgressCard";

export default function index() {
  return (
    <Frontlayout>
      <div className="container d-block d-lg-flex d-xl-flex">
        <div>
          <div
            style={{
              border: "none",
              borderRadius: "10px",
              boxShadow:
                "0px 60px 147px rgba(0, 0, 0, 0.035), 0px 7.51293px 18.4067px rgba(0, 0, 0, 0.07)",
              marginTop: "3em",
              //   width: "1027px",
              paddingTop: "4em",
              paddingBottom: "4em",
              padding: "4em 4em",
            }}
            className="container card"
          >
            <h2
              style={{
                color: "#474747",
                fontFamily: "Gilroy-Bold",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "32px",
                paddingBottom: "0.2em",
              }}
            >
              Admission
            </h2>

            <h3>
              Current Status:
              <span className="text-success">
                Completed Student Information Form
              </span>
            </h3>

            {/* HORIZONTAL LINE */}
            <div
              style={{
                /* width: 907px; */
                height: 0,
                marginTop: "3em",
                border: "1px solid #d6d6d6",
              }}
              className="container"
            ></div>
            {/* END HORIZONTAL LINE */}

            <div style={{ marginTop: "4em" }} className="row">
              <div className="col-sm-6 col-md-4">
                <p style={{ marginBottom: "0.5em", color: "#3E4851" }}>
                  Full Name
                </p>
                <h4
                  style={{
                    marginTop: 0,
                    fontFamily: "Gilroy-SemiBold",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "20px",
                  }}
                >
                  BANKOLE DAMILOLA ARIKE
                </h4>
              </div>

              <div className="col-sm-6 col-md-4">
                <p style={{ marginBottom: "0.5em", color: "#3E4851" }}>
                  Application Form Number
                </p>
                <h4
                  style={{
                    marginTop: 0,
                    fontFamily: "Gilroy-SemiBold",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "20px",
                  }}
                >
                  FPI/PND/2021/000009528
                </h4>
              </div>

              <div className="col-sm-6 col-md-4">
                <p style={{ marginBottom: "0.5em", color: "#3E4851" }}>
                  Programme
                </p>
                <h4
                  style={{
                    marginTop: 0,
                    fontFamily: "Gilroy-SemiBold",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "20px",
                  }}
                >
                  ND Part Time
                </h4>
              </div>

              <div className="col-sm-6 col-md-4">
                <p style={{ marginBottom: "0.5em", color: "#3E4851" }}>
                  Course Of Study
                </p>
                <h4
                  style={{
                    marginTop: 0,
                    fontFamily: "Gilroy-SemiBold",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "20px",
                    textTransform: "uppercase",
                  }}
                >
                  science laboratory technology
                </h4>
              </div>

              <div className="col-sm-6 col-md-4">
                <p style={{ marginBottom: "0.5em", color: "#3E4851" }}>
                  Course Option
                </p>
                <h4
                  style={{
                    marginTop: 0,
                    fontFamily: "Gilroy-SemiBold",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "20px",
                  }}
                >
                  ---
                </h4>
              </div>
            </div>
          </div>

          <div
            style={{
              border: "none",
              borderRadius: "10px",
              //   width: "1027px",
              marginTop: "3em",
              boxShadow:
                "0px 60px 147px rgba(0, 0, 0, 0.035), 0px 7.51293px 18.4067px rgba(0, 0, 0, 0.07)",
              //   top: "600px",
              padding: "4em 4em",
              marginBottom: "3em",
              background: "#FFFFFF",
              boxShadow:
                "0px 90px 147px rgba(0, 0, 0, 0.035), 0px 7.51293px 18.4067px rgba(0, 0, 0, 0.07)",
              borderRadius: "10px",
            }}
            className="container card"
          >
            <h3 className="text-success">
              Welcome to the final step of your admission process!
            </h3>
            <p
              style={{
                fontFamily: "Gilroy-Regular",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "19px",
                paddingTop: "1em",
                color: "#000000",
              }}
            >
              Please confirm your Order Number for Acceptance and School Fees
              payment below. In case of any discrepancy, <br />
              report immediately to the appropriate authority. Thereafter click
              on the Fill Student Form button to fill your form.
            </p>

            <h3 className="pt-4 align-content-centre d-flex justify-content-centre">
              <InfoCircleOutlined className="pr-3 pt-1" /> Confirm your details
            </h3>

            {/* DETAILS BOX */}

            <div
              style={{
                marginTop: "4em",
                marginBottom: "2em",
                padding: "7em 3em",
                background: "#F6F7F8",
                borderRadius: "10px",
              }}
              className="container"
            >
              <div className="row">
                <div className="col-sm-6 col-md-3">
                  <p style={{ marginBottom: "0.5em", color: "#3E4851" }}>
                    Acceptance invoice number
                  </p>
                  <h4
                    style={{
                      marginTop: 0,
                      fontFamily: "Gilroy-SemiBold",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "20px",
                      textTransform: "uppercase",
                    }}
                  >
                    FPI220000615185
                  </h4>
                </div>
                <div className="col-sm-6 col-md-3">
                  <p style={{ marginBottom: "0.5em", color: "#3E4851" }}>
                    School Fees Invoice Number{" "}
                  </p>
                  <h4
                    style={{
                      marginTop: 0,
                      fontFamily: "Gilroy-SemiBold",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "20px",
                      textTransform: "uppercase",
                    }}
                  >
                    FPI220000615268
                  </h4>
                </div>
                <div className="col-sm-6 col-md-3">
                  <p style={{ marginBottom: "0.5em", color: "#3E4851" }}>
                    Acceptance Receipt Number
                  </p>
                  <h4
                    style={{
                      marginTop: 0,
                      fontFamily: "Gilroy-SemiBold",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "20px",
                      textTransform: "uppercase",
                    }}
                  >
                    637766803863796215
                  </h4>
                </div>
                <div className="col-sm-6 col-md-3">
                  <p style={{ marginBottom: "0.5em", color: "#3E4851" }}>
                    School Fees Receipt Number
                  </p>
                  <h4
                    style={{
                      marginTop: 0,
                      fontFamily: "Gilroy-SemiBold",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "20px",
                      textTransform: "uppercase",
                    }}
                  >
                    637767096515118780
                  </h4>
                </div>
              </div>

              {/* DETAILS BOX */}
            </div>

            <div className="d-block d-lg-flex d-xl-flex">
              <div style={{ margin: "6em 0" }}>
                <a
                  href="#"
                  style={{
                    // display: "flex",
                    // flexDirection: "row",
                    // alignItems: "flex-start",
                    padding: "12px 38px",
                    // gap: "10px",
                    // width: "217px",
                    // height: "43px",
                    textDecoration: "none",
                    color: "#FFFFFF",
                    background: "#047735",
                    border: "1px solid #FFFFFF",
                    borderRadius: "5px",
                  }}
                >
                  Fill Student Form
                </a>
              </div>

              <div
                style={{ margin: "6em 0", height: "43px", marginLeft: ".1rem" }}
              >
                <a
                  href="#"
                  style={{
                    // display: "flex",
                    // flexDirection: "row",
                    // alignItems: "flex-start",
                    padding: ".9rem .2rem",
                    gap: "10px",
                    width: "302px",

                    // ,

                    top: "1160px",
                    color: "#047735",
                    textDecoration: "none",
                    border: "1px solid #047735",
                    borderRadius: "5px",
                  }}
                >
                  Fill Course Registration Form
                </a>
              </div>
            </div>
          </div>
        </div>
        <ProgressCard />
      </div>
    </Frontlayout>
  );
}
