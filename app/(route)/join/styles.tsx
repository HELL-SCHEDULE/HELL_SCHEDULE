import styled from 'styled-components';

export const JoinForm = styled.div`
  width: calc(100% - 62%);
  padding: 1.4% 8.7%;
  .form-title {
    text-align: center;
    margin-top: 10.6%;
    margin-bottom: 10.6%;
    font-weight: 500;
    font-size: 22px;
    height: 5%;
  }
  .global-input {
    height: 21.2%;
    margin-top: 5.1%;
  }

  .error-message {
    margin-top: 1.1%;
  }
  @media all and (min-width: 1024px) and (max-width: 1920px) {
    width: 38%;
    // background: yellow;
    .form-title {
      font-size: 20px;
    }
    .global-input {
      height: 21.2%;
      margin-top: 5.1%;
    }
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 100vw !important;
    padding: 4.4% 15.7%;

    // background: blue;
    .form-title {
      font-size: 20px;
      margin-top: 8.6%;
      margin-bottom: 8.6%;
    }
    .global-input {
      height: 18.9%;
      // margin-top: 4%;
    }
  }

  @media all and (max-width: 767px) {
    width: 100vw !important;
    padding: 1.4% 13.7%;
    & > .form-title {
      font-size: 16px;
      margin-top: 8.6%;
      margin-bottom: 8.6%;
    }
    .global-input {
      height: 21.2%;
      // margin-top: 3%;
    }
  }
`;

export const BasicForm = styled.div`
  height: 23%;
  .id-check {
    display: flex;
    gap: 5%;
    height: 21.2%;
    & > .id {
      width: 69.2%;
      height: 100%;
      margin: 0;
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
    }
  }
  @media all and (min-width: 1024px) and (max-width: 1920px) {
    .id-check {
      height: 21.2%;
    }
    button {
      font-size: 14px !important;
    }
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    .id-check {
      height: 18.9%;
    }
    button {
      font-size: 16px !important;
    }
  }

  @media all and (max-width: 767px) {
    .id-check {
      height: 20.9%;
    }
    button {
      font-size: 14px !important;
    }
  }
`;

export const ChoiceUser = styled.div`
  width: 100%;
  height: 4.4%;
  display: flex;
  & > div {
    width: calc(100% / 3);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .user-type {
    color: #aaa;
    font-size: 14px;
    border-bottom: 1px solid #878787;
    border-left: 1px solid #878787;
    background: #f4f4f4;
    cursor:pointer;
  }
  .user-type:first-of-type {
    border-left: none;
  }
  .select {
    color: #878787;
    background: white;
    border-top: 1px solid #878787;
    border-right: 1px solid #878787;
    border-left: 1px solid #878787 !important;
  }
  @media all and (min-width: 1024px) and (max-width: 1920px) {
    .user-type {
        font-size: 14px;
    }
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    .user-type {
      font-size: 16px;
  }

  @media all and (max-width: 767px) {
    .user-type {
        font-size: 14px;
    }
  }
`;

export const UserForm = styled.div`
  height: 48%;
  padding: 5.1% 0;
`;
