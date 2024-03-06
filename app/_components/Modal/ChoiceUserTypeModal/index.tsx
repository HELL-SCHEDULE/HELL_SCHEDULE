import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import {
  ChoiceUserTypeModalHeader,
  ChoiceUserTypeModalStyle,
  ChoiceUserTypeModalContent,
} from './styles';
import { useRouter } from 'next/navigation';
import { useData } from '@/DataContext';

interface Props {
  onCloseModal: () => void;
  accoutInfo: { [key: string]: string };
}

const ChoiceUserTypeModal = ({ onCloseModal, accoutInfo }: Props) => {
  const stopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  // 가입하는 유저의 타입
  const [joinUserType, setJoinUserType] = useState('회원');

  const handleUserType = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const eventTarget = e.target as HTMLElement;
      switch (eventTarget.innerText) {
        case '회원':
          setJoinUserType('USER');
          break;
        case '강사':
          setJoinUserType('PARTNER');
          break;
        case '대표자':
          setJoinUserType('CEO');
          break;
      }
    },
    []
  );

  const { setAccount } = useData();
  const router = useRouter();
  const onClickComplete = useCallback(() => {
    // 유저 타입에 따른 회원가입페이지로 이동

    accoutInfo.role = joinUserType;
    console.log(accoutInfo);
    setAccount(accoutInfo);
    if (joinUserType === 'USER' || joinUserType === 'PARTNER') {
      router.push('/join/basic');
    } else if (joinUserType === 'CEO') {
      router.push('/join/master');
    }
    onCloseModal();
  }, [joinUserType]);

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
            className={`member ${joinUserType == 'USER' && `select`}`}
            onClick={handleUserType}
          >
            회원
          </button>
          <button
            className={`instructor ${joinUserType == 'PARTNER' && `select`}`}
            onClick={handleUserType}
          >
            강사
          </button>
          <button
            className={`master ${joinUserType == 'CEO' && `select`}`}
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
