import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import { Breadcrumb, Layout, Menu } from 'antd';
  import React, { useState } from 'react';
import { colors } from '../../utils/colors';
  const { Header, Content, Footer, Sider } = Layout;
  
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  
  const items = [
    getItem('Dashboard', '1', <PieChartOutlined />),
    getItem('Applicant', '2', <DesktopOutlined />),
    getItem('Returning Student', 'sub1', <UserOutlined />, [
      getItem('Check Results', '3'),
      getItem('Pay fees', '4'),
      getItem('Check admission status ', '5'),
    ]),
    getItem('Graduate', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Complaints', '9', <FileOutlined />),
    getItem('User Guide', '9', <FileOutlined />),
  ];

  
  const AdminLayout = ({children}) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider className='side-menu' style={{backgroundColor:''}} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="logo" />
          <Menu className='menu' defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
              backgroundColor: colors.ashGrayBg
            }}
          />
          <Content
          className='content'
            style={{
              margin: '0 16px',
            }}
          >
            {/* <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              Bill is a cat.
            </div> */}
            {children}
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  };
  
  export {AdminLayout};
