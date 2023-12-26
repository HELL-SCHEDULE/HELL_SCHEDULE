import { ModalHeader } from '@/app/_layout/ModalLayout/styles';
import styled from 'styled-components';

export const MemberRegisterModal = styled.div`
  width: 28.65%;
  min-width: 450px;
  height: 69.2%;
  min-height: 640px;
  padding: 1.1% 1.41%;
  border-radius: 12px;
  border: 2px solid #a9a9a9;
  background: white;
`;

export const MemberRgModalHeader = styled(ModalHeader)`
  height: 6.8%;
`;

export const MemberRgModalContent = styled.div`
  height: calc(100% - 6.8% - 7px);
`;

export const MemberInfo = styled.section`
  height: 26.6%;
  .info-title {
    width: 18.5%;
    height: 20%;
    color: #61646b;
    border-bottom: 1px solid var(--2, #041f86);
    font-size: 16px;
    font-weight: 600;
    @media all and (min-width: 1024px) and (max-width: 1919px) {
      font-size: 14px;
    }
  }
`;

export const MemberInfoWrapper = styled.div`
  height: calc(100% - 20%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4%;
  .cam {
    width: 24.4%;
    aspect-ratio: 1/1;
    background: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .info-input {
    width: 71.6%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 13%;
  }
`;

interface Props {
  height: string;
}

export const InputWrapper = styled.div<Props>`
  width: 100%;
  height: ${(props) => props?.height};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .input-title {
    display: inline-block;
    color: #61646b;
    font-size: 16px;
    font-weight: 400;
    @media all and (min-width: 1024px) and (max-width: 1919px) {
      font-size: 14px;
    }
  }
  .input-content {
    display: flex;
    width: 71%;
    height: 100%;
    gap: 5%;
    font-size: 16px;
    font-weight: 400;
    @media all and (min-width: 1024px) and (max-width: 1919px) {
      font-size: 14px;
    }
  }
  .input {
    border-radius: 8px;
    border: 1px solid var(--white, #d9d9d9);
    background: #fff;
    color: var(--input-border-color, #767676);
    font-size: 14px;
    font-weight: 400;
    @media all and (min-width: 1024px) and (max-width: 1919px) {
      font-size: 12px;
    }
  }
  .mark {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--input-border-color, #767676);
  }
  .check {
    display: flex;
    width: 21%;
    gap: 8%;
  }
  .name {
    width: 100%;
  }
  .phone {
    width: calc(100% / 3);
  }
  .email {
    width: calc(100% / 2);
  }
`;

export const MemberRegisterInfo = styled.section`
  height: 60%;
  .info-title {
    width: 18.5%;
    height: 8.8%;
    color: #61646b;
    border-bottom: 1px solid var(--2, #041f86);
    font-size: 16px;
    font-weight: 600;
    @media all and (min-width: 1024px) and (max-width: 1919px) {
      font-size: 14px;
    }
  }
  .button {
    width: 27%;
    color: white;
    background: #041f86;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    @media all and (min-width: 1024px) and (max-width: 1919px) {
      font-size: 12px;
    }
  }
`;

export const MemberRegisterInfoWrapper = styled.div`
  height: calc(100% - 8.8%);

  .info-input {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 4.4%;
    padding-top: 2%;
  }

  .id {
    width: 41.2%;
  }
  .product {
    width: 73.8%;
  }
  .date {
    width: 33%;
  }
  .instructor {
    width: 33%;
  }
  .rocker {
    width: 33%;
  }
  .look {
    width: 33%;
  }
  .pay-method {
    width: 33%;
  }
  .price {
    width: 33%;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 13.4%;
  padding-top: 4.9%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > button {
    width: 46.1%;
    height: 62%;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    @media all and (min-width: 1024px) and (max-width: 1919px) {
      font-size: 14px;
    }
  }
  .cancel {
    color: #041f86;
    background: #fff;
    border: 1px solid var(--2, #041f86);
  }
  .register {
    color: #fff;
    background: #041f86;
    border: 1px solid var(--2, #041f86);
  }
`;
