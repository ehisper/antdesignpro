import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { EllipsisOutlined, SettingOutlined, EditOutlined, CheckCircleTwoTone, WarningOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Card, Avatar, Row, Col, message } from 'antd';

import { Link, useModel, history } from 'umi';
import AuthPerson from './components/authPerson'
import type { FormValueType as FormValueTypeP } from './components/authPerson';
import type { AuthInfoType } from './components/authCard'
import AuthCard from './components/authCard'
import styles from './index.less';

const Authentication: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [peasonVisible, setPeasonVisible] = useState<boolean>(false);
  const [companyVisible, setCompanyVisible] = useState<boolean>(false);
  const [initPhone, setInitPhone] = useState<string>('17712121212')

  const [authInfoP, setAuthInfoP] = useState<AuthInfoType>({
    status: 1,
    reason: '认证照片不清晰',
    date: '2020年3月5日',
  })
  const [authInfoC, setAuthInfoC] = useState<AuthInfoType>({
    status: 1,
    reason: '认证照片不清晰',
    date: '2020年3月5日',
    disabled: true
  })
  const handleClickAuthP = () => {
    setPeasonVisible(true)
  }
  const handleClickAuthC = () => {
    setCompanyVisible(true)
  }
  const handleClickChangePhoneP = () => {
    history.push('/userinfo/b');
  }
  const handleClickChangePhoneC = () => {
    setCompanyVisible(true)
  }
  const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };
  const handleSubmitP = async (values: FormValueTypeP) => {
    //step
    console.log('values step2', values)
    await waitTime(1000);
    message.success('提交成功');
    setPeasonVisible(false);
    await waitTime(1000);
    // TODO查询认证数据
    setAuthInfoP({
      status: 2,
      reason: '认证照片不清晰',
      date: '2020年3月5日',
    })
  };

  return (
    <PageContainer>
      <ProCard direction="column" className={styles.authenticationCardWrapper}>
        {/*<ProCard gutter={16} ghost style={{ height: 200 }}>
          <ProCard colSpan={16} />
          <ProCard colSpan={8} />
        </ProCard> */}
        {peasonVisible === false && companyVisible === false && <ProCard>
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
              <AuthCard
                title="个人实名认证"
                authInfo={authInfoP}
                onSubmit={handleClickAuthP} />
            </Col>
            <Col span={7}>
              <AuthCard
                title="企业实名认证"
                authInfo={authInfoC}
                onSubmit={handleClickAuthP} />
            </Col>
          </Row>
        </ProCard>}
        {
          peasonVisible && (
            <AuthPerson
              onSubmit={handleSubmitP}
              onChangePhone={handleClickChangePhoneP}
              phone={initPhone}
            />)
        }
      </ProCard>

    </PageContainer>
  );
};
export default Authentication
