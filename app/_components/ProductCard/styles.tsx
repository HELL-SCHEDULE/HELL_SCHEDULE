import styled from 'styled-components';

export const ProductCardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 62%;
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

export const ProductCardContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 12px;
  box-shadow: 3px 4px 16px 0px rgba(0, 0, 0, 0.25);
`;

export const TopSection = styled.div`
  width: 100%;
  height: 67.2%;
  padding: 10.5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  border-radius: 12px 12px 0px 0px;
  background: linear-gradient(
    99deg,
    rgba(18, 52, 184, 0.86) 0%,
    rgba(122, 18, 254, 0.75) 51.04%,
    rgba(172, 7, 250, 0.52) 97.39%
  );
  color: white;
  font-weight: 600;
  .name {
    font-size: 20px;
    @media all and (min-width: 1024px) and (max-width: 1919px) {
      font-size: 18px;
    }
  }
`;

export const BottomSection = styled.div`
  height: 32.8%;
  display: flex;
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
