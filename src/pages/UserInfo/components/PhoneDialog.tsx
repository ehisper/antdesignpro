import React from 'react';
import { Modal, Button } from 'antd';
import { ExclamationCircleTwoTone } from '@ant-design/icons';
import styles from '../index.less';
export type PhoneDialogProps = {
  onCancel: () => void;
  onOK: () => void;
  isModalVisible: boolean;
};
const WalletDialog: React.FC<PhoneDialogProps> = (props) => {
  return (
    <Modal title="重要提示" visible={props.isModalVisible}
      onCancel={() => props.onCancel()}
      footer={[
        <Button key="submit" type="primary" onClick={() => { props.onOK() }}>
          确认
        </Button>
      ]}>
      <div className={styles.walletDialogContent}>
        <ExclamationCircleTwoTone />
        <div className={styles.walletDialogDesc}>
          <p>当前浏览器未检测到您的钱包信息，您可能在本次登录前清除了浏览器缓存，或您正在使用新的电脑设备（非首次创建钱包的电脑设备）</p>
          <p>您需要在浏览器中恢复钱包，才能进行上链操作，建议您立即恢复。</p>
        </div>
      </div>

    </Modal>
  );
};

export default WalletDialog;
