import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import {
  ChoiceUserTypeModalHeader,
  ChoiceUserTypeModalStyle,
  ChoiceUserTypeModalContent,
} from './styles';
import { useRouter } from 'next/navigation';

interface Props {
  onCloseModal: () => void;
}

const ChoiceUserTypeModal = ({ onCloseModal }: Props) => {
  const stopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  const [userType, setUserType] = useState('회원');
  const handleUserType = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const eventTarget = e.target as HTMLElement;
      setUserType(eventTarget.innerText);
    },
    []
  );

  const router = useRouter();
  const onClickComplete = useCallback(() => {
    // 유저 타입에 따른 회원가입페이지로 이동
    console.log(userType);
    if (userType === '회원' || userType === '강사') {
      router.push('/join/basic');
    } else if (userType === '대표자') {
      router.push('/join/master');
    }
    onCloseModal();
  }, [userType]);

  return (
    <ChoiceUserTypeModalStyle onClick={stopPropagation}>
      <ChoiceUserTypeModalHeader>
        <span>가입목적을 선택해주세요.</span>
        <Image
          onClick={onCloseModal}
          src='/icons/close_modal.svg'
          alt='close_modal'
          width={18}
          height={18}
          style={{ cursor: 'pointer' }}
        />
      </ChoiceUserTypeModalHeader>
      <ChoiceUserTypeModalContent>
        <div className='user-type'>
          <button
            className={`member ${userType == '회원' && `select`}`}
            onClick={handleUserType}
          >
            회원
          </button>
          <button
            className={`instructor ${userType == '강사' && `select`}`}
            onClick={handleUserType}
          >
            강사
          </button>
          <button
            className={`master ${userType == '대표자' && `select`}`}
            onClick={handleUserType}
          >
            대표자
          </button>
        </div>
        <button className='complete' onClick={onClickComplete}>
          선택
        </button>
      </ChoiceUserTypeModalContent>
    </ChoiceUserTypeModalStyle>
  );
};

export default ChoiceUserTypeModal;
