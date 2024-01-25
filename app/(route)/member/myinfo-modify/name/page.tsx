'use client';
import Image from 'next/image';
import MobileLayout from '@/app/_layout/MobileLayout';
import React, { useCallback, useEffect, useState } from 'react';
import {
  NameModify,
  PageContent,
  PageHeader,
  PageWrapper,
  ProfileImgModify,
  SaveButtonWrapper,
} from './styles';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const CompleteToast = () => {
  interface Props {
    opacity: number;
  }
  const CompleteToastStyle = styled.div<Props>`
    position: absolute;
    bottom: 16%;
    height: 7%;
    background: #5c5a5a;
    width: 93.8%;
    margin: 0 3%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-size: 12px;
    color: white;
    opacity: ${(props) => (props.opacity ? `${opacity}%` : '')};
  `;
  const [opacity, setOpacity] = useState(100);

  const softRemover = () => {
    if (opacity > 96) {
      setTimeout(() => {
        console.log('dd');
        setOpacity(opacity - 1);
      }, 100);
    } else if (opacity > 5)
      setTimeout(() => {
        setOpacity(opacity - 8);
      }, 50);
  };

  useEffect(() => {
    softRemover(); // 해당 컴포넌트가 나타나면 함수가 바로실행됨.
  }, [softRemover]);

  return (
    <CompleteToastStyle opacity={opacity}>
      회원 정보가 변경되었습니다.
    </CompleteToastStyle>
  );
};

const Name = () => {
  const router = useRouter();

  const goBack = useCallback(() => {
    router.back();
  }, []);

  const [isOpenCompleteToast, setIsOpenCompleteToast] = useState(false);
  const isClickSaveBtn = useCallback(() => {
    setIsOpenCompleteToast(true);
    setTimeout(() => {
      setIsOpenCompleteToast(false);
    }, 1000);
  }, []);

  return (
    <MobileLayout>
      <PageWrapper>
        <PageHeader>
          <Image
            src='/icons/arrow_left.svg'
            alt='arrow_left'
            width={15}
            height={15}
            onClick={goBack}
          />
          회원 정보 변경
        </PageHeader>
        <PageContent>
          <ProfileImgModify>
            <div className='img'>
              <Image
                src='/icons/profile.svg'
                alt='profile'
                width={30}
                height={30}
              />
            </div>
            <div className='modify-button'>
              <Image
                src='/icons/modify.svg'
                alt='modify'
                width={15}
                height={15}
              />
            </div>
          </ProfileImgModify>
          <NameModify>
            <input type='text'></input>
            <Image
              src='/icons/close_modal.svg'
              alt='close_modal'
              width={15}
              height={15}
            />
          </NameModify>
          <SaveButtonWrapper>
            <button onClick={isClickSaveBtn}>저장하기</button>
          </SaveButtonWrapper>
          {isOpenCompleteToast && <CompleteToast />}
        </PageContent>
      </PageWrapper>
    </MobileLayout>
  );
};
export default Name;
