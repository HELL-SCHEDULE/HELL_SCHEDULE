import styled from 'styled-components';

export const RightSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 2%;
`;

export const SearchSection = styled.div`
  width: 14.35%;
  min-width: 200px;
  height: 100%;
  display: flex;

  & > input {
    width: 80%;
    height: 100%;
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
    border: 1px solid #c4c4c4;
  }
  & > .icon {
    width: 20%;
    height: 100%;
    border: 1px solid #c4c4c4;
    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;
    border-left: 1px solid #c4c4c4;
  }
`;
export const BtnSection = styled.div`
  width: 7.52%;
  min-width: 100px;
  height: 100%;
  display: flex;
  gap: 9%;
  & > button {
    width: 100%;
    height: 100%;
    color: white;
    background: #041f86;
    border-radius: 8px;
  }
`;
