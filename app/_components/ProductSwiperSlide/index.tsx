import React from 'react';
import {
  ProductSwiper,
  ProductCardSection,
  ProductInfoSection,
} from './styles';
import ProductCard from '../ProductCard';

interface Props {
  product: { [key: string]: any };
}
const ProductSwiperSlide = ({ product }: Props) => {
  return (
    <ProductSwiper>
      <ProductCardSection>
        <ProductCard type={'회원 상세'} product={product} />
      </ProductCardSection>
      <ProductInfoSection>
        <div className='product-info-wrapper'>
          <span className='info-title'>이용상태</span>
          <div className='info-content'>
            <span>사용중</span>
            <span> · </span>
            <span>24일 남음</span>
            <span> · </span>
            <span>잔여 1/20</span>
          </div>
        </div>
        <div className='product-info-wrapper'>
          <span className='info-title'>결제정보</span>
          <div className='info-content'>
            <span>카드</span>
            <span>300,000원</span>
          </div>
        </div>
      </ProductInfoSection>
    </ProductSwiper>
  );
};

export default ProductSwiperSlide;
