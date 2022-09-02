import React from "react";
import { Input } from "antd";

export default function index() {
  return (
    <div className="container">
      <div
        style={{
          border: "none",
          borderRadius: "10px",
          //   marginTop: "3em",
          //   width: "1027px",
          boxShadow:
            "0px 60px 147px rgba(0, 0, 0, 0.035), 0px 7.51293px 18.4067px rgba(0, 0, 0, 0.07)",
          //   top: "175px",
          padding: "4em 4em",
        }}
        className="container card mb-5 mt-5"
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
            height: "0px",
            marginTop: "3em",
            border: "1px solid #d6d6d6",
          }}
          className="container"
        ></div>
        {/* END HORIZONTAL LINE */}

        <div style={{ marginTop: "4em" }} className="row">
          <div className="col-sm-6 col-md-4">
            <p style={{ marginBottom: "0.5em", color: "#3E4851" }}>Full Name</p>
            <h4
              style={{
                marginTop: "0",
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
                marginTop: "0",
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
            <p style={{ marginBottom: "0.5em", color: "#3E4851" }}>Programme</p>
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
          borderRadius: "10px",
          //   width: "1027px",
          padding: "4em 4em",
          marginBottom: "7em",
          /* padding-bottom: 4rem; */
          background: "#FFFFFF",
          boxShadow:
            "0px 90px 147px rgba(0, 0, 0, 0.035), 0px 7.51293px 18.4067px rgba(0, 0, 0, 0.07)",
          borderRadius: "10px",
        }}
        className="container card"
      >
        <h3 className="text-success mb-4">GENERATE SCHOOL FEES RECEIPT</h3>

        <div
          style={{
            padding: "2em 2em",

            background: "rgba(217, 217, 217, 0.5)",
          }}
        >
          <p style={{ marginBottom: 0, color: "#3E4851" }}>
            School Fees Invoice Number
          </p>
          <h3
            style={{
              marginTop: ".7rem",
              fontFamily: "Gilroy-Bold",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "15px",
            }}
          >
            FPI220000615268
          </h3>

          <div
            style={{ width: "80%" }}
            className="input-group mt-3 mb-3 pt-4 pb-4"
          >
            {/* <span class="input-group-text" id="basic-addon1">@</span>  */}
            <Input
              type="text"
              className="form-control pt-3 pb-3"
              placeholder="170596708487"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div
            style={{ margin: "1em 0" }}
            className="d-block d-lg-flex d-xl-flex"
          >
            <a
              href="#"
              style={{
                // flexDirection: "row",
                // alignItems: "flex-start",
                padding: ".7rem .8rem",
                alignItems: 'center',
                // gap: "10px",

                // width: "217px",
                height: "43px",
                textDecoration: "none",
                color: "#FFFFFF",
                background: "#047735",
                border: "1px solid #FFFFFF",
                borderRadius: "5px",
              }}
            >
              Generate Receipt
            </a>
          </div>
        </div>

        {/* buttons */}

        <div className="d-block d-lg-flex d-xl-flex justify-content-between mt-5">
          <div
            style={{ margin: "1em 0 " }}
            className=""
          >
            <a
              href="#"
              style={{
                padding: "1.5rem 3rem",
                // gap: "10px",
                width: "302px",
                height: "43px",
                color: "#047735",
                textDecoration: "none",

                border: "1px solid #047735",
                borderRadius: "36px",
              }}
            >
              Print Receipt
            </a>
          </div>

          <div style={{ marginTop: "9em" }} className='d-block d-lg-flex d-xl-flex'>
            <a
              href="#"
              style={{
                // flexDirection: "row",
                // alignSelf: "flex-end",
                padding: "1rem 4rem",
                // gap: "10px",
                textDecoration: "none",
                color: "#FFFFFF",
                background: "#047735",
                borderRadius: "5px",
              }}
            >
              Next
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
