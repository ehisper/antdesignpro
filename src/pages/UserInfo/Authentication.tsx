import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { EllipsisOutlined, SettingOutlined, EditOutlined, CheckCircleTwoTone, WarningOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Card, Avatar, Row, Col } from 'antd';

import { Link, useModel, history } from 'umi';
import WalletDialog from './components/WalletDialog'
import AuthenticationCard from './components/AuthenticationCard'
import styles from './index.less';

const Authentication: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [peasonVisible, setPeasonVisible] = useState(false);
  const [companyVisible, setCompanyVisible] = useState(false);
  const [authInfoP, setAuthInfoP] = useState({
    status: 1,
    reason: '认证照片不清晰',
    date: '2020年3月5日'
  })
  const [authInfoC, setAuthInfoC] = useState({
    status: 2,
    reason: '认证照片不清晰',
    date: '2020年3月5日'
  })
  const handleClickAuthP = () => {
    setPeasonVisible(true)
  }
  const handleClickAuthC = () => {
    setCompanyVisible(true)
  }
  const handleOk = () => {
    setIsModalVisible(false);
    history.push('/userinfo/e');
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <PageContainer>
      <ProCard direction="column" className={styles.authenticationCard}>
        {/*<ProCard gutter={16} ghost style={{ height: 200 }}>
          <ProCard colSpan={16} />
          <ProCard colSpan={8} />
        </ProCard> */}
        <Row>
          <Col span={24}>
            <p className={styles.authenticationCardTip}>您还未通过实名认证，仅实名认证通过后的用户方可访问公益平台。</p>
          </Col>
          <Col span={24}>
            <p className={styles.authenticationCardTip2}>注意，实名认证只能选择个人实名认证和企业实名认证的其中一种认证方式，请根据实际情况谨慎选择。</p>
          </Col>
        </Row>
        <Row align={'middle'} justify={'space-around'}>
          <Col span={7}>
            <AuthenticationCard
              title="个人实名认证"
              authInfo={authInfoP}
              onSubmit={handleClickAuthP} />
          </Col>
          <Col span={7}>
            <AuthenticationCard
              title="企业实名认证"
              authInfo={authInfoC}
              onSubmit={handleClickAuthP} />
          </Col>
        </Row>
      </ProCard>
      <WalletDialog
        isModalVisible={isModalVisible}
        onOK={handleOk}
        onCancel={handleCancel}
      />
    </PageContainer>
  );
};
export default Authentication
