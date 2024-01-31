import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import {
  WaitToastModalWrapper,
  WaitToastModalHeader,
  WaitToastModalStyle,
  WaitToastModalContent,
  DescriptionSection,
  ButtonSection,
} from './stylest';
import { useRouter } from 'next/navigation';

interface Props {
  type: string;
  classInfo: { [key: string]: string };
  onCloseModal: () => void;
}

const WaitToastModal = ({ type, classInfo, onCloseModal }: Props) => {
  const stopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  const [mainTitle, setMainTitle] = useState<string>('');
  const [btnTitle, setBtnTitle] = useState<string>('');

  const setModalTitle = useCallback(() => {
    if (type === '예약대기') {
      setMainTitle('예약대기를 진행할까요?');
      setBtnTitle('예약대기');
    }
    if (type === '예약가능') {
      setMainTitle('예약을 진행할까요?');
      setBtnTitle('예약하기');
    }
    if (type === '예약취소') {
      setMainTitle('예약취소를 진행할까요?');
      setBtnTitle('예약취소');
    }
    if (type === '취소가 완료되었습니다.') {
      setMainTitle(type);
      setBtnTitle(type);
    }
    if (type === '출석완료') {
      setMainTitle('출석이 완료되었습니다!');
      setBtnTitle('처리가 완료된 수업입니다.');
    }
    if (type === '수업에 참여하지 않았습니다.') {
      setMainTitle(type);
      setBtnTitle('처리가 완료된 수업입니다.');
    }
  }, [type]);

  useEffect(() => {
    setModalTitle();
  }, [type]);

  const router = useRouter();

  const routeToClassRequestComplete = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const eventTarget = e.target as HTMLElement;
      const queryStr = new URLSearchParams(classInfo).toString();
      // router.push(
      //   `/member/class-request-complete?type=${eventTarget.innerText}&classInfo=${queryStr}`
      // );
      router.push(
        `/member/class-request-complete?type=${eventTarget.innerText}`
      );
    },
    []
  );

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
              {mainTitle.split(' ')[0]}
              <br />
              {mainTitle.split(' ')[1]}&nbsp;
              {mainTitle.split(' ')[2] && mainTitle.split(' ')[2]}
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
          <ButtonSection
            count={
              btnTitle === '취소가 완료되었습니다.' ||
              btnTitle === '처리가 완료된 수업입니다.'
                ? 1
                : 2
            }
          >
            <button onClick={onCloseModal}>돌아가기</button>
            {btnTitle === '취소가 완료되었습니다.' ||
            btnTitle === '처리가 완료된 수업입니다.' ? (
              <></>
            ) : (
              <button onClick={routeToClassRequestComplete}>{btnTitle}</button>
            )}
          </ButtonSection>
        </WaitToastModalContent>
      </WaitToastModalStyle>
    </WaitToastModalWrapper>
  );
};

export default WaitToastModal;
