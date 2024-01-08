import styled from 'styled-components';

export const ProductSwiper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2% 9%;
  display: flex;
  justify-content: space-between;
`;

export const ProductCardSection = styled.div`
  width: 50.6%;
  height: 99.6%;
`;

export const ProductInfoSection = styled.div`
  height: 99.6%;
  width: 43.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 14px;
  @media all and (min-width: 1024px) and (max-width: 1919px) {
    font-size: 12px;
  }
  .product-info-wrapper {
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .info-title {
    font-size: 18px;
    @media all and (min-width: 1024px) and (max-width: 1919px) {
      font-size: 16px;
    }
  }
  .info-content {
    display: flex;
    gap: 2.5%;
  }
`;
