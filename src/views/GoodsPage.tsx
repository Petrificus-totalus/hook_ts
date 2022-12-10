import { Link, Outlet } from "react-router-dom";
import React, { FC } from "react";
import { Card, Col, Row, Menu } from "antd";

const item = [
  {
    label: <Link to="/goods">商品列表</Link>,
    key: "/goods",
  },
  {
    label: <Link to="/goods/sale">商品销售</Link>,
    key: "/goodssale",
  },
];
const GoodsPage: FC = () => {
  return (
    <Row>
      <Col span={20} offset={2}>
        <Row>
          <Col span={6}>
            <Card title="商品管理">
              <Menu items={item}></Menu>
            </Card>
          </Col>
          <Col span={18}>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default GoodsPage;
