import React from "react";
import { Form } from "react-bootstrap";
import { Typography } from "antd";
// const { Option } = Select;
const { Text } = Typography;

export default function olevel(props) {
  return (
    <div>
      <div className="row card col-sm-12 col-lg-12  pb-4 pt-4">
        <div className="row">
          <div className="col-lg-6">
            <Form>
              <h4>FIRST SITTING</h4>
              <div className="form-row">
                <div className="form-group">
                  <Text
                    style={{
                      fontFamily: "Gilroy-ExtraBold",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                    }}>
                    Type
                  </Text>
                  <Form.Select
                    id=""
                    className="form-control"
                    onChange={props.oleveltype}>
                    <option
                      selected
                      style={{
                        fontSize: "16px",
                      }}>
                      SELECT EXAM TYPE
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
                    Exam No.
                  </Text>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCourse"
                    onChange={props.examNumber}
                  />
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
                    Exam Year
                  </Text>
                  <Form.Select
                    id=""
                    className="form-control"
                    onChange={props.examYear}>
                    <option
                      selected
                      style={{
                        fontSize: "16px",
                      }}>
                      SELECT YEAR
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
                    Scratch Card Pin
                  </Text>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCourse"
                    onChange={props.scratchcard}
                  />
                </div>
              </div>
            </Form>
          </div>
          <div className="col-lg-6">
            <Form>
              <h4>FIRST SITTING</h4>
              <div className="form-row">
                <div className="form-group">
                  <Text
                    style={{
                      fontFamily: "Gilroy-ExtraBold",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                    }}>
                    Type
                  </Text>
                  <Form.Select id="" className="form-control">
                    <option
                      selected
                      style={{
                        fontSize: "16px",
                      }}>
                      SELECT EXAM TYPE
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
                    Exam No.
                  </Text>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCourse"
                  />
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
                    Exam Year
                  </Text>
                  <Form.Select id="" className="form-control">
                    <option
                      selected
                      style={{
                        fontSize: "16px",
                      }}>
                      SELECT EXAM YEAR
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
                    Scratch Card Pin
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
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 bg-light">
                <div className="row">
                  <div className="col-lg-6">
                    <Form>
                      <p>
                        <strong>Subject</strong>
                      </p>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                    </Form>
                  </div>
                  <div className="col-lg-6">
                    <Form>
                      <p>
                        <strong>Grade</strong>
                      </p>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn bg-white text-success border border-success">
                  <a
                    className="submit-link backBtn-link"
                    href="personalDetails"
                    style={{ textDecoration: "none" }}>
                    Previous
                  </a>
                </button>
              </div>
              <div className="col-lg-6 bg-light">
                <div className="row">
                  <div className="col-lg-6">
                    <Form className>
                      <p>
                        <strong>Subject</strong>
                      </p>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                    </Form>
                  </div>
                  <div className="col-lg-6">
                    <Form>
                      <p>
                        <strong>Grade</strong>
                      </p>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <Form.Select id="" className="form-control">
                            <option
                              selected
                              style={{
                                fontSize: "16px",
                              }}>
                              SELECT
                            </option>
                            <option>..</option>
                            <option>..</option>
                          </Form.Select>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn bg-success"
                  style={{ width: "100px" }}>
                  <a
                    className="submit-link"
                    href="education"
                    style={{ textDecoration: "none" }}>
                    Next
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
