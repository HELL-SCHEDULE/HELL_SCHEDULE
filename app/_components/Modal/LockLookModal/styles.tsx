import { ModalHeader } from '@/app/_layout/ModalLayout/styles';
import styled from 'styled-components';

export const LockLookModalStyle = styled.div`
  width: 16.57%;
  min-width: 318px;
  height: 30.85%;
  min-height: 333px;
  padding: 1.1% 1.41%;
  border-radius: 12px;
  border: 2px solid #a9a9a9;
  background: white;
`;

export const LockLookModalHeader = styled(ModalHeader)`
  height: 8%;
`;

export const LockLookModalContent = styled.div`
  height: calc(100% - 8% - 7px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LockLookInfo = styled.div`
  width: 100%;
  height: 74.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .period {
    width: 30%;
  }
  .type {
    width: 50%;
  }
  .price {
    width: 50%;
  }
`;

export const ButtonSection = styled.div`
  width: 100%;
  height: 13.7%;
  display: flex;
  justify-content: flex-end;
  gap: 5%;

  & > button {
    width: 32.7%;
    height: 100%;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    @media all and (min-width: 1024px) and (max-width: 1919px) {
      font-size: 14px;
    }
  }
  .register {
    color: white;
    border: 1px solid #041f86;
    background: var(--2, #041f86);
  }
  .candel {
    color: #041f86;
    border: 1px solid #041f86;
    background: white;
  }
`;
