import React from "react";
import { Button, Form, Input, message, Card, Typography } from 'antd';

const { Title } = Typography;

const Login = () => {
  const [form] = Form.useForm();

  const onFinish = () => {
    message.success('Submit success!');
  };

  const onFinishFailed = () => {
    message.error('Submit failed!');
  };

  return (
    <div className="login">
      <div className="body">
        <Card
          style={{
            width: 600,
            margin: '200px auto',
            borderRadius: '30px',
            background: '#FFF',
            boxShadow: '2px 2px 2px 0px rgba(0, 0, 0, 0.25)',
          }}
        >
          <Title level={2} style={{ textAlign: 'center' }}>Login</Title>
          <br />
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{ height: '180px' }} // Atur tinggi form sesuai kebutuhan Anda
          >
            <Form.Item
              name="username"
              rules={[{ required: true }]}
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true }]}
              style={{ width: '100%' }}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 10,
                span: 20,
                textAlign: 'center',
              }}
            >
              <Button type="primary" htmlType="submit" style={{ backgroundColor: '#606C5D' }}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
