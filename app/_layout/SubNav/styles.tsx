import styled from 'styled-components';

export const SubNavStyles = styled.div`
  width: 7.5%;
  height: 100%;
  font-size: 22px;
  & > ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    gap: 18%;
  }

  & > ul > li {
    width: 50%;
    min-width: max-content;
  }

  .active {
    font-weight: 600;
  }
  @media all and (min-width: 1024px) and (max-width: 1919px) {
    font-size: 16px;
  }
`;

export const ContentHeader = styled.div`
  height: 4.9%;
  min-height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media all and (min-width: 1024px) and (max-width: 1919px) {
    height: 3.98%;
  }
`;

export const Section = styled.div`
  width: 90.5%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  position: relative;
`;

export const RightSection = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 4%;
`;

export const SearchSection = styled.div`
  width: 28.7%;
  min-width: 200px;
  height: 84%;
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
