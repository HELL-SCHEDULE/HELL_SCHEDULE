'use client';
import Image from 'next/image';
import MobileLayout from '@/app/_layout/MobileLayout';
import React, { useCallback } from 'react';
import {
  ModifyButtonWrapper,
  ModifyContent,
  PageContent,
  PageDescription,
  PageHeader,
  PageWrapper,
} from './styles';
import { useRouter } from 'next/navigation';

const Password = () => {
  const router = useRouter();

  const goBack = useCallback(() => {
    router.back();
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
          비밀번호 변경
        </PageHeader>
        <PageContent>
          <PageDescription>
            현재 사용중인 비밀번호와 <br />
            새로운 비밀번호를 입력해주세요.
          </PageDescription>
          <ModifyContent>
            <div className='modify-content-item'>
              <div className='modify-title'>기존 비밀번호</div>
              <div className='modify-input'>
                <input
                  type='text'
                  placeholder='사용하고 계신 비밀번호를 입력해주세요.'
                />
                <Image
                  src='/icons/close_modal.svg'
                  alt='close_modal'
                  width={15}
                  height={15}
                />
              </div>
              <div className='error'>
                영문, 숫자를 포함한 8~32자로 설정해 주세요!
              </div>
            </div>
            <div className='modify-content-item'>
              <div className='modify-title'>변경할 비밀번호</div>
              <div className='modify-input'>
                <input
                  type='text'
                  placeholder='영문, 숫자를 포함한 8~32자로 설정해 주세요.'
                />
                <Image
                  src='/icons/close_modal.svg'
                  alt='close_modal'
                  width={15}
                  height={15}
                />
              </div>
              <div className='error'>
                영문, 숫자를 포함한 8~32자로 설정해 주세요!
              </div>
            </div>
            <div className='modify-content-item'>
              <div className='modify-title'>비밀번호 확인</div>
              <div className='modify-input'>
                <input
                  type='text'
                  placeholder='설정한 비밀번호를 다시 한 번 입력해 주세요.'
                />
                <Image
                  src='/icons/close_modal.svg'
                  alt='close_modal'
                  width={15}
                  height={15}
                />
              </div>
              <div className='error'>비밀번호가 일치하지 않아요!</div>
            </div>
          </ModifyContent>
          <ModifyButtonWrapper>
            <button>비밀번호 변경하기</button>
          </ModifyButtonWrapper>
        </PageContent>
      </PageWrapper>
    </MobileLayout>
  );
};

export default Password;
