import React from 'react';
import { ModalLayoutStyles } from './styles';

interface Props {
  onCloseModal: () => void;
  children: React.ReactNode;
}

const ModalLayout = ({ onCloseModal, children }: Props) => {
  return (
    <ModalLayoutStyles onClick={onCloseModal}>{children}</ModalLayoutStyles>
  );
};

export default ModalLayout;
