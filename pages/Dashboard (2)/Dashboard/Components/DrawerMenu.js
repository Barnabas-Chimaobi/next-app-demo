import { Menu, Dropdown, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";

const { Text } = Typography;

export default function DrawerMenu() {
  const items = [
    { label: <a href="#">Users Management</a>, icon: <UserOutlined /> },
    { label: <a href="#">Brands Management</a>, icon: <UserOutlined /> },
    { label: <a href="#">Bets Management</a>, icon: <UserOutlined /> },
    { label: <a href="#">Events Management</a>, icon: <UserOutlined /> },
  ];
  const item2 = [
    { label: <a href="#">Badges</a>, icon: <UserOutlined /> },
    { label: <a href="#">Bet Categories</a>, icon: <UserOutlined /> },
    { label: <a href="#">Settings</a>, icon: <UserOutlined /> },
    { label: <a href="#">Role Manager</a>, icon: <UserOutlined /> },
    { label: <a href="#">Support</a>, icon: <UserOutlined /> },
  ];

  const menu1 = (
    <Menu
      items={item2}
      style={{
        backgroundColor: "#E5E5E5",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
      }}
    />
  );

  const menu2 = (
    <Menu
      items={items}
      style={{
        backgroundColor: "#E5E5E5",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
      }}
    />
  );

  return (
    <div>
      {/* <Dropdown overlay={menu1}>click me</Dropdown>
      <Dropdown overlay={menu2}>click me</Dropdown> */}
      <Text>MANAGEMENT</Text>
      <Menu
        items={item2}
        style={{
          backgroundColor: "transparent",
          //   boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          //   backdropFilter: "blur(5px)",
          border: "none",
        }}
      />
      <Text>ADMINISTRATION</Text>
      <Menu
        items={items}
        style={{
          backgroundColor: "transparent",
          border: "none",
          //   boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          //   backdropFilter: "blur(5px)",
        }}
      />
    </div>
  );
}
