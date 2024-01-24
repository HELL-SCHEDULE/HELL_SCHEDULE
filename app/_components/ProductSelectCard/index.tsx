import React from 'react';
import {
  ProductDetailInfo,
  ProductImgWrapper,
  ProductInfo,
  ProductSelectCardStyle,
} from './styles';

interface Props {
  product: { [key: string]: any };
}

const ProductSelectCard = ({ product }: Props) => {
  return (
    <ProductSelectCardStyle>
      <ProductImgWrapper>
        <div>{/* 로고 */}</div>
      </ProductImgWrapper>
      <ProductInfo>
        <div>{product.name}</div>
        <div>{product.period}</div>
      </ProductInfo>
      <ProductDetailInfo>
        잔여 {product.remain}회 / 취소 가능 {product.canCellable}회
      </ProductDetailInfo>
    </ProductSelectCardStyle>
  );
};

export default ProductSelectCard;
