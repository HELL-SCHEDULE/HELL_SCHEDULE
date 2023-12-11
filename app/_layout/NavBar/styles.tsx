import styled from 'styled-components';

export const NavBarWapper = styled.div`
  width: 100%;
  height: 7.42%;
  padding: 0 2.1%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;

  .nav-bar-logo {
    width: 3.27%;
    aspect-ratio: 1/1;
    background: #d9d9d9;
  }

  .nav-list {
    list-style: none;
    display: flex;
    width: 48.68%;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
  }

  .nav-list .focus {
    font-weight: 600;
  }
`;
