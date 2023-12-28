import styled from 'styled-components';

interface Props {
  grid: string;
}
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

export const Content = styled.div<Props>`
  width: 100%;
  height: 95%;
  display: grid;
  grid-template-columns: ${(props) =>
    props.grid === 'instructor' ? 'repeat(4, 1fr)' : 'repeat(5, 1fr)'};
  grid-gap: ${(props) => (props.grid === 'instructor' ? '6.8%;' : '4.1%')};

  @media all and (min-width: 1490px) and (max-width: 1919px) {
    grid-template-columns: ${(props) =>
      props.grid === 'instructor' ? 'repeat(4, 1fr)' : 'repeat(5, 1fr)'};
    grid-gap: ${(props) => (props.grid === 'instructor' ? '6.8%;' : '4.1%')};
  }
  @media all and (min-width: 1024px) and (max-width: 1489px) {
    grid-template-columns: ${(props) =>
      props.grid === 'instructor' ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'};
    grid-gap: ${(props) => (props.grid === 'instructor' ? '10%;' : '8.1%')};
  }
`;
