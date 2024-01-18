import React from 'react';
import { BottomSection, MemberProductCardStyle, TopSection } from './styles';

interface Props {
  product: { [key: string]: string };
}
const MemberProductCard = ({ product }: Props) => {
  return (
    <MemberProductCardStyle>
      <TopSection>
        <div className='product-name'>{product.name}</div>
        <div className='product-instructor'>{product.instructor} 강사</div>
        <div className='product-period'>{product.period}</div>
      </TopSection>
      <BottomSection>
        <div className='section-item'>
          <div>예약가능</div> <div>{product.reservationAvailable}</div>
        </div>
        <div className='section-item'>
          <div>취소가능</div> <div> {product.cancellable}</div>
        </div>
        <div className='section-item'>
          <div>잔여</div>
          <div>
            {product.remain} / {product.allCount}
          </div>
        </div>
      </BottomSection>
    </MemberProductCardStyle>
  );
};

export default MemberProductCard;
