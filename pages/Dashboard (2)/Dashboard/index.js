import React, { useState } from "react";
import { Layout, Menu, Drawer, Typography, Space } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import DrawerMenu from "./Components/DrawerMenu";
import Navibar from "./Components/navibar";
import { Container } from "react-bootstrap";

const { Sider, Header, Content } = Layout;
const { Text } = Typography;

export default function Index() {
  const [collapsed, setCollapsed] = useState(false);

  //   if (window.innerWidth <= 700) {
  //     setCollapsed(true);
  //   } else {
  //     setCollapsed(false);
  //   }

  const onClose = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div>
      <Layout>
        {/* <Header> */}
        {/* <Text>Make We Bet</Text> */}
        <Navibar close={onClose} />
        {/* </Header> */}
        <Layout>
          <Sider
            collapsedWidth={0}
            collapsed={collapsed}
            // theme="light"
            style={{
              overflow: "auto",
              height: "100vh",
              background: "#E5E5E5",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
              //   position: "fixed",
              left: 0,
              top: 0,
              bottom: 0,
            }}>
            <Container fluid>
              <Space
                alignItems="center"
                justifyContent="center"
                gap={2}
                style={{ backgroundColor: "white" }}>
                <AppstoreOutlined />
                <Text>Dashboard</Text>
              </Space>
              <DrawerMenu />
            </Container>
          </Sider>
          <Content
            style={{
              background: "#E5E5E5",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
            }}></Content>
        </Layout>
      </Layout>
    </div>
  );
}
