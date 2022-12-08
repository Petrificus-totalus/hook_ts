import React from "react";
import { Button, Row, Card, Col, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const nav = useNavigate();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    nav("/index");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row style={{ marginTop: "100px" }}>
      <Col span={8} offset={8}>
        <Card title="用户登录" extra={<Link to="/">注册</Link>}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="姓名"
              name="name"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                登陆
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
