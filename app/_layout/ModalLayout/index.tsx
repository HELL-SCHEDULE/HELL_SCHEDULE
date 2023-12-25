import React from 'react';
import { ModalLayouyStyles } from './styles';

interface Props {
  children: React.ReactNode;
}

const ModalLayout = ({ children }: Props) => {
  return <ModalLayouyStyles>{children}</ModalLayouyStyles>;
};

export default ModalLayout;
