import styled from 'styled-components';

export const ProductSelectCardStyle = styled.div`
  border: 1px solid #041f86;
  border-radius: 8px;
  height: 33%;
  min-height: 130px;
  padding: 4%;
  display: flex;
  flex-direction: column;
  gap: 8%;
  cursor: pointer;
`;

export const ProductImgWrapper = styled.div`
  width: 19%;
  height: 32%;
  & > div {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      99deg,
      rgba(18, 52, 184, 0.86) 0%,
      rgba(122, 18, 254, 0.75) 51.04%,
      rgba(172, 7, 250, 0.52) 97.39%
    );
    border-radius: 4px;
  }
`;
export const ProductInfo = styled.div`
  height: 40%;
  & > div:first-child {
    font-weight: 600;
  }
  & > div:nth-child(2) {
    font-size: 12px;
  }
`;

export const ProductDetailInfo = styled.div`
  font-size: 12px;
  color: #464444;
  padding-left: 2%;
  border-left: 2px solid #464444;
  height: 12%;
  display: flex;
  align-items: center;
`;
