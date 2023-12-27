import styled from 'styled-components';

export const PageContentWrpper = styled.div`
  height: calc(100% - 7.42%);
  min-height: 700px;
  padding: 1.95% 3.2%;
  display: flex;
  flex-direction: column;
  gap: 2%;
`;

export const PageContent = styled.div`
  height: 83%;
  font-size: 16px;
  padding-top: 1.4%;

  & > table {
    width: 100%;
    height: 95%;
  }
  @media all and (min-width: 1024px) and (max-width: 1919px) {
    font-size: 14px;
  }
`;
