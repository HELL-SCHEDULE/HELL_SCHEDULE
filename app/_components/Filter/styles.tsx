import styled from 'styled-components';

export const FilterStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 14px;
  @media all and (min-width: 1024px) and (max-width: 1919px) {
    font-size: 12px;
  }
  .select {
    display: inline-block;
    width: 100%;
    min-width: 120px;
    height: 84%;
    border-radius: 12px;
    border: 1px solid var(--2, #041f86);
    cursor: pointer;
  }
  .select .selected {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 3% 2%;
  }
  .select .selected .selected-value {
    width: 85%;
    display: flex;
    align-items: center;
  }
  .select .selected .arrow {
    width: 15%;
  }
  .select > ul {
    display: none;
    width: 6.4%;
    min-width: 120px;
    list-style: none;
    padding-left: 0px;
    border: 1px solid var(--2, #041f86);
    position: absolute;
    background: #fff;
    border-top: none;
    margin-top: 0.2%;
    cursor: pointer;
  }
  .select .active {
    display: initial;
  }
  .select > ul > li {
    padding: 3% 2%;
  }
  .select ul li:hover {
    background: #e7edfc;
  }
  .select .focus {
    background: #e7edfc;
  }
`;
