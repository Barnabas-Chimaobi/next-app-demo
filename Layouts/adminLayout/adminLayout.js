import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  HomeOutlined,
  // UserOutlined,
} from "@ant-design/icons";
import { FaSchool } from "react-icons/fa";
import { Breadcrumb, Divider, Layout, Menu, Space, Typography } from "antd";
import React, { useState } from "react";
import { colors } from "../../utils/colors";
import { HeaderLayout } from "../headerLayout";
import NewHeader from "../NewHeaderLayout";
import Link from "next/link";
const { Header, Content, Footer, Sider } = Layout;
const { Text } = Typography;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

// const items = [
//   getItem(<a href="#">Dashboard</a>, "1", <PieChartOutlined />),
//   getItem(
//     <a style={{ color: "white" }} href="#">
//       Applicant
//     </a>,
//     "2",
//     <DesktopOutlined />
//   ),
//   getItem(
//     <a style={{ color: "white" }} href="#">
//       Returning Student
//     </a>,
//     "sub1",
//     <UserOutlined />,
//     [
//       getItem(
//         <a style={{ color: "white" }} href="#">
//           Check Results
//         </a>,
//         "3"
//       ),
//       getItem(
//         <a style={{ color: "white" }} href="#">
//           Pay fees
//         </a>,
//         "4"
//       ),
//       getItem(
//         <a style={{ color: "white" }} href="#">
//           Check admission status
//         </a>,
//         "5"
//       ),
//     ]
//   ),
//   getItem(
//     <a style={{ color: "white" }} href="#">
//       Graduate
//     </a>,
//     "sub2",
//     <TeamOutlined />,
//     [getItem("Team 1", "6"), getItem("Team 2", "8")]
//   ),
//   getItem(
//     <a style={{ color: "white" }} href="#">
//       Complaints
//     </a>,
//     "9",
//     <FileOutlined />
//   ),
//   getItem(
//     <a style={{ color: "white" }} href="#">
//       User Guide
//     </a>,
//     "9",
//     <FileOutlined />
//   ),
// ];

const items = [
  {
    label: (
      <Link href="#" style={{ fontSize: "12px", color: "#FFFFFF" }}>
        {/* <Text style={{ color: "white" }}> */}
        Admin Setting
        {/* </Text> */}
      </Link>
    ),
    icon: <HomeOutlined width={25} height={19.44} />,
  },
  {
    label: (
      <Link
        href="#"
        color="white"
        style={{ fontSize: "12px", color: "#FFFFFF" }}>
        {/* <Text style={{ color: "white" }}> */}
        Admission
        {/* </Text> */}
      </Link>
    ),
    icon: <UserOutlined width={25} height={19.44} />,
  },
  {
    label: (
      <Link
        href="/admin/reportSetup"
        style={{ fontSize: "12px", color: "#FFFFFF" }}>
        {/* <Text style={{ color: "white" }}> */}
        Report Setup
        {/* </Text> */}
      </Link>
    ),
    icon: <TeamOutlined width={25} height={19.44} />,
  },
  {
    label: (
      <Link
        href="/admin/schoolSetUp"
        style={{ fontSize: "12px", color: "white" }}>
        {/* <Text style={{ color: "white" }}> */}
        School Setup
        {/* </Text> */}
      </Link>
    ),
    icon: <FaSchool width={25} height={19.44} />,
  },
];

const AdminLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [collapsible, setCollapsible] = useState(false);

  const Dashboardimg = require("../../Images/Dashvector.png");

  const onClose = () => {
    setCollapsed(!collapsed);
    setCollapsible(!collapsible);
  };
  return (
    <Layout
      style={
        {
          // minHeight: "100vh",
        }
      }>
      <Sider
        className="side-menu"
        style={{
          // position: "fixed",
          minHeight: "100vh",
          // width: 100,
        }}
        collapsible={collapsible}
        breakpoint="lg"
        trigger={null}
        collapsedWidth={0}
        collapsed={collapsed}
        width="230px"
        onCollapse={(value) => setCollapsed(value)}>
        <div className="container">
          <Space style={{ padding: "12px" }}>
            <img src="../../vector.png" width={22} height={20} />
            <Text style={{ fontSize: "18px", color: "#FFFFFF" }}>
              Dashboard
            </Text>
          </Space>
          <Divider
            width={200}
            style={{
              border: "1px solid #12984B",
            }}
          />
          <Menu
            className="menu"
            // defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </div>
      </Sider>
      <Layout className="site-layout">
        {/* <Header
          style={{
            backgroundColor: colors.ashGrayBg,
            marginBottom: "10px",
            paddingBottom: "30px",
          }}> */}
        {/* <HeaderLayout close={onClose} /> */}
        <NewHeader close={onClose} />
        {/* </Header> */}
        <Content
          // className="content"
          style={{
            // margin: "0 16px",
            backgroundColor: colors.ashGrayBg,
          }}>
          {children}
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export { AdminLayout };
