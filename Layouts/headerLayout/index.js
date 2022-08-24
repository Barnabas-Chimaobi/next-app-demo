import {
  Breadcrumb,
  Button,
  Dropdown,
  Layout,
  Menu,
  Space,
  Typography,
} from "antd";
import React, { useState } from "react";
import { MenuOutlined, DownOutlined } from "@ant-design/icons";
import { colors } from "../../utils/colors";
const { Header, Content, Footer, Sider } = Layout;
const { Text } = Typography;
const HeaderLayout = (props) => {
  const items = (
    <ul>
      <li>Test 1</li>
      <li>Test 1</li>
      <li>Test 1</li>
    </ul>
  );
  return (
    //     <Header style={{backgroundColor: colors.ashGrayBg}}>
    <div
      className="d-flex justify-content-between"
      style={{ alignItems: "center", paddingBottom: "20px" }}>
      <div
        className="d-flex justify-content-between"
        style={{ alignItems: "center" }}>
        {/* <Button
          onClick={props.close}
          className="d-block d-lg-none d-xl-none"
          style={{
            alignItems: "center",
            background: "transparent",
            border: "none",
          }}> */}
        <div
          className="d-flex"
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
          }}>
          <MenuOutlined
            onClick={props.close}
            className="d-block d-lg-none d-xl-none"
            style={{
              alignItems: "center",
              background: "transparent",
              border: "none",
              fontSize: "20px",
            }}
          />
          {/* </Button> */}
          <Space>
            <img
              src={"../../ilaro-logo.jpeg"}
              className="w-20 w-lg-50"
              style={{ width: "50px", height: "50px", borderRadius: "8px" }}
            />

            <Text
              style={{
                fontSize: "20px",
                letterSpacing: "0px",
                wordSpacing: "-2px",
              }}>
              Federal Polytechnic Ilaro
            </Text>
          </Space>
        </div>
      </div>
      <div className="d-flex align-center">
        <h5
          style={{ fontSize: "20px" }}
          className="text-dark  mt-3 d-none d-lg-block d-xl-block">
          Ibekwe Lilian
        </h5>
        <div className="d-flex">
          <Dropdown overlay={items}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <img
                  className=" ml-2"
                  src={"../../ilaro-logo.jpeg"}
                  style={{
                    width: "59px",
                    height: "59px",
                    borderRadius: "100px",
                    border: "1px solid green",
                  }}
                />
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          {/* <Dropdown>
            <DownOutlined />
          </Dropdown> */}
        </div>
      </div>
    </div>
    //   </Header>
  );
};

export { HeaderLayout };
