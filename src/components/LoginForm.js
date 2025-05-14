import React from "react";
import { Form, Input, Button, Checkbox, Typography, Flex } from "antd";
import { useNavigate } from "react-router-dom";
import { MainContext } from "./MainContext";
const { Title } = Typography;

const LoginForm = ({ onClose }) => {
  const navigate = useNavigate();
  const { loggedUser, setLoggedUser } = React.useContext(MainContext);

  const onFinish = (values) => {
    localStorage.setItem("loggedUser", JSON.stringify(values.username));
    setLoggedUser(values.username);
    navigate("/dashboard")
    onClose()
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Login Failed:", errorInfo);
  };

  const handleLogout = () => {
    // Clear user data from localStorage and state
    localStorage.removeItem("loggedUser");
    setLoggedUser(null);
    navigate("/")
    onClose()
  };

  return (
    <Flex align="center" justify="center">
      {loggedUser ? (
        <div>
          <Title level={3}>Гарахдаа итгэлтэй байна уу?</Title>
          <Button type="primary" onClick={handleLogout}>
            Тийм
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
            label="Нэвтрэх нэр"
            name="username"
            rules={[{ required: true, message: "Нэвтрэх нэрийг оруулна уу!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Нууц үг"
            name="password"
            rules={[{ required: true, message: "Нууц үгийг оруулна уу!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Сануулах</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Нэвтрэх
            </Button>
          </Form.Item>
        </Form>
      )}
    </Flex>
  );
};

export default LoginForm;