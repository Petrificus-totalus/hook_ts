import React, { FC, useEffect, useState } from "react";
import { Card, Col, Row, Table } from "antd";

const UserPage: FC = () => {
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "用户名",
      dataIndex: "username",
      key: "username",
    },
  ];
  const [userData, setuserData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setuserData(data);
      });
  }, []);
  return (
    <Row>
      <Col span={20} offset={2}>
        <Card title="图书列表">
          <Table dataSource={userData} columns={columns} rowKey="id" />;
        </Card>
      </Col>
    </Row>
  );
};
export default UserPage;
