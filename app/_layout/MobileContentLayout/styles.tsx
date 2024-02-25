import styled from 'styled-components';

export const Header = styled.div`
  height: 7%;
  font-size: 14px;
  padding: 3%;
  font-weight: 600;
`;

export const Content = styled.div`
  height: calc(100% - 17%);
  font-size: 14px;
`;
export const NavBar = styled.div`
  height: 10%;
  font-size: 12px;
  padding: 0 3%;
  border-top: 1px solid #aaaaaa;
  color: #aaaaaa;

  ul {
    width: 100%;
    width: 100%;
    height: 100%;
    list-style: none;
    display: flex;
    gap: 3.5%;
  }
  ul li {
    width: calc(100% / 5);
    height: 100%;
  }
  ul li a {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 2% 0;
  }

  .active {
    color: #041f86;
  }
`;
