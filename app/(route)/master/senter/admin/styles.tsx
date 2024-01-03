import { PageContent } from '@/app/_layout/WebLayout/styles';
import styled from 'styled-components';

export const AdminPageContent = styled(PageContent)`
  border-radius: 12px;
  border: 1px solid #c4c4c4;
  padding: 1.3% 2.6%;
  display: flex;
  font-size: 16px;
  .btn {
    width: 16%;
    border: none;
    border-radius: 8px;
    background: #041f86;
    color: white;

    @media all and (min-width: 1024px) and (max-width: 1919px) {
      font-size: 12px;
    }
  }
  @media all and (min-width: 1024px) and (max-width: 1919px) {
    font-size: 14px;
  }
`;

export const TitleSection = styled.section`
  width: 16%;
  padding-top: 1.75%;
  display: flex;
  flex-direction: column;
  gap: 11.5%;
`;

export const InfoModifySection = styled.section`
  width: 56%;
  height: 100%;
  min-height: 340px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 1.1%;

  .email {
    width: 35% !important;
  }
  .address {
    width: 64.8%;
  }
  .count {
    width: 16.3%;
  }
  .input-content {
    width: 50% !important;
    position: relative;
  }
  .look-label {
    width: calc(100% / 2 - 22%);
    display: flex;
    align-items: center;
    color: var(--input-border-color, #767676);
    font-size: 14px;
    @media all and (min-width: 1024px) and (max-width: 1919px) {
      font-size: 12px;
    }
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
  gap: 4%;
  .main-title {
    width: 20%;
    color: #61646b;
    font-weight: 600;
  }
  .input-title {
    width: 10%;
    min-width: 75px;
  }
`;
export const ButtonSection = styled.div`
  height: 5.8%;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 7%;
  gap: 3%;

  & > button {
    width: 12.3%;
    height: 100%;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;

    @media all and (min-width: 1024px) and (max-width: 1919px) {
      font-size: 12px;
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
