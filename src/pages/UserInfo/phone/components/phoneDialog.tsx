import React, { useEffect, useRef, useState } from 'react';
import { Modal, Button, message } from 'antd';
import { MobileOutlined, MailOutlined, ExclamationCircleTwoTone } from '@ant-design/icons';
import {
  ModalForm,
  ProFormText,
  ProFormCaptcha
} from '@ant-design/pro-form';
import type { FormInstance } from 'antd';
import styles from '../index.less';
export type FormValueType = {
  phone?: string;
  captcha?: string;
} & Partial<API.RuleListItem>;
export type PhoneDialogProps = {
  isModalVisible: boolean;
  onSubmit: (values: FormValueType) => Promise<void>;
  onVisibleChange: (flag: boolean) => void;
  // step: number;
};
const PhoneDialog: React.FC<PhoneDialogProps> = (props) => {
  const formRef = useRef<FormInstance>();
  const [step, setStep] = useState(1);
  const [initPhone, setInitPhone] = useState<string>('17722222222')
  useEffect(() => {
    setInitPhone('17711111111')
  }, [props.isModalVisible])
  const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };
  return (
    <ModalForm title="安全验证" visible={props.isModalVisible}
      formRef={formRef}
      width={500}
      onFinish={async (values: FormValueType) => {
        if (step === 1) {
          console.log('values step1', values)
          formRef.current?.resetFields();
          formRef.current?.setFieldsValue({
            phone: '',
          });
          setStep(2)
        } else {
          props.onSubmit(values)
        }
      }}
      onVisibleChange={(flag: boolean) => props.onVisibleChange(flag)}
      submitter={{
        searchConfig: {
          submitText: '确认',
        },
        render: (_, dom) => dom.pop(),
        submitButtonProps: {
          size: 'large',
          style: {
            width: '100%',
            textAlign: 'center'
          },
        },
      }}
      initialValues={{
        phone: initPhone,
      }}
      onValuesChange={(changeValues) => console.log('onValueChange', changeValues)}
    >
      {step === 1 ? (
        <div className={styles.phoneDialogTip}><ExclamationCircleTwoTone twoToneColor="#E7A543" /> 为保证账号安全，该操作需验证身份</div>
      ) : (<div className={styles.phoneDialogTip}>平台需要对新手机号进行验证</div>)}
      <ProFormText
        fieldProps={{
          size: 'large',
          prefix: <MobileOutlined />,
          disabled: step === 1
        }}
        name="phone"
        placeholder="请输入手机号"
        rules={[
          {
            required: true,
            message: '请输入手机号!',
          },
          {
            pattern: /^1\d{10}$/,
            message: '不合法的手机号格式!',
          },
        ]}
      />
      <ProFormCaptcha
        fieldProps={{
          size: 'large',
          prefix: <MailOutlined />,
        }}
        captchaProps={{
          size: 'large',
        }}
        phoneName="phone"
        name="captcha"
        rules={[
          {
            required: true,
            message: '请输入验证码',
          },
        ]}
        placeholder="请输入验证码"
        onGetCaptcha={async (phone) => {
          await waitTime(1000);
          message.success(`手机号 ${phone} 验证码发送成功!`);
        }}
      />
    </ModalForm>
  );
};

export default PhoneDialog;
