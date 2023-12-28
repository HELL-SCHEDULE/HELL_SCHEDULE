import React, { useCallback } from 'react';
import Image from 'next/image';
import { InputWrapper } from '../MemberRgModal/styles';
import {
  ButtonSection,
  ProductInfo,
  ProductRegisterModal,
  ProductRgModalContent,
  ProductRgModalHeader,
} from './styles';

interface Props {
  title: string;
  onCloseModal: () => void;
}

const ProductModal = ({ title, onCloseModal }: Props) => {
  const stopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  return (
    <ProductRegisterModal onClick={stopPropagation}>
      <ProductRgModalHeader>
        <span>{title}</span>
        <Image
          onClick={onCloseModal}
          src='/icons/close_modal.svg'
          alt='close_modal'
          width={18}
          height={18}
          style={{ cursor: 'pointer' }}
        />
      </ProductRgModalHeader>
      <ProductRgModalContent>
        <ProductInfo>
          <InputWrapper height={'19.1%'}>
            <span className='info-input'>수강권 이름</span>
            <div className='input-content'>
              <input className='input name' type='text' />
            </div>
          </InputWrapper>
          <InputWrapper height={'19.1%'}>
            <span className='info-input'>수강권 기간</span>
            <div className='input-content'>
              <input className='input period' type='text' />
              <span>개월</span>
            </div>
          </InputWrapper>
          <InputWrapper height={'19.1%'}>
            <span className='info-input'>수강권 가격</span>
            <div className='input-content'>
              <input className='input price' type='text' />
              <span>원</span>
            </div>
          </InputWrapper>
        </ProductInfo>
        <ButtonSection>
          {title === '수강권 등록' ? (
            <button className='register'>등록</button>
          ) : (
            <button className='register'>수정</button>
          )}
          <button className='candel'>취소</button>
        </ButtonSection>
      </ProductRgModalContent>
    </ProductRegisterModal>
  );
};

export default ProductModal;
