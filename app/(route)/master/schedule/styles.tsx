import { PageContent } from '@/app/_layout/WebLayout/styles';
import styled from 'styled-components';

export const PageContentCustom = styled(PageContent)`
  height: 90%;
  padding-top: 0;
`;
export const FullCalendarWapper = styled.div`
  width: 100%;
  height: 100%;

  .fc {
    width: 100%;
    height: 100%;
    --fc-today-bg-color: #fff;
    --fc-border-color: #e5e5e5;
  }
  .fc-header-toolbar {
    width: 21.3%;
    min-width: 300px;
  }
  .fc-toolbar-title {
    font-size: 22px;
    @media all and (min-width: 1024px) and (max-width: 1919px) {
      font-size: 18px;
    }
  }

  button[title='Today'] {
    display: none;
  }
  button[type='button'] {
    background-color: #fff;
    border-color: #fff;
    color: #000;
  }
  .fc-scrollgrid-section-body:nth-of-type(1) {
    display: none;
  }
  .fc-view-harness-active {
    height: 100% !important;
    overflow: auto;
  }
  .fc-scroller-liquid-absolute {
    &::-webkit-scrollbar {
      width: 12px; /* 스크롤바의 너비 */
    }

    &::-webkit-scrollbar-thumb {
      height: 30%; /* 스크롤바의 길이 */
      background: #c4c4c4; /* 스크롤바의 색상 */

      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      background: #e5e5e5; /*스크롤바 뒷 배경 색상*/
    }
  }
  .fc-timegrid-slot-minor {
    border: none;
  }
  .fc-timegrid-slot {
    height: 67px;
  }
  .fc-timegrid-slot-label {
    vertical-align: baseline;
  }
  .fc-theme-standard .fc-scrollgrid {
    border: none;
  }
  .fc-scrollgrid-sync-inner {
    height: 158px;
    border-top: 1px solid #e5e5e5;
  }

  thead[role='rowgroup'] .fc-scroller {
    overflow: hidden !important;
  }

  .fc-timegrid-divider {
    display: none;
  }
  .fc-timegrid-axis {
    border-bottom: 1px solid #fff;
  }
  tr {
    position: relative;
  }
  .fc-scrollgrid-shrink {
    position: absolute;
    top: -12px;
    border: none;
  }
  td:first-child {
    border-bottom: 1px solid #fff;
  }
  td[data-time='08:00:00'] {
    transform: translateY(6px);
  }
  .fc-col-header-cell-cushion {
    width: 100%;
    height: 100%;
  }
  .profile-wrapper {
    padding: 5% 9%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    height: 78%;
  }
  .profile-img {
    width: 55px;
    aspect-ratio: 1/1;
    border-radius: 50%;
  }
  .profile-name {
    font-size: 16px;
    font-weight: 600;
    @media all and (min-width: 1024px) and (max-width: 1919px) {
      font-size: 14px;
    }
  }
  .class-info {
    color: #000 !important;
    padding: 0 9%;
    display: flex;
    justify-content: end;
    padding-top: 2%;
    border-top: 1px solid #e5e5e5;
    font-size: 14px;
    font-weight: 400;
    @media all and (min-width: 1024px) and (max-width: 1919px) {
      font-size: 12px;
    }
  }

  // event styles
  --fc-event-text-color: black;
  .fc-v-event {
    background-color: #fff !important;
    border-width: 1.8px;
    padding: 12.3% 7%;
  }
  .fc-v-event .fc-event-main-frame {
    gap: 13%;
  }
  .fc-event-title {
    font-weight: 600;
    font-size: 16px;
  }
  .fc-event-time {
    order: 2;
    font-size: 14px;
  }
  .fc-button-primary:focus {
    box-shadow: none;
  }
  .fc-license-message {
    display: none;
  }
  .fc-day-sun {
    color: #f61414;
  }
  .fc-day-sat {
    color: rgba(18, 52, 184, 0.86);
  }
  .week {
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }
  .day {
    font-size: 16px;
    border-radius: 50%;
    width: 22%;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 2%;
    margin-bottom: 16%;
  }
  #true {
    background: #041f86;
    color: white;
  }
`;
