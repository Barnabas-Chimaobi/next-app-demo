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
import { HeaderLayout } from '../headerLayout';
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
    getItem(<a href="#">Dashboard</a>, '1', <PieChartOutlined />),
    getItem(<a style={{color: 'white'}} href="#">Applicant</a> , '2', <DesktopOutlined />),
    getItem(<a  style={{color: 'white'}} href="#">Returning Student</a>, 'sub1', <UserOutlined />, [
      getItem(<a style={{color: 'white'}} href="#">Check Results</a> , '3'),
      getItem(<a style={{color: 'white'}} href="#">Pay fees</a>, '4'),
      getItem(<a style={{color: 'white'}} href="#">Check admission status</a>, '5'),
    ]),
    getItem(<a style={{color: 'white'}} href="#">Graduate</a>, 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem(<a style={{color: 'white'}} href="#">Complaints</a>, '9', <FileOutlined />),
    getItem(<a style={{color: 'white'}} href="#">User Guide</a>, '9', <FileOutlined />),
  ];

  
  const AdminLayout = ({children}) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider className='side-menu' style={{minHeight: '100vh'}} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="logo" />
          <Menu className='menu' defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout className="site-layout">
          <HeaderLayout/>
          <Content
          className='content'
            style={{
              margin: '0 16px',
              backgroundColor: colors.ashGrayBg
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
