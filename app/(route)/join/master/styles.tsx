import { ButtonStyle } from '@/app/_components/Button/styles';
import styled from 'styled-components';

export const MasterJoinWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const SenterImgSection = styled.section`
  width: 62%;
  background: #e7edfc;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    display: none;
  }
  @media all and (max-width: 767px) {
    display: none;
  }
`;

export const MasterFormSection = styled.section`
  position: relative;
  width: calc(100% - 62% - 14%);
  margin: 3% auto;

  .title {
    text-align: center;
    font-size: 22px;
    margin-bottom: 11%;
    @media (min-width: 1024px) and (max-width: 1920px) {
      font-size: 20px;
    }
  }
  .global-input {
    width: 100%;
    height: 5.2% !important;
    margin-top: 0 !important;
    margin-bottom: 4.5% !important;
  }
  .btn {
    border-radius: 8px;
    border: 1px solid #fff;
    background: var(--2, #041f86);
    color: white;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    cursor: pointer;
  }
  .next-btn {
    border: none;
    background: #fff;
    color: var(--text-subtle, var(--input-border-color, #767676));
    font-size: 18px;
    font-weight: 600;
    position: absolute;
    right: 0;
    bottom: 0;
    cursor: pointer;
  }

  @media all and (min-width: 1024px) and (max-width: 1920px) {
    .btn {
      font-size: 14px !important;
    }
    .next-btn {
      font-size: 16px !important;
    }
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    margin: 7.5% 12.4%;
    .title {
      font-size: 16px;
    }
    .btn {
      font-size: 16px !important;
    }
    .next-btn {
      font-size: 18px !important;
    }
  }

  @media all and (max-width: 767px) {
    width: 100%;
    margin: 13.5% 12.4%;
    .title {
      font-size: 16px;
    }
    & > .global-input {
      // height: 7.2% !important;
    }
    .btn {
      font-size: 14px !important;
    }
    .next-btn {
      font-size: 14px !important;
    }
  }
`;
export const EmailAuth = styled.div`
  height: 5.2%;
  margin-bottom: 4.5%;
  display: flex;

  & > span {
    display: inline-block;
    text-align: center;
    width: 11%;
  }
  & > button {
    width: calc(100% - 64.8% - 11% - 5%);
    height: 100%;
    margin-left: 5%;
  }
  & > .email {
    width: 32.4%;
    height: 100% !important;
    margin: 0 !important;
    border-radius: 8px;
    border: 1px solid #767676;
    color: #767676;
  }
`;

export const EmailNumberAuth = styled.div`
  height: 5.2%;
  margin-bottom: 4.5%;
  display: flex;
  position: relative;
  & > button {
    width: calc(100% - 64.8% - 11% - 5%);
    height: 100%;
    margin-left: 5%;
  }

  & > .email-number {
    height: 100% !important;
    width: 77.2% !important;
  }
  .error-message {
    position: absolute;
    bottom: -31%;
  }
`;
export const PhoneNumbForm = styled.div`
  height: 5.2%;
  margin-bottom: 4.5%;
  & > span {
    display: inline-block;
    width: 8.9%;
    text-align: center;
  }
  .phone {
    width: 27.4%;
    height: 100% !important;
    margin: 0 !important;
  }
`;
export const AddressSearch = styled.div`
  height: 5.2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4.5%;

  & > .address {
    width: 77.2%;
    height: 100% !important;
    margin: 0 !important;
  }
  & > button {
    width: 19%;
    height: 100%;
  }
`;

export const StartDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5.2%;
  margin-bottom: 4.5%;

  .date {
    width: 65% !important;
    height: 100% !important;
    margin: 0 !important;
  }
  @media (max-width: 767px) {
    & > p {
      font-size: 14px;
    }
  }
`;

export const BusinessNumbAuth = styled.div`
  height: 5.2%;
  margin-bottom: 4.5%;
  display: flex;
  position: relative;

  & > .business {
    width: 77.2%;
    height: 100% !important;
    margin: 0 !important;
  }
  & > button {
    width: 19%;
    height: 100%;
  }
  .error-message {
    height: 35%;
  }
`;

// export const MasterFormSection2 = styled.section`
//   height: 40%;
//   position: relative;
//   font-size: 16px;
//   .prev-btn {
//     border: none;
//     background: #fff;
//     color: var(--text-subtle, var(--input-border-color, #767676));
//     font-size: 16px;
//     font-weight: 600;
//     position: absolute;
//     right: 0;
//     bottom: 0;
//     cursor: pointer;
//   }
//   p {
//     min-width: 100px;
//   }
//   @media all and (min-width: 1024px) and (max-width: 1920px) {
//     font-size: 14px !important;
//     .prev-btn {
//       font-size: 14px !important;
//     }
//   }

//   @media all and (min-width: 768px) and (max-width: 1023px) {
//     font-size: 16px !important;
//     .prev-btn {
//       font-size: 16px !important;
//     }
//   }

//   @media all and (max-width: 767px) {
//     font-size: 14px !important;
//     .prev-btn {
//       font-size: 14px !important;
//     }
//   }
// `;
export const RockerNumbForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5.2%;
  margin-bottom: 4.5%;

  & > div {
    width: 65%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 8%;
  }
  .rocker {
    width: 41%;
    height: 100% !important;
    margin: 0 !important;
  }
  @media (max-width: 767px) {
    & > p,
    span {
      font-size: 14px;
    }
  }
`;
export const MemberClothesForm = styled.div`
  margin-bottom: 10.5%;
  height: 5.2%;
  .clothes-check-warpper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 99.8%;
    width: 100%;
  }

  .clothes-check-warpper > div {
    width: 65%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 8%;
  }
  .clothes-check-warpper > div > label {
    width: calc(100% / 2);
  }
  .price-check {
    margin-right: 10%;
  }
  .error-message {
    height: 35%;
  }
  @media (max-width: 767px) {
    .clothes-check-warpper > p,
    label {
      font-size: 14px;
    }
  }
`;

export const ButtonSection = styled.button`
  background: #041f86;
  color: white;
  height: 6.7%;
  width: 100%;
  display: inline-block;
  border-radius: 8px;
  border: 1px solid #041f86;
  font-size: 22px;
  cursor: pointer;
  // position: absolute;
  // bottom: 0;

  @media all and (min-width: 1024px) and (max-width: 1920px) {
    & {
      font-size: 16px;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    & {
      font-size: 20px;
    }
  }

  @media all and (max-width: 767px) {
    & {
      font-size: 16px;
      margin-top: 15%;
    }
  }
`;
