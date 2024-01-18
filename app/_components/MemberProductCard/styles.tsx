import styled from 'styled-components';

export const MemberProductCardStyle = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 5%;
  border-radius: 12px;
  background: linear-gradient(
    99deg,
    rgba(18, 52, 184, 0.86) 0%,
    rgba(122, 18, 254, 0.75) 51.04%,
    rgba(172, 7, 250, 0.52) 97.39%
  );
`;
export const TopSection = styled.div`
  height: 75%;
  padding: 0 5%;
  padding-bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px dashed white;
  color: white;
  letter-spacing: 1px;
  .product-name {
    font-size: 16px;
    font-weight: 600;
  }
  .product-instructor {
    transform: translateY(-40%);
  }
  .product-period {
  }
`;
export const BottomSection = styled.div`
  height: 25%;
  display: flex;
  color: white;
  font-size: 12px;
  .section-item {
    display: flex;
    width: calc(100% / 3);
    gap: 6%;
    padding: 0 5%;
    border-right: 1px dashed white;
    & > div:first-child {
      width: 70%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    & > div:nth-of-type(2) {
      width: 20%;
      height: 100%;
      display: flex;
      align-items: center;
    }
    &:nth-of-type(3) {
      border-right: none;
      & > div:first-child {
        width: 40%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      & > div:nth-of-type(2) {
        width: 60%;
        height: 100%;
        display: flex;
        align-items: center;
      }
    }
  }
`;
