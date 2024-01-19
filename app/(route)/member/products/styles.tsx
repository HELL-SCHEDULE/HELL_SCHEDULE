import styled from 'styled-components';

export const ProductsPage = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 3%;
`;

export const CenterSection = styled.div`
  height: 12%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 13%;
  .center-name {
    font-weight: 600;
    font-size: 16px;
    height: 40%;
  }
  .select-center-wrapper {
    display: flex;
    align-items: flex-start;
    font-size: 12px;
    gap: 1.5%;
    color: #615e5e;
    height: 41%;
  }
`;
export const ProductsSection = styled.div`
  height: 62%;
  padding: 2% 2%;
  padding-bottom: 21%;
  .title {
    color: #464444;
    font-weight: 600;
    width: 30%;
    height: 16%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #464444;
  }
  .product-state {
    width: 17%;
    height: 8%;
    padding: 1% 3%;
    color: white;
    background: #041f86;
    font-size: 8px;
    border: none;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 7%;
  }

  .swiper {
    width: 100%;
    height: 64%;
    position: relative;
    margin-top: 3%;
    overflow: hidden;
  }
  .swiper-wrapper {
    width: 100%;
    height: 100%;
    display: -webkit-inline-box;
  }
  .swiper-slide {
    width: 100% !important;
    height: 100%;
  }
`;
export const ScheduledClassSection = styled.div`
  height: 26%;
  .title {
    color: #464444;
    font-weight: 600;
    height: 20%;
  }
  .swiper {
    width: 100%;
    height: 80%;
    position: relative;
    overflow: hidden;
  }
  .swiper-wrapper {
    width: 100%;
    height: 95%;
    display: -webkit-inline-box;
  }
  .swiper-slide {
    width: 100% !important;
    height: 100%;
  }
`;
