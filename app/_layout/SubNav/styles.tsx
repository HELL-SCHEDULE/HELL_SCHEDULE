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
    font-size: 18px;
  }
`;

export const ContentHeader = styled.div`
  height: 4.98%;
  min-height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.div`
  width: 90.5%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5%;
`;
