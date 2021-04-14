import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';

import { Button, Card, message, List } from 'antd';
import { ExclamationCircleTwoTone } from '@ant-design/icons';
import { Link, useModel, history } from 'umi';


// import type { FormValueType } from './components/pwdDialog';
// import PwdDialog from './components/pwdDialog'
import './index.less'
const Wallet: React.FC = () => {
  const [walletStatus, setWalletStatus] = useState<number>(1)
  const ListData = [
    {
      title: '账户地址',
      description: '账户地址是您在公益链联盟链网络中身份的唯一标识符，出于业务需要，您可以放心向您的业务相关方分享您的账户地址。',
      actions: [
        <a key="a">
          0xdCad3a6d3569DF655070DEd06cb7A1b2Ccd1D3AF
        </a>,
      ],
    },
    {
      title: '恢复钱包',
      description: '如果您在使用公益链平台时清除了浏览器缓存或者您使用非首次创建钱包的电脑设备，将无法进行上链操作。您可以用首次创建时下载的钱包文件，在此恢复。',
      actions: [
        <Button key="b" type="primary">恢 复</Button>,
      ],
    },
    {
      title: '钱包密码',
      description: '该密码用于对区块链交易进行数字签名，千万不要将钱包密码公开。请确保您已经完成钱包备份，以便您忘记钱包密码时，用以恢复钱包访问权限。',
      actions: [
        <Button key="b" type="primary">更 改</Button>,
      ],
    },
    // {
    //   title: '云托管钱包',
    //   description: (<>
    //     <p>开通该服务后，您可以将您本地钱包加密托管在云服务器上，如果您不慎丢失本地钱包或需要使用其他可信任设备登录公益链平台时，可以从云托管服务上恢复钱包</p>
    //     <div className="warnTxt"><ExclamationCircleTwoTone twoToneColor="#E7A543" />&nbsp;&nbsp;重要提示：使用云托管钱包服务即代表您信任平台能妥善保护和存储您的钱包。</div>
    //   </>),
    //   actions: [
    //     <Button key="b" type="primary">备份钱包</Button>,
    //   ],
    // },
  ]
  const ListData2 = [
    '钱包密码用于保护私钥和交易授权，建议设置强度高的密码',
    '建议将钱包密码设置为与平台登录密码不一致',
    '公益链平台不存储钱包密码，也无法找回，请务必牢记和妥善保管'
  ]
  return (
    <PageContainer>
      <ProCard direction="column" >
        <h1>管理您的区块链钱包、区块链账户和密钥</h1>
        {walletStatus === 1 && <h3><ExclamationCircleTwoTone twoToneColor="#E7A543" />&nbsp;&nbsp;只有通过实名认证的用户才能创建钱包，您还未完成实名认证。<Link to="/userinfo/d" >前去认证&gt;</Link></h3>}
        {walletStatus === 3 && <List
          header={<h2>区块链钱包</h2>}
          itemLayout="horizontal"
          dataSource={ListData}
          renderItem={item => (
            <List.Item key={item.title} actions={item.actions} className="walletItem">
              <List.Item.Meta
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />}
        <List
          bordered={false}
          size="small"
          itemLayout="horizontal"
          dataSource={ListData2}
          renderItem={item => (
            <List.Item>* {item}</List.Item>
          )}
        />
      </ProCard>
    </PageContainer>
  );
};
export default Wallet
