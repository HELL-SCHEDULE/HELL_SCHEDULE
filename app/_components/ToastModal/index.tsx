import Image from 'next/image';
import React, { useCallback } from 'react';
import {
  ButtonSection,
  DescriptionSection,
  ToastModalContent,
  ToastModalHeader,
  ToastModalStyle,
  ToastModalwrapper,
} from './styles';

interface Props {
  type: string;
  email?: string;
  onCloseModal: () => void;
}
const ToastModal = ({ type, email, onCloseModal }: Props) => {
  const stopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  return (
    <ToastModalwrapper onClick={onCloseModal}>
      <ToastModalStyle
        height={type == '이메일' ? '34%' : `28%`}
        onClick={stopPropagation}
      >
        <ToastModalHeader height={type == '이메일' ? '35%' : `43%`}>
          <div>
            <Image
              src='/image/toast-modal-question.png'
              alt='toast-modal-question'
              width={65}
              height={55}
            />
          </div>
          <Image
            onClick={onCloseModal}
            src='/icons/close_modal.svg'
            alt='close_modal'
            width={15}
            height={15}
            style={{ cursor: 'pointer' }}
          />
        </ToastModalHeader>
        <ToastModalContent height={type == '이메일' ? '65%' : `57%`}>
          <DescriptionSection height={type == '이메일' ? '70%' : `59%`}>
            <div>이 {type}로 바꿀까요?</div>
            {type == '이메일' && <div>{email}로 이메일이 변경됩니다.</div>}
          </DescriptionSection>
          <ButtonSection height={type == '이메일' ? '30%' : `41%`}>
            <button>돌아가기</button>
            <button>변경하기</button>
          </ButtonSection>
        </ToastModalContent>
      </ToastModalStyle>
    </ToastModalwrapper>
  );
};

export default ToastModal;
