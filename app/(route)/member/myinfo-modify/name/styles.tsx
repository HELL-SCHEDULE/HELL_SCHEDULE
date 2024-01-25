import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  font-size: 14px;
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

export const PageContent = styled.div`
  height: calc(100% - 7%);
  position: relative;
`;

export const ProfileImgModify = styled.div`
  height: 20%;
  position: relative;
  display: flex;
  width: 100%;
  padding: 5% 3%;
  .img {
    aspect-ratio: 1/1;
    border-radius: 50%;
    background: #f4f4f4;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modify-button {
    position: absolute;
    left: 20%;
    bottom: 16%;
    width: 8%;
    aspect-ratio: 1/1;
    background: #041f8682;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const NameModify = styled.div`
  height: 6%;
  margin: 0 3%;
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > input {
    border: none;
    outline: none;
  }
`;
export const SaveButtonWrapper = styled.div`
  width: 100%;
  height: 7%;
  position: absolute;
  bottom: 0;
  & > button {
    width: 100%;
    height: 100%;
    background: #041f86;
    border: 1px solid #041f86;
    color: white;
    cursor: pointer;
    :hover {
      background: white;
      color: #041f86;
    }
  }
`;
