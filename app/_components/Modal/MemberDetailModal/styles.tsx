import { ModalHeader } from '@/app/_layout/ModalLayout/styles';
import styled from 'styled-components';

export const MemberDetailModalStyle = styled.div`
  width: 36.4%;
  min-width: 550px;
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
    height: 95%;
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

export const ProductInfoWrapper = styled.div`
  height: calc(100% - 31%);
`;

export const ProductInfoWrapperMainNav = styled.div`
  display: flex;
  height: 8.6%;
  margin: 3% 0 2% 0;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;

  & > div {
    width: 15.7%;
    height: 100%;
    text-align: center;
    justify-content: center;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #000;
    font-weight: 600;
    cursor: pointer;
  }
  font-size: 18px;
  @media all and (min-width: 1024px) and (max-width: 1919px) {
    font-size: 16px;
  }
`;

export const ProductInfoWrapperSubNav = styled.div`
  display: flex;
  align-items: center;
  height: 8.6%;
  justify-content: flex-end;
  color: #c4c4c4;
  margin-bottom: 6%;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;
  }
  & > div:nth-child(1),
  & > div:nth-child(2),
  & > div:nth-child(4) {
    width: 9.6%;
  }
  & > div:nth-child(3) {
    width: 15%;
  }
  & > div:nth-child(5) {
    width: 18%;
  }
  .focus {
    font-weight: 600;
    color: #000;
    border-bottom: 1px solid #000;
  }
  font-size: 16px;
  @media all and (min-width: 1024px) and (max-width: 1919px) {
    font-size: 14px;
  }
`;

export const InfoWrapper = styled.div`
  width: calc(100% - 8px);
  height: calc(100% - 27%);
  display: flex;
  flex-direction: column;
  gap: 6%;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 8px; /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #c4c4c4; /* 스크롤바의 색상 */

    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #e5e5e5; /*스크롤바 뒷 배경 색상*/
  }
`;
