import styled from 'styled-components';

interface Props {
  type: string;
}

export const ProductCardWrapper = styled.div<Props>`
  position: relative;
  width: 100%;
  height: ${(props) => (props.type == '상품 관리' ? '0' : '100%')};
  padding-bottom: ${(props) => (props.type == '상품 관리' ? '62%' : '0')};
  font-size: ${(props) => (props.type == '상품 관리' ? '16px;' : '16px;')};
  @media all and (min-width: 1024px) and (max-width: 1919px) {
    font-size: ${(props) => (props.type == '상품 관리' ? '14px;' : '12px;')};
  }
  .check-box {
    width: 10%;
    aspect-ratio: 1/1;
    position: absolute;
    right: 0;
    top: -7%;
    display: none;
  }
  .active {
    display: inline;
  }
`;

export const ProductCardContent = styled.div<Props>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 12px;
  box-shadow: 3px 4px 16px 0px rgba(0, 0, 0, 0.25);
`;

export const TopSection = styled.div<Props>`
  width: 100%;
  height: ${(props) => (props.type == '상품 관리' ? '67.2%' : '100%')};
  padding: 10.5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  border-radius: ${(props) =>
    props.type == '상품 관리' ? '12px 12px 0px 0px' : '12px'};
  background: linear-gradient(
    99deg,
    rgba(18, 52, 184, 0.86) 0%,
    rgba(122, 18, 254, 0.75) 51.04%,
    rgba(172, 7, 250, 0.52) 97.39%
  );
  color: white;
  font-weight: 600;
  .name {
    font-size: ${(props) => (props.type == '상품 관리' ? '20px;' : '18px;')};
    @media all and (min-width: 1024px) and (max-width: 1919px) {
      font-size: ${(props) => (props.type == '상품 관리' ? '18px;' : '16px;')};
    }
  }
`;

export const BottomSection = styled.div<Props>`
  height: 32.8%;
  display: ${(props) => (props.type == '상품 관리' ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: center;
  padding: 5% 8% 5% 10.5%;
  font-weight: 600;
  line-height: 195%;

  & > div {
    height: 100%;
  }
  .icon {
    cursor: pointer;
  }
`;
