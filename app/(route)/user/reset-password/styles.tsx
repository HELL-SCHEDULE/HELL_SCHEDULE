import styled from 'styled-components';

export const ResetPwForm = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  & > p {
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
      margin-bottom: 8%;
      position: relative;
    }
    & > div {
      min-width: 94px;
      margin-right: 5%;
    }
  }
  .global-input {
    width: 72%;
    height: 100%;
    & > div {
      min-width: 100px;
    }
  }
  .error-message {
    margin: 1.4% 0;
    color: red;
    position: absolute;
    bottom: -37%;
    left: 29%;
  }

  &>span{
    position: absolute;
    bottom: 0;
    right: -5%;
    display: flex;
    align-items: center;
    font-size: 20px;
    width: 27%;
    min-width: 123px;
    & > img {
      margin-right: 5%;
    }
    @media all and (min-width: 1024px) and (max-width: 1920px) {
      font-size: 16px;
    }
    @media all and (max-width: 767px) {
      font-size: 14px;
    }
}
  }
  @media all and (max-width: 767px) {
    p {
      font-size: 12px;
    }
  }
`;
