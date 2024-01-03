import { PageContent } from '@/app/_layout/WebLayout/styles';
import styled from 'styled-components';

export const DeletePageContent = styled(PageContent)`
  border-radius: 12px;
  border: 1px solid #c4c4c4;
  padding: 1.3% 2.6%;
  padding-top: 2.6%;
  font-size: 16px;
  @media all and (min-width: 1024px) and (max-width: 1919px) {
    font-size: 14px;
  }
`;

export const CertificateSection = styled.div`
  width: 55%;
  min-width: 750px;
  height: 33%;
  position: relative;
  padding-bottom: 3%;

  .error-message {
    height: 10%;
    color: var(--subtle-dark, #61646b) !important;
    font-size: 16px !important;
    @media all and (min-width: 1024px) and (max-width: 1919px) {
      font-size: 14px !important;
    }
  }

  &::after {
    content: '';
    position: absolute;
    left: 0.9%;
    bottom: 0px;
    height: 1px;
    width: 94%;
    background: #afb1b6;
  }
`;

export const CertificateContent = styled.div`
  display: flex;
  height: 90%;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4%;

  .main-title {
    width: 20%;
    color: #61646b;
    font-weight: 600;
  }
  .certificate-input {
    width: 56.3%;
    height: 60%;
  }
  .input-title {
    @media all and (min-width: 1024px) and (max-width: 1919px) {
      font-size: 14px !important;
    }
  }
  .button-section {
    width: 15%;
    height: 60%;
    position: relative;
  }
  .button-section > button {
    border: none;
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    background: #041f86;
    font-size: 14px;
    color: white;
    width: 72%;
    height: 39%;
    min-height: 30px;
    @media all and (min-width: 1024px) and (max-width: 1919px) {
      font-size: 12px !important;
    }
  }
`;

export const WarningSection = styled.div`
  width: 55%;
  min-width: 750px;
  height: 67%;
  padding-top: 2.7%;
  display: flex;
  align-items: end;
`;

export const WarningContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10%;
`;

export const WarningList = styled.div`
  height: 25%;
  display: flex;
  align-items: center;
  gap: 0.6%;

  &:last-child {
    height: 9%;
    margin-top: 10%;
    position: relative;
  }

  input {
    aspect-ratio: 1/1;
    width: 2%;
  }
  .warning-item {
    width: 100%;

    height: 100%;
    position: relative;
  }
  .warning-title {
    height: 50%;
    color: var(--subtle-dark, #61646b);
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 1.3%;
  }
  .warning-content {
    position: absolute;
    left: 3.3%;
  }
  .button-section {
    width: 11.9%;
    height: 100%;
    min-height: 30px;
    position: absolute;
    right: 0;
    top: 0;
  }
  .button-section > button {
    border-radius: 8px;
    border: none;
    background: #041f86;
    font-size: 16px;
    color: white;
    width: 100%;
    height: 100%;
    @media all and (min-width: 1024px) and (max-width: 1919px) {
      font-size: 12px !important;
    }
  }
`;
