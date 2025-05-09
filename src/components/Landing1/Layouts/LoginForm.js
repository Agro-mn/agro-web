import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Typography, Flex } from "antd";

const { Title } = Typography;

const LoginForm = ({ onChangeLogin }) => {

  const [user, setUser] = useState(() => {
    return localStorage.getItem("loggedUser");
  });

  const onFinish = (values) => {
    localStorage.setItem("loggedUser", JSON.stringify(values.username));
    setUser(values.username);
    onChangeLogin();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Login Failed:", errorInfo);
  };

  const handleLogout = () => {
    // Clear user data from localStorage and state
    localStorage.removeItem("loggedUser");
    setUser(null);
    onChangeLogin();
  };

  return (
    <Flex align="center" justify="center">
      {user ? (
        <div>
          <Title level={3}>Welcome back, {user}!</Title>
          <Button type="primary" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      ) : (
        <Form
          name="login"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      )}
    </Flex>
  );
};

export default LoginForm;