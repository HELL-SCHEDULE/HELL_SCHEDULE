import React from 'react';
import {
  LeftSection,
  ProductDetailInfoCardStyle,
  RightSection,
} from './styles';

const ProductDetailInfoCard = () => {
  return (
    <ProductDetailInfoCardStyle>
      <LeftSection>
        <div className='product-type'>수업예약</div>
        <div className='product-title'>2:1 그룹 피티</div>
        <div>18/11/14 18:00</div>
      </LeftSection>
      <RightSection>
        <div className='class-info latest'>
          <div>18/11/14 18:00</div>
          <div>수업에 출석되었습니다.</div>
          <div>이용완료</div>
        </div>
        <div className='class-info'>
          <div>18/11/14 18:00</div>
          <div>수업에 출석되었습니다.</div>
          <div>예약확정</div>
        </div>
        <div className='class-info'>
          <div>18/11/14 18:00</div>
          <div>수업에 출석되었습니다.</div>
          <div>예약대기</div>
        </div>
      </RightSection>
    </ProductDetailInfoCardStyle>
  );
};

export default ProductDetailInfoCard;
