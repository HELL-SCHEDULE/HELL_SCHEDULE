import styled from 'styled-components';

export const WaitToastModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(11, 19, 30, 0.37);
  z-index: 99;
`;

export const WaitToastModalStyle = styled.div`
  height: 62%;
  background: white;
  position: absolute;
  width: 100%;
  bottom: 0;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const WaitToastModalHeader = styled.div`
  display: flex;
  padding: 6% 4%;
  justify-content: space-between;
  height: 28%;
`;

export const WaitToastModalContent = styled.div`
  height: 72%;
`;
export const DescriptionSection = styled.div`
  padding: 0 4%;
  height: 85.4%;
  padding-bottom: 6%;
  .title {
    font-weight: 600;
    height: 20%;
  }
  .class-description {
    height: 80%;
    padding-top: 5%;
  }
  .class-instructor-info {
    display: flex;
    align-items: center;
    gap: 5%;
    height: 36%;
  }
  .profile-img {
    width: 16%;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #f4f4f4;
  }
  .profile-info {
    height: 92%;
    display: flex;
    flex-direction: column;
    gap: 11%;
  }
  .class-name {
    font-weight: 600;
  }
  .class-instructor {
    font-size: 12px;
  }
  .class-infomation {
    height: 64%;
    padding-top: 8%;
    & > div:first-child {
      font-size: 12px;
      height: 40%;
    }
    .class-time {
      height: 58%;
      background: #f4f4f4;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0 5%;
      font-size: 15px;
      font-weight: 600;
    }
  }
`;

export const ButtonSection = styled.div`
  height: 14.6%;
  border-top: 1px solid gray;
  & > button {
    width: 50%;
    height: 100%;
    border: none;
    :first-child {
      background: white;
      color: #61646b;
    }
    :last-child {
      background: #041f86;
      color: white;
    }
  }
`;
