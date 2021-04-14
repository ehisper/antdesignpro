import React, { useEffect, useRef, useState } from 'react';
import { message, Button, Card, DatePicker, Input, Form, Upload, InputNumber, Radio, Select, Tooltip } from 'antd';
import { MobileOutlined, MailOutlined, UploadOutlined, LoadingOutlined, PlusOutlined, ExclamationCircleTwoTone, LockOutlined } from '@ant-design/icons';
import ProForm, {
  ProFormText,
  ProFormCaptcha
} from '@ant-design/pro-form';
import type { FormInstance } from 'antd';
import { Link, useModel, history } from 'umi';

const FormItem = Form.Item;
export type FormValueType = {
  realName?: string;
  idNum?: string;
  phone?: string;
  captcha?: string;
  idImg?: any;
} & Partial<API.RuleListItem>;
export type AuthPProps = {
  onSubmit: (values: FormValueType) => Promise<void>;
  onChangePhone: () => void;
  phone: string;
};
const AuthPerson: React.FC<AuthPProps> = (props) => {
  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 7 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
      md: { span: 10 },
    },
  };
  const formRef = useRef<FormInstance>();
  const [step, setStep] = useState(1);
  const [initPhone, setInitPhone] = useState<string>('')
  const [imgUrl, setImgUrl] = useState('')
  const [uploadLoading, setUploadLoading] = useState(false)
  const submitting = false
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  const uploadProps = {
    name: 'file',
    listType: "picture-card",
    className: "idImgUploader",
    showUploadList: false,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        setUploadLoading(true)
        console.log('fileChange', info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        getBase64(info.file.originFileObj, imageUrl => {
          setImgUrl(imageUrl)
          setUploadLoading(false)
        }
        );
        message.success(`${info.file.name} 文件上传成功`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 文件上传失败.`);
      }
    },
    beforeUpload: (file) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
      }
      return isJpgOrPng && isLt2M;
    },

  };

  const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };

  const onFinish = async (values: FormValueType) => {
    props.onSubmit(values)
  };

  const onFinishFailed = (errorInfo: any) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };

  const onValuesChange = (changedValues) => {
    console.log('onValuesChange:', onValuesChange);

  };
  const onChangeBindPhone = () => {
    history.push('/userinfo/b');
  };
  const uploadButton = (
    <div>
      {uploadLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>上传</div>
    </div>
  );
  return (
    <Form
      {...formItemLayout}
      style={{ marginTop: 8 }}
      form={form}
      name="basic"
      initialValues={{
        phone: props.phone,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onValuesChange={onValuesChange}
      size="large"
    >
      <FormItem
        name="realName"
        label="真实姓名"
        rules={[
          {
            required: true,
            message: '真实姓名是必填项！',
          },
          {
            pattern: /[\u4e00-\u9fa5]{2,7}/,
            message: '请输入正确的姓名！',
          },
        ]}
      >
        <Input placeholder="" />
      </FormItem>
      <FormItem
        name="idNum"
        label="身份证号"
        rules={[
          {
            required: true,
            message: '身份证号是必填项！',
          },
          {
            pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
            message: '请输入正确的身份证号！',
          },
        ]}
      >
        <Input placeholder="" />
      </FormItem>
      <FormItem
        label="手机号">
        <FormItem
          name="phone"
          noStyle
          rules={[
            {
              required: true,
              message: '手机号是必填项！',
            },
          ]}
        >
          <Input style={{ width: '82%' }} placeholder="" disabled />
        </FormItem>
        <Button style={{ width: '18%' }} type="primary" onClick={onChangeBindPhone}>修改绑定</Button>
      </FormItem>
      <Form.Item label="验证码" shouldUpdate>
        {(form) => {
          return (
            <ProFormCaptcha
              phoneName="phone"
              name="captcha"
              label=""
              placeholder=""
              rules={[
                {
                  required: true,
                  message: '请输入验证码',
                },
                {
                  pattern: /^\d{6}$/,
                  message: '请输入正确的验证码！',
                },
              ]}
              fieldProps={{
                size: 'large',
                prefix: <MailOutlined />,
              }}
              captchaProps={{
                size: 'large',
                type: "primary"
              }}
              onGetCaptcha={async (phone) => {
                await waitTime(1000);
                message.success(`手机号 ${phone} 验证码发送成功!`);
              }}
            />
          );
        }}
      </Form.Item>
      <FormItem
        name="idImg"
        label="手持身份证人脸照片"
        rules={[
          {
            required: true,
            message: '请上传手持身份证人脸照片！',
          }
        ]}
      >
        <Upload {...uploadProps}>
          {imgUrl ? <img src={imgUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
        </Upload>
      </FormItem>
      <FormItem
        wrapperCol={{ ...formItemLayout.wrapperCol, offset: 8 }}
        style={{ marginTop: 32 }}>
        <Button type="primary" htmlType="submit" loading={submitting}>提交认证信息</Button>
      </FormItem>
    </Form>

  );
};

export default AuthPerson;