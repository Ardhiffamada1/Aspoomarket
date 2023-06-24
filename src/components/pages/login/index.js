import React from "react";
import { Button, Form, Input, message, Card, Typography} from 'antd';


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
            <Card style={{ width: 500, margin: '200px auto' }}>
            <Title level={2} style={{ textAlign: 'center' }}>Login</Title>
            <br></br>
              <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
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
                <Input placeholder="Password" />
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
    )
}

export default Login;
