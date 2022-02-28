import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const items = [
  {
    key: "1",
    type: "text",
    name: "fullname",
    placeholder: "Full name",
    message: "Please input your full name!",
    obj: Input,
  },
  {
    key: "2",
    type: "email",
    name: "email",
    placeholder: "Email Address",
    message: "Please input your email!",
    obj: Input,
  },
  {
    key: "3",
    type: "tel",
    name: "telephone",
    placeholder: "Telehpone",
    message: "Please input your Telehpone!",
    obj: Input,
  },
  {
    key: "4",
    type: "text",
    name: "subject",
    placeholder: "Subject",
    message: "Please input your subject!",
    obj: Input,
  },
  {
    key: "5",
    type: "text",
    name: "message",
    placeholder: "Message",
    message: "Please input your message!",
    obj: TextArea,
  },
];

function AppContact() {
  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h1>Get in Touch</h1>
          <p>Dolore nam rerum obcaecati fugit odio nobis Molestiae rerum</p>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          {items.map((item) => {
            return (
              <Form.Item
                key={item.key}
                name={item.name}
                rules={[{ required: true, message: item.message }]}
              >
                <item.obj placeholder={item.placeholder} />
              </Form.Item>
            );
          })}

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
          >
            <Checkbox>I agree with terms and conditions.</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AppContact;
