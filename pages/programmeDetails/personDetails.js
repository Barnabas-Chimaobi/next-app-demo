import React from 'react';
import { Form } from 'react-bootstrap';
import { Typography } from 'antd';
// const { Option } = Select; 
const {Text} = Typography

export default function personDetails() {
  return (
    <div>
        <div className="card col-lg-12 col-sm-12  pb-4 pt-4">
            <Form>
              <h5>
                <strong>BIO DATA</strong>
              </h5>
              <div className="form-row">
                <div className="form-group col-lg-6">
                  <Text
                      style={{
                        fontFamily: "Gilroy-ExtraBold",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "20px",
                      }}
                    >
                      Surname
                    </Text>
                  <input
                    type="text"
                    className="form-control bg-light"
                    id="inputSurname"
                    placeholder="ADELEKE"
                  />
                </div>
                <div className="form-group col-lg-6 col-sm-6">
                  <Text
                      style={{
                        fontFamily: "Gilroy-ExtraBold",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "20px",
                      }}
                    >
                      First Name
                    </Text>
                  <input
                    type="text"
                    className="form-control bg-light"
                    id="inputCourse"
                    placeholder="DEBORAH"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-lg-6 col-sm-6">
                  <Text
                      style={{
                        fontFamily: "Gilroy-ExtraBold",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "20px",
                      }}
                    >
                      Other Name
                    </Text>
                  <input
                    type="text"
                    className="form-control bg-light"
                    id="inputOtherName"
                  />
                </div>
                <div className="form-group col-lg-6 col-sm-6">
                  <Text
                      style={{
                        fontFamily: "Gilroy-ExtraBold",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "20px",
                      }}
                    >
                      Sex
                  </Text>
                  <Form.Select
                        id=""
                        className="form-control"
                        >
                        <option
                          selected
                          style={{
                            fontSize: "16px",
                            
                          }}>
                          -- --SELECT SEX-- --
                        </option>
                        <option>Male</option>
                        <option>Female</option>
                  </Form.Select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-lg-6 col-sm-6">
                  <Text
                      style={{
                        fontFamily: "Gilroy-ExtraBold",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "20px",
                      }}
                    >
                      Mobile Phone
                  </Text>
                  <input
                    type="number"
                    className="form-control bg-light"
                    id="inputPhone"
                    placeholder="09098897890"
                  />
                </div>
                <div className="form-group col_lg-6 col-sm-6">
                  <Text
                      style={{
                        fontFamily: "Gilroy-ExtraBold",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "20px",
                      }}
                    >
                      Email
                  </Text>
                  <input
                    type="email"
                    className="form-control bg-light"
                    id="inputEmail"
                    placeholder="adelekeifeoluwa@gmail.com"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-lg-6 col-sm-6">
                  <Text
                      style={{
                        fontFamily: "Gilroy-ExtraBold",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "20px",
                      }}
                    >
                      State Of Origin
                  </Text>
                  <input
                    type="text"
                    className="form-control bg-light"
                    id="inputState"
                    placeholder="EKITI"
                  />
                </div>
                <div className="form-group col-lg-6 col-sm-6">
                  <Text
                      style={{
                        fontFamily: "Gilroy-ExtraBold",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "20px",
                      }}
                    >
                      Hometown
                  </Text>
                  <input
                    type="text"
                    className="form-control"
                    id="inputHometown"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-lg-6 col-sm-6">
                  <Text
                      style={{
                        fontFamily: "Gilroy-ExtraBold",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "20px",
                      }}
                    >
                      Local Government Area
                  </Text>
                  <input type="text" className="form-control" id="inputState" />
                </div>
                <div className="form-group col-lg-6 col-sm-6">
                  <Text
                      style={{
                        fontFamily: "Gilroy-ExtraBold",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "20px",
                      }}
                    >
                      Date Of Birth
                  </Text>
                  <input type="text" className="form-control" id="inputState" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-lg-6 col-sm-6">
                  <Text
                        style={{
                        fontFamily: "Gilroy-ExtraBold",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "20px",
                      }}
                    >
                      Religion
                  </Text>
                  <Form.Select
                        id=""
                        className="form-control"
                        >
                        <option
                          selected
                          style={{
                            fontSize: "16px",
                            
                          }}>
                          -- --Select Religion-- --
                        </option>
                        <option>Chritianity</option>
                        <option>Islam</option>
                  </Form.Select>
                </div>
                <div className="form-group col-lg-6 col-sm-6">
                  <Text
                        style={{
                        fontFamily: "Gilroy-ExtraBold",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "20px",
                      }}
                    >
                      Permanent Address
                  </Text>
                  <input
                    type="text"
                    className="form-control"
                    id="inputOtherName"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-lg-6 col-sm-6">
                  <label htmlFor="inputSex">Disability</label>
                  <Text
                        style={{
                        fontFamily: "Gilroy-ExtraBold",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "20px",
                      }}
                    >
                      Disability
                  </Text>
                  <Form.Select
                        id=""
                        className="form-control"
                        >
                        <option
                          selected
                          style={{
                            fontSize: "16px",
                            
                          }}>
                          None
                        </option>
                        <option>..</option>
                        <option>..</option>
                  </Form.Select>
                </div>
                <div className="form-group col-lg-6 col-sm-6">
                  <Text
                        style={{
                        fontFamily: "Gilroy-ExtraBold",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "20px",
                      }}
                    >
                      If Others, specify
                  </Text>
                  <input
                    type="text"
                    className="form-control"
                    id="inputOtherName"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-lg-6 col-sm-6">
                  <Text
                        style={{
                        fontFamily: "Gilroy-ExtraBold",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "20px",
                      }}
                    >
                     Extra Curricular Activities e.g Sports
                  </Text>
                  <input
                    type="text"
                    className="form-control"
                    id="inputOtherName"
                  />
                </div>
                <div className="form-group col-lg-6 col-sm-6">
                  <Text
                        style={{
                        fontFamily: "Gilroy-ExtraBold",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "20px",
                      }}
                    >
                      Upload Passport (click below to select a passport photo)
                  </Text>
                  <input
                    type="file"
                    name="myImage"
                    accept="image/x-png,image/gif,image/jpeg"
                  />
                </div>
              </div>
              <h5>
                <strong>NEXT OF KIN</strong>
              </h5>
              <div className="form-row">
                <div className="form-group col-lg-6 col-sm-6">
                  <label htmlFor="inputSurname">Next of Kin Name</label>
                  <Text
                        style={{
                        fontFamily: "Gilroy-ExtraBold",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "20px",
                      }}
                    >
                      Next of Kin Name
                  </Text>
                  <input
                    type="text"
                    className="form-control"
                    id="inputSurname"
                  />
                </div>
                <div className="form-group col-lg-6 col-sm-6">
                  <Text
                        style={{
                        fontFamily: "Gilroy-ExtraBold",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "20px",
                      }}
                    >
                     Address
                  </Text>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCourse"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-lg-6 col-sm-6">
                  <label htmlFor="inputSex">Relationship</label>
                  <Text
                        style={{
                        fontFamily: "Gilroy-ExtraBold",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "20px",
                      }}
                    >
                     Relationship
                  </Text>
                  
                  <Form.Select
                        id=""
                        className="form-control"
                        >
                        <option
                          selected
                          style={{
                            fontSize: "16px",
                            
                          }}>
                          Select Relationship
                        </option>
                        <option>..</option>
                        <option>..</option>
                  </Form.Select>
                </div>
                <div className="form-group col-lg-6 col-sm-6">
                  <Text
                        style={{
                        fontFamily: "Gilroy-ExtraBold",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "20px",
                      }}
                    >
                     Mobile Phone
                  </Text>
                  <input
                    type="text"
                    className="form-control"
                    id="inputOtherName"
                  />
                </div>
              </div>
              {/* Buttons */}
              <button type="submit" className="btn bg-success">
                <a className="submit-link" href="o-level">
                  Next
                </a>
              </button>
            </Form>
          </div>
      
    </div>
  )
}
