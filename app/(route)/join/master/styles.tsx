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
  height: 100%;
  position: relative;
  width: calc(100% - 62%);
  padding: 5.95% 7.15%;

  .title{
    text-align: center;
    font-size: 24px;
    margin-bottom: 16%;
}
  }
  .global-input {
    width: 100%;
    height: 5.9% !important;
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
    cursor:pointer;
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
    .btn {
      font-size: 16px !important;
    }
    .next-btn {
      font-size: 18px !important;
    }
  }

  @media all and (max-width: 767px) {
    & > .global-input {
      padding: 2%;
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
  height: 8.2%;
  margin-bottom: 1.1%;
  & > div {
    height: 72.3%;
  }
  & > div > span {
    display: inline-block;
    text-align: center;
    width: 11%;
  }
  & > div > button {
    width: calc(100% - 64.8% - 11% - 5%);
    height: 100%;
    margin-left: 5%;
  }
  & > div > .email {
    width: 32.4%;
    height: 100% !important;
    margin: 0 !important;
    border-radius: 8px;
    border: 1px solid #767676;
    color: #767676;
  }
  .error-message,
  .success-message {
    height: 35%;
  }
`;
export const PhoneNumbForm = styled.div`
  height: 5.9%;
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
  height: 5.9%;
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
  height: 5.9%;
  margin-bottom: 4.5%;

  .date {
    width: 65% !important;
    height: 100% !important;
    margin: 0 !important;
  }
`;

export const BusinessNumbAuth = styled.div`
  height: 8.2%;
  margin-bottom: 1.1%;
  & > div {
    height: 72.3%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & > div > .business {
    width: 77.2%;
    height: 100% !important;
    margin: 0 !important;
  }
  & > div > button {
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
  height: 5.9%;
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
`;
export const MemberClothesForm = styled.div`
  margin-bottom: 17.5%;
  height: 5.9%;
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
`;
