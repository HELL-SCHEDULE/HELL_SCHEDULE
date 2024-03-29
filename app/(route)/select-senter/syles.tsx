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
export const PageInfo = styled.div`
  height: 30%;
  padding: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4%;

  .description {
    font-weight: 600;
    line-height: 159%;
    margin-top: 3%;
    position: relative;
  }
  .center-delete {
    color: red;
    font-size: 12px;
    font-weight: 400;
    position: absolute;
    top: 26%;
    right: 4%;
    cursor: pointer;
  }
`;
export const SenterButtonWrapper = styled.div`
  height: 56%;
  padding: 3%;
  display: flex;
  flex-direction: column;
  gap: 4%;
  overflow-y: auto;
  & > div {
    width: 100%;
    height: 13%;
    display: flex;
    gap: 2%;
    justify-content: center;
  }
  .center-button {
    width: 100%;
    height: 100%;
    background: white;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    color: #767676;
    // cursor: pointer;
    // :hover {
    //   color: #041f86;
    //   border: 1px solid #041f86;
    // }
  }
  .delete {
    width: 11%;
    display: none;
  }
  .visible {
    width: 11%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    cursor: pointer;
  }
`;
export const ChoiceButtonWrapper = styled.div`
  height: 7%;
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
