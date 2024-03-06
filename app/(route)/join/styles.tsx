import styled from 'styled-components';

export const BasicForm = styled.div`
  height: 57%;
  .id-check {
    display: flex;
    gap: 5%;
    height: 24.4%;
    & > .id {
      width: 69.2%;
      height: 100%;
    }
    & > button {
      width: 26%;
      min-width: 80px;
      border-radius: 8px;
      border: 1px solid #fff;
      background: var(--2, #041f86);
      color: white;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      cursor: pointer;
    }
  }
  .password {
    height: 24.4%;
    margin-bottom: 6%;
  }
  .password-check {
    height: 24.4%;
  }
  .success-message {
    height: 8%;
    visibility: hidden;
  }
  .true {
    visibility: visible;
  }

  @media all and (min-width: 1024px) and (max-width: 1920px) {
    .password {
      margin-bottom: 6%;
    }
    button {
      font-size: 14px !important;
    }
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    .password {
      margin-bottom: 3%;
    }
    button {
      font-size: 16px !important;
    }
  }

  @media all and (max-width: 767px) {
    .password {
      margin-bottom: 4%;
    }
    button {
      font-size: 14px !important;
    }
  }
`;

export const KaKaoButton = styled.button`
  background: #fae500;
  border: 1px solid #fae500;
  border-radius: 8px;
  color: #181602;
  height: 13.9%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2%;
  margin-top: 4%;
`;

export const Description = styled.span`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 6px;
  height: 8%;
  color: black;
  font-size: 14px;
  @media all and (min-width: 1024px) and (max-width: 1920px) {
    font-size: 10px !important;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: 10px !important;
  }

  @media all and (max-width: 767px) {
    font-size: 10px !important;
  }
  .strong {
    color: #041f86;
  }
`;
