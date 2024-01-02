import { PageContent } from '@/app/_layout/WebLayout/styles';
import styled from 'styled-components';

export const AdminPageContent = styled(PageContent)`
  border-radius: 12px;
  border: 1px solid #c4c4c4;
  padding: 1.3% 2.6%;

  .btn {
    width: 16%;
    border: none;
    border-radius: 8px;
    background: #041f86;
    color: white;
  }
`;

export const CertificSection = styled.section`
  width: 50%;
  height: 13.5%;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1%;
  padding-bottom: 1.86%;
  position: relative;

  .main-title {
    width: 39.5%;
    color: #61646b;
    font-size: 16px;
    font-weight: 600;
  }
  .input-content {
    gap: 3% !important;
  }
  .email {
    width: 35% !important;
  }
  &::after {
    display: block;
    content: '';
    position: absolute;
    left: 1.5%;
    bottom: 0px;
    height: 0.5px;
    width: 96.3%;
    background: #afb1b6;
  }
`;

export const InfoModifySection = styled.section`
  width: 50%;
  height: calc(100% - 13.5%);
  min-height: 340px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 1.86%;

  .main-title {
    width: 39.5%;
    color: #61646b;
    font-size: 16px;
    font-weight: 600;
  }
  .address {
    width: 64.8%;
  }
  .count {
    width: 24.5%;
  }
  .input-content {
    position: relative;
  }
  .look-label {
    width: calc(100% / 2 - 22%);
    display: flex;
    align-items: center;
    color: var(--input-border-color, #767676);
    font-size: 14px;
  }
  .error-message {
    position: absolute;
    top: 98%;
  }
`;

export const InfoModifyContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5%;
`;
export const ButtonSection = styled.div`
  height: 7.5%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 9%;
  gap: 3%;

  & > button {
    width: 19.2%;
    height: 100%;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;

    @media all and (min-width: 1024px) and (max-width: 1919px) {
      font-size: 14px;
    }
  }

  .candel {
    color: white;
    border: 1px solid #041f86;
    background: var(--2, #041f86);
  }
  .modify {
    color: #041f86;
    border: 1px solid #041f86;
    background: white;
  }
`;
