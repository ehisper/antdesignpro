import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { EllipsisOutlined, SettingOutlined, EditOutlined, CheckCircleTwoTone, WarningOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Card, Avatar, Row, Col } from 'antd';

import { Link, useModel, history } from 'umi';
import PhoneDialog from './components/PhoneDialog'

const { Meta } = Card;
import styles from './index.less';

const UserInfo: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleOk = () => {
    setIsModalVisible(false);
    history.push('/userinfo/e');
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleClickChange = () => {
    setIsModalVisible(true);
  }

  return (
    <PageContainer>
      <Card>
        <p>现绑定手机号： 131****1111</p>
        <Button onClick={handleClickChange}>更换手机号</Button>
      </Card>
      <PhoneDialog
        isModalVisible={isModalVisible}
        onOK={handleOk}
        onCancel={handleCancel}
      />
    </PageContainer>
  );
};
export default UserInfo
