import { isObjectType } from "graphql";
import React from "react";
import { Form } from "react-bootstrap";
import { Typography } from "antd";
// const { Option } = Select;
const { Text } = Typography;

export default function education() {
  return (
    <div>
      <div className="row card col-sm-12 col-lg-12">
        <div className="row">
          <div className="col-lg-6">
            <Form>
              <h5 className="mt-3">TERTIARY EDUCATION</h5>
              <div className="form-row">
                <div className="form-group">
                  <Text
                    style={{
                      fontFamily: "Gilroy-ExtraBold",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                    }}>
                    Institution Attended
                  </Text>
                  <Form.Select id="" className="form-control">
                    <option
                      selected
                      style={{
                        fontSize: "16px",
                        color: "rgba(0, 0, 0, 0.7)",
                      }}>
                      -- --SELECT SCHOOL-- --
                    </option>
                    <option>..</option>
                    <option>..</option>
                    <option>..</option>
                    <option>..</option>
                  </Form.Select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-lg-4">
                  <label htmlFor="inputCity"></label>
                  <Text
                    style={{
                      fontFamily: "Gilroy-ExtraBold",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                    }}>
                    Start Date
                  </Text>
                  <Form.Control type="date" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <Text
                    style={{
                      fontFamily: "Gilroy-ExtraBold",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                    }}>
                    Qualification
                  </Text>
                  <Form.Select id="" className="form-control">
                    <option
                      selected
                      style={{
                        fontSize: "16px",
                      }}>
                      SELECT QUALIFICATION
                    </option>
                    <option>..</option>
                    <option>..</option>
                  </Form.Select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <Text
                    style={{
                      fontFamily: "Gilroy-ExtraBold",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                    }}>
                    IT Duration
                  </Text>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCourse"
                  />
                </div>
              </div>
            </Form>
          </div>
          <div className="col-lg-6">
            <Form>
              <h5 className="mt-3">TERTIARY EDUCATION</h5>
              <div className="form-row">
                <div className="form-group">
                  <Text
                    style={{
                      fontFamily: "Gilroy-ExtraBold",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                    }}>
                    Course
                  </Text>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCourse"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <Text
                    style={{
                      fontFamily: "Gilroy-ExtraBold",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                    }}>
                    End Date
                  </Text>
                  <Form.Control type="date" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <Text
                    style={{
                      fontFamily: "Gilroy-ExtraBold",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                    }}>
                    Result Grade
                  </Text>
                  <Form.Select id="" className="form-control">
                    <option
                      selected
                      style={{
                        fontSize: "16px",
                      }}>
                      SELECT GRADE
                    </option>
                    <option>..</option>
                    <option>..</option>
                  </Form.Select>
                </div>
              </div>

              <div className="col-12 bg-light">
                <div className="form-group row">
                  <div className="col-sm-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck1"
                      />
                      <label className="form-check-label" htmlFor="gridCheck1">
                        Did you atend the convocation?
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck1"
                      />
                      <label className="form-check-label" htmlFor="gridCheck1">
                        Have you collected your certificate?
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>

      <div className="mt-3 mb-3">
        <button
          type="submit"
          className="btn bg-white text-success border border-success">
          <a
            className="submit-link backBtn-link"
            href="o-level"
            style={{ textDecoration: "none" }}>
            Previous
          </a>
        </button>
        <button
          type="submit"
          className="btn bg-success ml-5"
          style={{ width: "100px" }}>
          <a
            className="submit-link"
            href="documents"
            style={{ textDecoration: "none" }}>
            Next
          </a>
        </button>
      </div>
    </div>
  );
}
