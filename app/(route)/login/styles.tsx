import styled from 'styled-components';

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6%;
  height: 100%;
  .global-input {
    height: 17.3%;
  }
  .search-account {
    text-align: end;
    font-size: 16px;
    color: #767676;
    margin-top: -15px;
    cursor: pointer;
  }
  .kakao-login {
    background: #fae500;
    border: 1px solid #fae500;
    border-radius: 8px;
    color: #181602;
    height: 17.3%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2%;
  }
  @media all and (min-width: 1024px) and (max-width: 1920px) {
    .search-account {
      font-size: 12px;
    }
  }
  @media all and (max-width: 767px) {
    .search-account {
      font-size: 12px;
    }
  }
`;
