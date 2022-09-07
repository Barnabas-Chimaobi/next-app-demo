import React from 'react';
import { Form } from 'react-bootstrap';
import { Typography } from 'antd';
// const { Option } = Select; 
const {Text} = Typography

export default function documents() {
  return (
    <div>
         <div className="row card col-sm-12 col-lg-12">
            <div className="col-6">
              <Form>
                <h5 className="mt-3">O Level</h5>
                <div className="form-row">
                  <div className="form-group">
                  <Text
                        style={{
                        fontFamily: "Gilroy-ExtraBold",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "20px",
                       
                        
                      }}
                    >
                      First Sitting Result (Scanned Copy)
                    </Text>
                    <input
                      type="file"
                      name="myImage"
                      accept="image/x-png,image/gif,image/jpeg"
                    />
                  </div>
                </div>
              </Form>
            </div>
            <div className="col-6">
              <Form>
                <h5 className="mt-3">O Level</h5>
                <div className="form-row">
                  <div className="form-group">
                  <Text
                        style={{
                        fontFamily: "Gilroy-ExtraBold",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "20px",
                       
                  
                      }}
                    >
                      Second Sitting Result (Scanned Copy)
                    </Text>
                    <input
                      type="file"
                      name="myImage"
                      accept="image/x-png,image/gif,image/jpeg"
                    />
                  </div>
                </div>
              </Form>
            </div>
            <hr />
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <Form>
                  <p>
                    <strong>ND RESULT</strong>
                  </p>
                  <div className="form-row">
                    <div className="form-group">
                    <Text
                        style={{
                        fontFamily: "Gilroy-ExtraBold",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "20px",
                       
                        
                      }}
                    >
                      ND Certificate
                    </Text>
                      <input
                        type="file"
                        name="myImage"
                        accept="image/x-png,image/gif,image/jpeg"
                      />
                    </div>
                  </div>
                </Form>
              </div>
              <div className="col-4">
                <Form>
                  <div className="form-row">
                    <div className="form-group" style={{ marginTop: "40px" }}>
                    <Text
                        style={{
                        fontFamily: "Gilroy-ExtraBold",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "20px",
                      }}
                    >
                      ND Result
                    </Text>
                      <input
                        type="file"
                        name="myImage"
                        accept="image/x-png,image/gif,image/jpeg"
                      />
                    </div>
                  </div>
                </Form>
              </div>
              <div className="col-4">
                <Form>
                  <div className="form-row">
                    <div className="form-group" style={{ marginTop: "40px" }}>
                    <Text
                        style={{
                        fontFamily: "Gilroy-ExtraBold",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "20px",
                      }}
                    >
                      IT Letter Of Completion
                    </Text>
                      <input
                        type="file"
                        name="myImage"
                        accept="image/x-png,image/gif,image/jpeg"
                      />
                    </div>
                  </div>
                </Form>
              </div>
              <div className="mt-5 mb-3">
                <button
                  type="submit"
                  className="btn bg-white text-success border border-success"
                  style={{ width: "100px" }}
                >
                  <a
                    className="submit-link backBtn-link"
                    href="o-level"
                    style={{ textDecoration: "none" }}
                  >
                    Previous
                  </a>
                </button>
                <button
                  type="submit"
                  className="btn bg-success ml-3"
                  style={{ width: "100px" }}
                >
                  <a
                    className="submit-link"
                    href="programme"
                    style={{ textDecoration: "none" }}
                  >
                    Next
                  </a>
                </button>
              </div>
            </div>
          </div>
      
    </div>
  )
}
