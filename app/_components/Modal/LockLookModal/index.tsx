import React, { useCallback } from 'react';
import Image from 'next/image';
import { InputWrapper } from '../MemberRgMdModal/styles';
import {} from './styles';
import {
  LockLookModalContent,
  LockLookModalHeader,
  LockLookModalStyle,
  LockLookInfo,
  ButtonSection,
} from './styles';

interface Props {
  title: string;
  onCloseModal: () => void;
}

const LockLookModal = ({ title, onCloseModal }: Props) => {
  const stopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  return (
    <LockLookModalStyle onClick={stopPropagation}>
      <LockLookModalHeader>
        <span>{title}</span>
        <Image
          onClick={onCloseModal}
          src='/icons/close_modal.svg'
          alt='close_modal'
          width={18}
          height={18}
          style={{ cursor: 'pointer' }}
        />
      </LockLookModalHeader>
      <LockLookModalContent>
        <LockLookInfo>
          <InputWrapper height={'16.5%'}>
            <span className='info-input'>이름</span>
            <div className='input-content'>
              <input className='input name' type='text' />
            </div>
          </InputWrapper>
          <InputWrapper height={'16.5%'}>
            <span className='info-input'>기간</span>
            <div className='input-content'>
              <input className='input period' type='text' />
              <span>개월</span>
            </div>
          </InputWrapper>
          <InputWrapper height={'16.5%'}>
            <span className='info-input'>종류</span>
            <div className='input-content'>
              <select className='input type'>
                <option>락커</option>
                <option>회원복</option>
              </select>
            </div>
          </InputWrapper>
          <InputWrapper height={'16.5%'}>
            <span className='info-input'>가격</span>
            <div className='input-content'>
              <input className='input price' type='text' />
              <span>원</span>
            </div>
          </InputWrapper>
        </LockLookInfo>
        <ButtonSection>
          {title === '락커 및 회원복 등록' ? (
            <button className='register'>등록</button>
          ) : (
            <button className='register'>수정</button>
          )}
          <button className='candel'>취소</button>
        </ButtonSection>
      </LockLookModalContent>
    </LockLookModalStyle>
  );
};

export default LockLookModal;
