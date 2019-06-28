import React from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import App from './components/App';
import TablePage from './pages/TablePage';

const NavbarHead = () => {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout className="layout">
      <BrowserRouter>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
            <Menu.Item key="1">
              <Link to="/">HOME</Link>{' '}
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/tablePage">TABLEDATA</Link>
            </Menu.Item>
            <Menu.Item key="3">ADD USER</Menu.Item>
          </Menu>
        </Header>
        <Content>
          <Route path="/" exact render={(props) => <App {...props} />} />
          <Route path="/tablePage" component={(props) => <TablePage {...props} />} />
        </Content>
      </BrowserRouter>
      <Footer style={{ textAlign: 'center' }}>Layout Design ©2019 Created by Ritesh Nemade</Footer>
    </Layout>
  );
};

export default NavbarHead;
