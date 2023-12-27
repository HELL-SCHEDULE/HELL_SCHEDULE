import styled from 'styled-components';

export const InstructorCardSection = styled.div`
  width: 100%;
  height: 95%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 6.8%;
  @media all and (min-width: 1024px) and (max-width: 1489px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10%;
  }

  @media all and (min-width: 1490px) and (max-width: 1919px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 6.8%;
  }
`;
