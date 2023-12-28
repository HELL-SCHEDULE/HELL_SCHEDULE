import Image from 'next/image';
import React from 'react';
import {
  BottomSection,
  ProductCardContent,
  ProductCardWrapper,
  TopSection,
} from './styles';

interface Props {
  product: { [key: string]: string };
  isClickedEdit: boolean;
  handleModifyModal: () => void;
}

const ProductCard = ({ product, isClickedEdit, handleModifyModal }: Props) => {
  return (
    <ProductCardWrapper>
      <input
        className={`check-box ${isClickedEdit && 'active'}`}
        type='checkbox'
      />
      <ProductCardContent>
        <TopSection>
          <div className='name'>{product.name}</div>
          <div>{product.period}</div>
        </TopSection>
        <BottomSection>
          <div>{product.price} 원</div>
          <div className='icon'>
            <Image
              src='/icons/modify.svg'
              alt='modify'
              width={20}
              height={20}
              onClick={() => handleModifyModal()}
            />
          </div>
        </BottomSection>
      </ProductCardContent>
    </ProductCardWrapper>
  );
};

export default ProductCard;
