import styled from 'styled-components';
import { ModalHeader } from '@/app/_layout/ModalLayout/styles';

export const ChoiceUserTypeModalStyle = styled.div`
  width: 21.7%;
  height: 21.9%;
  padding: 1.41% 1.1%;
  border-radius: 12px;
  border: 2px solid #a9a9a9;
  background: white;
`;

export const ChoiceUserTypeModalHeader = styled(ModalHeader)`
  height: 6.8%;
`;

export const ChoiceUserTypeModalContent = styled.div`
  height: calc(100% - 6.8%);
  .user-type {
    display: flex;
    gap: 5%;
    height: 30%;
    margin-top: 10%;
    margin-bottom: 8%;
    & > button {
      width: calc(100% / 3);
      border-radius: 8px;
      border: 1px solid #878787;
      color: #878787;
      background: #fff;
    }
    .select {
      border: 1px solid #041f86;
      color: 041f86;
    }
  }
  .complete {
    width: 100%;
    height: 30%;
    background: #041f86;
    border-radius: 8px;
    border: 1px solid #041f86;
    color: #fff;
  }
`;
