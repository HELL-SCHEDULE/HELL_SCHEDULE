import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import {
  MemberInfoWrapper,
  InputWrapper,
  MemberBasicInfo,
  MemberRgMdInfo,
  MemberRegisterModifyModal,
  MemberRgMdModalContent,
  MemberRgMdModalHeader,
  MemberRgMdInfoWrapper,
  ButtonWrapper,
} from './styles';
import SelectLocker from '../../SelectLocker';

interface Props {
  title: string;
  onCloseModal: () => void;
  openSelectLockerHandler: () => void;
  selectLocker?: number;
}

const MemberRgModal = ({
  title,
  onCloseModal,
  openSelectLockerHandler,
  selectLocker,
}: Props) => {
  const stopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  return (
    <MemberRegisterModifyModal onClick={stopPropagation}>
      <MemberRgMdModalHeader>
        <span>{title}</span>
        <Image
          onClick={onCloseModal}
          src='/icons/close_modal.svg'
          alt='close_modal'
          width={18}
          height={18}
          style={{ cursor: 'pointer' }}
        />
      </MemberRgMdModalHeader>
      <MemberRgMdModalContent>
        <MemberBasicInfo>
          <div className='info-title'>회원 정보</div>
          <MemberInfoWrapper>
            <div className='cam'>
              <Image
                src='/icons/profile_cam.svg'
                alt='profile_cam'
                width={65}
                height={65}
              />
            </div>
            <div className='info-input'>
              <InputWrapper height={'22%'}>
                <span className='input-title'>이름</span>
                <div className='input-content'>
                  <input className='input name' type='text' />
                </div>
              </InputWrapper>
              <InputWrapper height={'22%'}>
                <span className='input-title'>휴대폰 번호</span>
                <div className='input-content'>
                  <select className='input phone'>
                    <option>010</option>
                    <option>011</option>
                  </select>
                  <span className='mark'>-</span>
                  <input className='input phone' type='text' />
                  <span className='mark'>-</span>
                  <input className='input phone' type='text' />
                </div>
              </InputWrapper>
              <InputWrapper height={'22%'}>
                <span className='input-title'>이메일</span>
                <div className='input-content'>
                  <input className='input email' type='text' />
                  <span className='mark'>@</span>
                  <select className='input email'>
                    <option>naver.com</option>
                    <option>gmail.com</option>
                  </select>
                </div>
              </InputWrapper>
            </div>
          </MemberInfoWrapper>
        </MemberBasicInfo>
        <MemberRgMdInfo>
          <div className='info-title'>회원 등록</div>
          <MemberRgMdInfoWrapper>
            <div className='info-input'>
              <InputWrapper height={'8.8%'}>
                <span className='input-title'>회원번호</span>
                <div className='input-content'>
                  <input className='input id' type='text' />
                  <button className='button'>중복 확인</button>
                </div>
              </InputWrapper>
              <InputWrapper height={'8.8%'}>
                <span className='input-title'>수강권</span>
                <div className='input-content'>
                  <select className='input product'>
                    <option>--선택--</option>
                    <option>수강권 1</option>
                    <option>수강권 2</option>
                  </select>
                </div>
              </InputWrapper>
              <InputWrapper height={'8.8%'}>
                <span className='input-title'>수강 기간</span>
                <div className='input-content'>
                  <input className='input date' type='date' />
                  <span className='mark'>-</span>
                  <input className='input date' type='text' />
                </div>
              </InputWrapper>
              <InputWrapper height={'8.8%'}>
                <span className='input-title'>강사</span>
                <div className='input-content'>
                  <input className='input instructor' type='text' />
                </div>
              </InputWrapper>
              <InputWrapper height={'8.8%'}>
                <div className='check'>
                  <input className='input' type='checkbox' />
                  <span className='input-title'>락커</span>
                </div>
                <div className='input-content'>
                  <select className='input rocker'>
                    <option>--선택--</option>
                    <option>수강권 1</option>
                    <option>수강권 2</option>
                  </select>
                  <button className='button' onClick={openSelectLockerHandler}>
                    락커 등록
                  </button>
                  <span>{selectLocker}번 지정</span>
                </div>
              </InputWrapper>
              <InputWrapper height={'8.8%'}>
                <div className='check'>
                  <input type='checkbox' />
                  <span className='input-title'>회원복</span>
                </div>
                <div className='input-content'>
                  <select className='input look'>
                    <option>--선택--</option>
                    <option>수강권 1</option>
                    <option>수강권 2</option>
                  </select>
                </div>
              </InputWrapper>
              <InputWrapper height={'8.8%'}>
                <span className='input-title'>결제 방법</span>
                <div className='input-content'>
                  <select className='input pay-method'>
                    <option>--선택--</option>
                    <option>수강권 1</option>
                    <option>수강권 2</option>
                  </select>
                </div>
              </InputWrapper>
              <InputWrapper height={'8.8%'}>
                <span className='input-title'>결제 금액</span>
                <div className='input-content'>
                  <input className='input price' type='text' />
                  <span>원</span>
                </div>
              </InputWrapper>
            </div>
          </MemberRgMdInfoWrapper>
        </MemberRgMdInfo>
        <ButtonWrapper>
          <button className='cancel'>취소</button>
          {title === '회원 등록' ? (
            <button className='register'>등록</button>
          ) : (
            <button className='modify'>수정</button>
          )}
        </ButtonWrapper>
      </MemberRgMdModalContent>
    </MemberRegisterModifyModal>
  );
};

export default MemberRgModal;
