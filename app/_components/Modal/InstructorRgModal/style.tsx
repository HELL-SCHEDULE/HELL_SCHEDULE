import { ModalHeader } from '@/app/_layout/ModalLayout/styles';
import styled from 'styled-components';

export const InstructorRegisterModal = styled.div`
  width: 21.7%;
  min-width: 362px;
  height: 32.5%;
  min-height: 351px;
  padding: 1.41% 1.1%;
  border-radius: 12px;
  border: 2px solid #a9a9a9;
  background: white;
`;

export const InstructorRgModalHeader = styled(ModalHeader)`
  height: 8%;
`;

export const InstructorRgModalContent = styled.div`
  height: calc(100% - 8% - 7px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InstructorInfo = styled.div`
  width: 100%;
  height: 60.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonSection = styled.div`
  width: 100%;
  height: 32%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > button {
    height: 43%;
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
