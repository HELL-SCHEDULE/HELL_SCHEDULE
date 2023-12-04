import styled from 'styled-components';

export const Layout = styled.div`
  @media screen and (min-width: 768px) {
    background: yellow;
    width: 375px;
    height: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: auto;
  }
  @media screen and (max-width: 767px) {
    background: red;
    width: 100vw;
    height: 100vh;
  }
`;
