import styled from 'styled-components';

export const SectionWrapper = styled.div`
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

export const FormTitleSection = styled.section`
  width: 38%;
  // background: orange;
  .form-section-wrapper {
    height: 100vh;
    padding: 23.5% 18.65%;
    .form-title-logo {
      height: 22.6%;
      text-align: center;
      background: #e7edfc;
      font-size: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .form-title {
      text-align: center;
      margin-top: 7.6%;
      margin-bottom: 10.6%;
      font-weight: 500;
      font-size: 22px;
      height: 5%;
    }
    .form-content {
      height: calc(100% - 22.6% - 5% - 11.9%);
    }
  }

  @media all and (min-width: 1024px) and (max-width: 1920px) {
    width: 38%;
    // background: yellow;
    .form-section-wrapper {
      padding: 23.5% 18.65%;
      .form-title-logo {
        height: 22.6%;
      }
      .form-title {
        font-size: 20px;
      }
    }
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    // width: 46%;
    width: 100vw;
    background: blue;
    .form-section-wrapper {
      padding: 23.5% 12.4%;
      .form-title-logo {
        height: 18.2%;
      }
      .form-title {
        font-size: 20px;
      }
      .form-content {
        height: calc(100% - 18.2% - 5% - 11.9%);
      }
    }
  }

  @media all and (max-width: 767px) {
    width: 100vw;
    background: green;
    .form-section-wrapper {
      padding: 17.5% 11.4%;
      .form-title-logo {
        height: 22.2%;
      }
      .form-title {
        font-size: 16px;
      }
      .form-content {
        height: calc(100% - 22.2% - 5% - 11.9%);
      }
    }
  }
`;
