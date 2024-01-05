import { ModalHeader } from '@/app/_layout/ModalLayout/styles';
import styled from 'styled-components';

export const MemberDetailModalStyle = styled.div`
  width: 36.4%;
  min-width: 450px;
  height: 74.5%;
  min-height: 640px;
  padding: 1.41% 1.1%;
  border-radius: 12px;
  border: 2px solid #a9a9a9;
  background: white;
  overflow-x: hidden;
`;
export const MemberDetailModalHeader = styled(ModalHeader)`
  height: 6.8%;
  & > span {
    width: 80%;
    display: flex;
    justify-content: flex-start;
    align-items: self-end;
    gap: 1.7%;
  }
`;
export const MemberDetailModalContent = styled.div`
  height: calc(100% - 6.8% - 7px);
  .swiper {
    height: 27%;
    position: relative;
  }
  .swiper-wrapper {
    width: 100%;
    height: 100%;
    display: -webkit-inline-box;
  }
  .swiper-slide {
    width: 100% !important;
    height: 95%;
  }
  .swiper-button-next {
    position: absolute;
    top: 30%;
    width: 60px;
    height: 60px;
    background-color: aqua;
    right: 0;
    background: url(../icons/arrow_right.svg) no-repeat;
    background-repeat: no-repeat;
    background-position: center center;
    backgorund-size: 100% 100%;
    cursor: pointer;
  }

  .swiper-button-prev {
    position: absolute;
    top: 30%;
    width: 60px;
    height: 60px;
    background-color: aqua;
    left: 0;
    background: url(../icons/arrow_left.svg) no-repeat;
    background-repeat: no-repeat;
    background-position: center center;
    backgorund-size: 100% 100%;
    cursor: pointer;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }

  .swiper-pagination {
    width: 100%;
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4%;
  }
  .swiper-pagination-bullet {
    width: 1.3%;
    aspect-ratio: 1/1;
    border: 1px solid #041f86;
    display: inline-block;
    border-radius: 50%;
  }
  .swiper-pagination-bullet-active {
    background: #041f86;
  }
`;
