import styled from 'styled-components';

export const ResetPwForm = styled.div`
  height: 100%;
  width: 100%;
  p {
    color: #878787;
    font-size: 14px;
    margin-bottom: 3.5%;
  }
  .input-wrppaer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 17.3%;
    margin-bottom: 7.5%;

    &:nth-of-type(2) {
      margin-bottom: 0;
    }
  }
  .account-input {
    width: 72%;
    max-width: 202px;
    height: 100%;
    & > div {
      min-width: 100px;
    }
  }
  .error-message {
    margin: 1.4% 0;
    color: red;
  }

  @media all and (max-width: 767px) {
    p {
      font-size: 12px;
    }
  }
`;
