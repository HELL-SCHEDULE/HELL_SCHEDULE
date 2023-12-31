import styled from 'styled-components';

export const FindAccountType = styled.div`
  display: flex;
  width: 100%;
  height: 14.52%;
  .find-type {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #aaa;
    font-size: 18px;
    border-bottom: 1px solid #878787;
    background: #f4f4f4;
  }
  .select {
    color: #878787;
    background: white;
    border-top: 1px solid #878787;
    border-right: 1px solid #878787;
    border-left: 1px solid #878787;
  }
  @media all and (min-width: 1024px) and (max-width: 1920px) {
    .find-type {
      font-size: 16px;
    }
  }
  @media all and (max-width: 767px) {
    .find-type {
      font-size: 14px;
    }
  }
`;

export const FindAccountContent = styled.div`
  padding-top: 8.2%;
  height: 87.8%;
`;
