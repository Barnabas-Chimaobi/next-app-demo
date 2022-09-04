import { Tabs, Typography, Space } from "antd";
import { BsPersonCircle } from "react-icons/bs";
import {
  HiOutlineDocument,
  HiOutlineDocumentDuplicate,
  HiOutlineLibrary,
} from "react-icons/hi";
import { BiBookOpen } from "react-icons/bi";
import { Card } from "react-bootstrap";
import React from "react";
import Frontlayout from "../../Layouts/FrontLayout/frontlayout";
import NewProgressCard from "./NewProgressCard";
const { TabPane } = Tabs;
const { Text } = Typography;

export default function NewForm() {
  return (
    <Frontlayout>
      <div className="d-block d-lg-flex d-xl-flex">
        <div style={{ margin: "20px" }}>
          <Card
            style={{
              background: "#FFFFFF",
              boxShadow:
                "0px 60px 147px rgba(0, 0, 0, 0.035), 0px 7.51293px 18.4067px rgba(0, 0, 0, 0.07)",
              borderRadius: "10px",
              border: "none",
              padding: "54px",
            }}>
            <Tabs defaultActiveKey="1">
              <TabPane
                tab={
                  <Space>
                    <BsPersonCircle style={{ color: "#047735" }} />
                    <Text
                      style={{
                        fontSize: "12px",
                        lineHeight: "14px",

                        color: "#047735",
                      }}>
                      Personal Details
                    </Text>
                  </Space>
                }
                key="1">
                Content of Tab Pane 1
              </TabPane>

              <TabPane
                tab={
                  <Space>
                    <HiOutlineDocument style={{ color: "#047735" }} />
                    <Text
                      style={{
                        fontSize: "12px",
                        lineHeight: "14px",

                        color: "#047735",
                      }}>
                      O’Level
                    </Text>
                  </Space>
                }
                key="2">
                Content of Tab Pane 2
              </TabPane>

              <TabPane
                tab={
                  <Space>
                    <HiOutlineLibrary style={{ color: "#047735" }} />
                    <Text
                      style={{
                        fontSize: "12px",
                        lineHeight: "14px",

                        color: "#047735",
                      }}>
                      Education
                    </Text>
                  </Space>
                }
                key="3">
                Content of Tab Pane 3
              </TabPane>

              <TabPane
                tab={
                  <Space>
                    <HiOutlineDocumentDuplicate style={{ color: "#047735" }} />
                    <Text
                      style={{
                        fontSize: "12px",
                        lineHeight: "14px",

                        color: "#047735",
                      }}>
                      Documents
                    </Text>
                  </Space>
                }
                key="4">
                Content of Tab Pane 1
              </TabPane>

              <TabPane
                tab={
                  <Space>
                    <BiBookOpen style={{ color: "#047735" }} />
                    <Text
                      style={{
                        fontSize: "12px",
                        lineHeight: "14px",

                        color: "#047735",
                      }}>
                      Programme
                    </Text>
                  </Space>
                }
                key="5">
                Content of Tab Pane 1
              </TabPane>
            </Tabs>
          </Card>
        </div>
        <NewProgressCard />
      </div>
    </Frontlayout>
  );
}
