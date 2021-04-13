import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card, message } from 'antd';
import type { FormValueType } from './components/PwdDialog';
import PwdDialog from './components/PwdDialog'

const BindPwd: React.FC = () => {
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
        <p>设置新密码</p>
        <Button onClick={() => { setIsModalVisible(true) }}>修改密码</Button>
      </Card>
      <PwdDialog
        isModalVisible={isModalVisible}
        onSubmit={handleSubmit}
        onVisibleChange={setIsModalVisible}
      />
    </PageContainer>
  );
};
export default BindPwd
