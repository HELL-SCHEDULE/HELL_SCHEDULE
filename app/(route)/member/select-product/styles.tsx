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
`;

export const ContentHeader = styled.div`
  height: 12%;
  margin: 0 3%;
  display: flex;
  align-items: center;
  font-weight: 600;
`;

export const SelectCenter = styled.div`
  height: 5.35%;
  margin: 0 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f4f4f4;
  color: #615e5e;
  border-radius: 8px;
  padding: 2% 4%;
  padding-right: 0;
  font-size: 12px;
  & > button {
    width: 16%;
    background: none;
    border: none;
    border-left: 1px solid gray;
    font-size: 12px;
    color: #464444;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const ProductsWrapper = styled.div`
  height: calc(100% - 24.53%);
  margin: 0 3%;
  padding: 2% 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 4%;
  &::-webkit-scrollbar {
    width: 8px; /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #c4c4c4; /* 스크롤바의 색상 */

    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #e5e5e5; /*스크롤바 뒷 배경 색상*/
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
