import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card, message } from 'antd';
import type { FormValueType } from './components/phoneDialog';
import PhoneDialog from './components/phoneDialog'

const BindPhone: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };
  const handleSubmit = async (values: FormValueType) => {
    //step
    console.log('values step2', values)
    await waitTime(2000);
    message.success('提交成功');
    setIsModalVisible(false);
  };


  return (
    <PageContainer>
      <Card>
        <p>现绑定手机号： 131****1111</p>
        <Button onClick={() => { setIsModalVisible(true) }}>更换手机号</Button>
      </Card>
      <PhoneDialog
        isModalVisible={isModalVisible}
        onSubmit={handleSubmit}
        onVisibleChange={setIsModalVisible}
      />
    </PageContainer>
  );
};
export default BindPhone
