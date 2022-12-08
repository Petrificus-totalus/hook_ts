import React, { FC } from "react";
import { Layout, Space } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const PageHeader: FC = () => {
  return (
    <Header>
      <Space>
        <Link to="/index">首页</Link>
        <Link to="/book">图书列表</Link>
        <Link to="/user">用户</Link>
        <Link to="/login">登陆</Link>
      </Space>
    </Header>
  );
};
export default PageHeader;
