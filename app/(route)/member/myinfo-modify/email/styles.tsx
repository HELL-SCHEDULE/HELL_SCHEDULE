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

export const PageDescription = styled.div`
  height: 14%;
  display: flex;
  align-items: center;
  padding: 0 3%;
  font-weight: 600;
`;

export const ModifyContent = styled.div`
  height: 32%;
  display: flex;
  flex-direction: column;
  gap: 14%;
  padding: 0 3%;
  .modify-content-item {
    height: 43%;
  }
  .modify-input {
    height: 48%;
    border-bottom: 1px solid gray;
    margin-top: 1%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  input {
    border: none;
    outline: none;
    width: 90%;
    font-size: 11px;
  }
  .error {
    color: red;
    font-size: 12px;
    display: none;
  }
`;

export const ModifyButtonWrapper = styled.div`
  width: 100%;
  height: 7%;
  position: absolute;
  bottom: 0;
  & > button {
    width: 100%;
    height: 100%;
    background: #d9d9d9;
    border: 1px solid #d9d9d9;
    color: white;
    cursor: pointer;
    :hover {
      background: #61646b;
    }
  }
`;
