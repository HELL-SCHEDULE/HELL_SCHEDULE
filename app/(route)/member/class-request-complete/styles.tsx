import styled from 'styled-components';

export const ClassRequestCompleteStyle = styled.div`
  height: 100%;
`;

export const PageHeader = styled.div`
  height: 7%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4%;
  padding: 0 3%;
  & > img {
    cursor: pointer;
  }
`;

export const PageDescription = styled.div`
  height: 24%;
  padding: 4% 3%;
  display: flex;
  flex-direction: column;
  gap: 16%;
  font-weight: 600;
`;

export const ClassInfoContent = styled.div`
  height: calc(100% - 24% - 8% - 7%);
`;

export const ClassInfoWrapper = styled.div`
  height: 40%;
  margin: 0 3%;
  background: #f4f4f4;
  border-radius: 8px;
  font-size: 12px;
`;

export const TopSection = styled.div`
  height: 50%;
  padding: 4%;
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: column;
  gap: 20%;
  .class-name {
    height: 40%;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 14px;
    & > button {
      font-size: 10px;
      width: 16%;
      height: 110%;
    }
  }
  .class-info {
    height: 40%;
    display: flex;
    gap: 6%;
    & > div:first-child {
      position: relative;
    }
    & > div:first-child:after {
      content: '';
      display: block;
      width: 1px;
      height: 78%;
      background: gray;
      position: absolute;
      top: 8%;
      right: -9%;
    }
  }
  .class-info-instructor {
    display: flex;
    gap: 3%;
    width: 53%;
    & > div:first-child {
      background: white;
      width: 12%;
      aspect-ratio: 1/1;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
  }
`;

export const BottomSection = styled.div`
  height: 50%;
  padding: 5% 4%;
  display: flex;
  flex-direction: column;
  gap: 14%;
  .class-detail-info {
    display: flex;
    justify-content: space-between;
  }
`;

export const BtnSection = styled.div`
  height: 8%;
  & > button {
    width: 100%;
    height: 100%;
    background: #d9d9d9;
    border: 1px solid #d9d9d9;
    color: white;
    cursor: pointer;
  }
`;
