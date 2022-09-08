import React from "react";
import { Form } from "react-bootstrap";
import { Typography } from "antd";
// const { Option } = Select;
const { Text } = Typography;

export default function programme() {
  return (
    <div>
      <div className="row card col-sm-12 col-lg-12 pb-4 pt-4">
        <div className="row pt-4 pb-4">
          <div className="col-lg-4">
            <Form>
              <h5>PROGRAMME DETAILS</h5>
              <div className="form-row">
                <div className="form-group">
                  <Text
                    style={{
                      fontFamily: "Gilroy-ExtraBold",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                    }}>
                    Programme
                  </Text>

                  <input
                    type="text"
                    className="form-control bg-light"
                    id="inputCourse"
                    placeholder="ND FULL TIME"
                  />
                </div>
              </div>
            </Form>
          </div>
          <div className="col-lg-4">
            <Form>
              <div className="form-row">
                <div className="form-group" style={{ marginTop: "40px" }}>
                  <Text
                    style={{
                      fontFamily: "Gilroy-ExtraBold",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                    }}>
                    School
                  </Text>
                  <input
                    type="text"
                    className="form-control bg-light"
                    id="inputCourse"
                    placeholder="SCHOOL OF SCIENCES"
                  />
                </div>
              </div>
            </Form>
          </div>
          <div className="col-lg-4 ">
            <Form>
              <div className="form-row">
                <div className="form-group" style={{ marginTop: "40px" }}>
                  <Text
                    style={{
                      fontFamily: "Gilroy-ExtraBold",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                    }}>
                    Course of Study
                  </Text>
                  <input
                    type="text"
                    className="form-control bg-light"
                    id="inputCourse"
                    placeholder="COMPUTER SCIENCE"
                  />
                </div>
              </div>
            </Form>
          </div>
        </div>

        <div className="mt-5">
          <button
            type="submit"
            className="btn bg-white text-success border border-success">
            <a
              className="submit-link backBtn-link"
              href="documents"
              style={{ textDecoration: "none" }}>
              Previous
            </a>
          </button>
          <button type="submit" className="btn bg-success ml-4" style={{}}>
            <a
              className="submit-link"
              href="acknowledgementSlip.html"
              style={{ textDecoration: "none" }}>
              Submit
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
