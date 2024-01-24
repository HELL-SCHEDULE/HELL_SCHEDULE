import styled from 'styled-components';

export const MypageStyle = styled.div`
  height: 100%;
  margin: 0 3%;
`;

export const MyBasicInfo = styled.div`
  height: 17%;
  padding: 3% 0;
  display: flex;
  align-items: start;
  width: 100%;
  gap: 5%;

  .profile-wrapper {
    width: 18%;
    background: #f4f4f4;
    aspect-ratio: 1/1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .basic-info-wrapper {
    height: 100%;
    color: #aaaaaa;
    display: flex;
    flex-direction: column;
    gap: 2%;

    & > div:first-child {
      color: #000;
    }
  }
  .strong {
    font-weight: 600;
  }
`;

export const SelectCenter = styled.div`
  height: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5% 0;
  & > div:last-child {
    color: #041f86;
    cursor: pointer;
  }
`;

export const MyInfo = styled.div`
  height: 26%;
  margin-bottom: 9%;
  .title {
    color: #aaaaaa;
    height: 20%;
    font-size: 12px;
    margin-bottom: 1%;
  }
  .info-list {
    height: 72%;
    background: #f4f4f4;
    border-radius: 8px;
    padding: 0 3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .info-list-item {
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #aaaaaa;
    cursor: pointer;
  }
  .info-list-item:last-child {
    border-bottom: none;
  }
`;

export const MyInfoModify = styled.div`
  height: 35.2%;
  .title {
    color: #aaaaaa;
    height: 14.6%;
    font-size: 12px;
    margin-bottom: 1%;
  }
  .info-list {
    height: 80.8%;
    background: #f4f4f4;
    border-radius: 8px;
    padding: 0 3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .info-list-item {
    height: 33%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #aaaaaa;
    cursor: pointer;
  }
  .info-list-item:last-child {
    border-bottom: none;
  }
`;
