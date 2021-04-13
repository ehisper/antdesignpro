import React, { useState } from 'react';
import ProCard from '@ant-design/pro-card';
import { Button } from 'antd';
import styles from '../index.less';

export type CardProps = {
  onSubmit: () => void;
  title: string;
  authInfo: Object; // 未认证 认证失败 认证中 已认证
};
const AuthenticationCard: React.FC<CardProps> = (props) => {
  return (
    <ProCard title={props.title} type="inner" bordered
      className={styles.authCardItem}
      actions={[
        props.authInfo.status !== 1 && <Button type="primary" block size="large" onClick={() => props.onSubmit()}>
          开始认证
              </Button>,
      ]}
      style={{ height: 300 }}
      headerBordered={false}>
      {props.authInfo.status === 1 && (
        <>
          <p>1. 在认证页面，填写姓名、身份证号码，选择身份证图片，提交认证。</p>
          <p>2、提交后，请等待平台运营人员进行审核。</p>
        </>
      )}
      {props.authInfo.status === 2 && (
        <>
          <p className={styles.errorTxt}>认证未通过</p>
          <p>审核意见：{props.authInfo.reason}</p>
        </>
      )}
      {props.authInfo.status === 3 && (
        <>
          <p className={styles.warnTxt}>认证审核中</p>
          <p>提交时间：{props.authInfo.date}</p>
        </>
      )}
      {props.authInfo.status === 4 && (
        <>
          <p className={styles.successTxt}>认证成功</p>
          <p>认证时间：{props.authInfo.date}</p>
        </>
      )}
    </ProCard>
  );
};
export default AuthenticationCard