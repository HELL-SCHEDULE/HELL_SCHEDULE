import styled from 'styled-components';

export const FilterSection = styled.div`
  width: 30.6%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 6%;
  position: absolute;
  left: 0;

  .filter-date {
    width: 34.2%;
    height: 84%;
    border-radius: 12px;
    border: 1px solid var(--2, #041f86);
    cursor: pointer;
    padding: 3% 2%;
  }
  .filter-wrapper {
    width: 34.2%;
    height: 100%;
  }
`;
