import Image from 'next/image';
import React, { useCallback } from 'react';
import {
  ButtonSection,
  InstructorInfo,
  InstructorRegisterModal,
  InstructorRgModalContent,
  InstructorRgModalHeader,
} from './style';
import { InputWrapper } from '../MemberRgModal/styles';

interface Props {
  onCloseModal: () => void;
}

const InstructorRgModal = ({ onCloseModal }: Props) => {
  const stopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  return (
    <InstructorRegisterModal onClick={stopPropagation}>
      <InstructorRgModalHeader>
        <span>강사 등록</span>
        <Image
          onClick={onCloseModal}
          src='/icons/close_modal.svg'
          alt='close_modal'
          width={18}
          height={18}
          style={{ cursor: 'pointer' }}
        />
      </InstructorRgModalHeader>
      <InstructorRgModalContent>
        <InstructorInfo>
          <InputWrapper height={'19.1%'}>
            <span className='info-input'>강사 이름</span>
            <div className='input-content'>
              <input className='input name' type='text' />
            </div>
          </InputWrapper>
          <InputWrapper height={'19.1%'}>
            <span className='info-input'>이메일</span>
            <div className='input-content'>
              <input className='input email' type='text' />
              <span className='mark'>@</span>
              <select className='input email'>
                <option>naver.com</option>
                <option>gmail.com</option>
              </select>
            </div>
          </InputWrapper>
          <InputWrapper height={'19.1%'}>
            <span className='info-input'>휴대폰 번호</span>
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
        </InstructorInfo>
        <ButtonSection>
          <button className='register'>등록</button>
          <button className='candel'>취소</button>
        </ButtonSection>
      </InstructorRgModalContent>
    </InstructorRegisterModal>
  );
};

export default InstructorRgModal;
