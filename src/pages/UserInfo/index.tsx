import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { EllipsisOutlined, SettingOutlined, EditOutlined, CheckCircleTwoTone, ExclamationCircleTwoTone } from '@ant-design/icons';
import { Button, Dropdown, Menu, Card, Avatar, Row, Col } from 'antd';

import { Link, useModel, history } from 'umi';
import WalletDialog from './components/WalletDialog'

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

  return (
    <PageContainer>
      <Card className={styles.userinfoContentCard} title={<Avatar size={64} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}>
        <Row align={'middle'} justify={'space-between'}>
          <Col span={10}>
            <Card
              className={styles.userinfocard}
              style={{ marginTop: 36 }}
              actions={[
                <Link to="/userinfo/b" className={styles.cardactions}>更改绑定&gt;</Link>,
              ]}
            >
              <Meta
                title={<>我的绑定手机&nbsp;&nbsp;<CheckCircleTwoTone twoToneColor="#52c41a" /></>}
                description="131****1111"
              />
            </Card>
          </Col>
          <Col span={10}>
            <Card
              className={styles.userinfocard}
              style={{ marginTop: 36 }}
              actions={[
                <Link to="/userinfo/d" className={styles.cardactions}>前去认证&gt;</Link>,
              ]}
            >
              <Meta
                title={<>我的实名认证&nbsp;&nbsp;<ExclamationCircleTwoTone twoToneColor="#E7A543" /></>}
                description="未认证"
              />
            </Card>
          </Col>
        </Row>
        <Row align={'middle'} justify={'space-between'}>
          <Col span={10}>
            <Card
              className={styles.userinfocard}
              style={{ marginTop: 36 }}
              actions={[
                <Link to="/userinfo/c" className={styles.cardactions}>修改密码&gt;</Link>,
              ]}
            >
              <Meta
                title={<>我的账号安全&nbsp;&nbsp;<CheckCircleTwoTone twoToneColor="#52c41a" /></>}
                description="密码安全登记高"
              />
            </Card>
          </Col>
          <Col span={10}>
            <Card
              className={styles.userinfocard}
              style={{ marginTop: 36 }}
              actions={[
                <Link to="/userinfo/e" className={styles.cardactions}>管理钱包&gt;</Link>,
              ]}
            >
              <Meta
                title={<>我的数字钱包&nbsp;&nbsp;<ExclamationCircleTwoTone twoToneColor="#E7A543" /></>}
                description="钱包未生成"
              />
            </Card>
          </Col>
        </Row>
      </Card>
      <WalletDialog
        isModalVisible={isModalVisible}
        onOK={handleOk}
        onCancel={handleCancel}
      />
    </PageContainer>
  );
};
export default UserInfo
