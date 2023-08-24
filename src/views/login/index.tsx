import { useState } from "react";
import { Form, Input, Button, Checkbox, Row } from "antd";

export default function Login() {
  const [btnLoad, setBtnLoad] = useState(false);

  return (
    <div className="bg-cover h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="text-xl font-bold mb-4">欢迎使用，请先登录</div>
        <Form
          className="w-72 mx-auto"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item name="account" className="mb-4">
            <Input
              placeholder="账号:admin"
            />
          </Form.Item>
          <Form.Item name="pswd" className="mb-4">
            <Input
              type="password"
              autoComplete="off"
              placeholder="密码:admin123"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住我</Checkbox>
            </Form.Item>
          </Form.Item>
          <Row justify="space-around">
            <Button
              type="primary"
              htmlType="submit"
              className="w-1/3"
              loading={btnLoad}
            >
              登录
            </Button>
            <Button htmlType="reset" className="w-1/3">重置</Button>
          </Row>
        </Form>
      </div>
    </div>
  );
}
