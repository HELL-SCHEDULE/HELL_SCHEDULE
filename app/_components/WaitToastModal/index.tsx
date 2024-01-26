import Image from 'next/image';
import React, { useCallback } from 'react';
import {
  WaitToastModalWrapper,
  WaitToastModalHeader,
  WaitToastModalStyle,
  WaitToastModalContent,
  DescriptionSection,
  ButtonSection,
} from './stylest';

interface Props {
  classInfo: { [key: string]: string };
  onCloseModal: () => void;
}

const WaitToastModal = ({ classInfo, onCloseModal }: Props) => {
  const stopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  return (
    <WaitToastModalWrapper onClick={onCloseModal}>
      <WaitToastModalStyle onClick={stopPropagation}>
        <WaitToastModalHeader>
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
        </WaitToastModalHeader>
        <WaitToastModalContent>
          <DescriptionSection>
            <div className='title'>
              예약 대기를 <br />
              진행할까요?
            </div>
            <div className='class-description'>
              <div className='class-instructor-info'>
                <div className='profile-img'>
                  <Image
                    src='/icons/profile.svg'
                    alt='profile'
                    width={28}
                    height={28}
                  />
                </div>
                <div className='profile-info'>
                  <div className='class-name'>필라테스</div>
                  <div className='class-instructor'>김하정 강사</div>
                </div>
              </div>
              <div className='class-infomation'>
                <div>수업 시간</div>
                <div className='class-time'>
                  2024. 01. 25 (목) 19:00 ~ 19:50
                </div>
              </div>
            </div>
          </DescriptionSection>
          <ButtonSection>
            <button>돌아가기</button>
            <button>예약하기</button>
          </ButtonSection>
        </WaitToastModalContent>
      </WaitToastModalStyle>
    </WaitToastModalWrapper>
  );
};

export default WaitToastModal;
