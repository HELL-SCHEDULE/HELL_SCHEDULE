import styled from 'styled-components';

export const ProductDetailInfoCardStyle = styled.div`
  width: 100%;
  height: 46.2%;
  min-height: 130px;
  border-radius: 8px;
  border: 1px solid #c4c4c4;
  padding: 4% 0;
  display: flex;
  align-items: center;
  color: #c4c4c4;
  font-size: 14px;
  @media all and (min-width: 1024px) and (max-width: 1919px) {
    font-size: 12px;
  }
`;

export const LeftSection = styled.div`
  width: 33%;
  min-width: 155px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5%;
  align-items: flex-start;
  justify-content: space-between;
  padding-left: 5.7%;
  position: relative;
  .product-type {
    width: 43.3%;
    min-width: 63px;
    border-radius: 8px;
    border: 1px solid #c4c4c4;
    background: #e5e5e5;
    color: #000;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .product-title {
    color: #000;
    font-size: 16px;
    font-weight: 600;
    @media all and (min-width: 1024px) and (max-width: 1919px) {
      font-size: 14px;
    }
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    top: -27px;
    height: 156%;
    width: 1px;
    background: #c4c4c4;
  }
`;

export const RightSection = styled.div`
  width: calc(100% - 33%);
  min-width: 365px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .class-info {
    display: flex;
    justify-content: center;
    gap: 7%;
  }
  .latest {
    color: #000;
    font-weight: 600;
  }
`;
