import styled from 'styled-components';

export const Layout = styled.div`
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  @media screen and (min-width: 768px) {
    // background: yellow;
    width: 345px;
    aspect-ratio: 1/1.7;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: auto;
  }
  @media screen and (max-width: 767px) {
    // background: red;
    width: 100vw;
    height: 100vh;
  }
`;
