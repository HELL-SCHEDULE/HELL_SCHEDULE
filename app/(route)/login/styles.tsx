import styled from 'styled-components';

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8%;
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
