import styled from 'styled-components';

export const ModalLayoutStyles = styled.div`
  z-index: 99;
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(11, 19, 30, 0.37);
`;

export const ModalHeader = styled.header`
  height: 6.8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 7px;
`;
