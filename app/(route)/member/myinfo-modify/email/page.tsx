'use client';
import Image from 'next/image';
import MobileLayout from '@/app/_layout/MobileLayout';
import React, { useCallback, useState } from 'react';
import {
  ModifyButtonWrapper,
  ModifyContent,
  PageContent,
  PageDescription,
  PageHeader,
  PageWrapper,
} from './styles';
import { useRouter } from 'next/navigation';
import ToastModal from '@/app/_components/ToastModal';

const Email = () => {
  const router = useRouter();

  const goBack = useCallback(() => {
    router.back();
  }, []);

  const [isOpenToastModal, setIsOpenToastModal] = useState(false);
  const changeEmailHandler = useCallback(() => {
    setIsOpenToastModal((prev) => !prev);
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
          이메일 변경
        </PageHeader>
        <PageContent>
          <PageDescription>
            이메일 변경을 위해 <br />
            새로운 이메일 주소를 입력해주세요.
          </PageDescription>
          <ModifyContent>
            <div className='modify-content-item'>
              <div className='modify-title'>변경할 이메일</div>
              <div className='modify-input'>
                <input
                  type='text'
                  placeholder='변경할 이메일 주소를 입력해 주세요'
                />
                <Image
                  src='/icons/close_modal.svg'
                  alt='close_modal'
                  width={15}
                  height={15}
                />
              </div>
              <div className='error'>
                이메일 양식을 다시 한 번 확인해 주세요!
              </div>
            </div>
            <div className='modify-content-item'>
              <div className='modify-title'>이메일 확인</div>
              <div className='modify-input'>
                <input
                  type='text'
                  placeholder='변경할 이메일 주소를 다시 한 번 입력해 주세요'
                />
                <Image
                  src='/icons/close_modal.svg'
                  alt='close_modal'
                  width={15}
                  height={15}
                />
              </div>
              <div className='error'>이메일이 일치하지 않습니다!</div>
            </div>
          </ModifyContent>
          <ModifyButtonWrapper>
            <button onClick={changeEmailHandler}>변경하기</button>
          </ModifyButtonWrapper>
        </PageContent>
        {isOpenToastModal && (
          <ToastModal
            type={'이메일'}
            email='gkwjd719@naver.com'
            onCloseModal={changeEmailHandler}
          />
        )}
      </PageWrapper>
    </MobileLayout>
  );
};

export default Email;
