import styled from 'styled-components';

export const FullCalendarWapper = styled.div`
  width: 100%;
  height: 100%;

  .fc {
    width: 100%;
    height: 100%;
    --fc-today-bg-color: #fff;
    --fc-border-color: red;
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
  }

  .fc-toolbar {
    display: none;
  }

  .fc-scrollgrid-section-body:nth-of-type(1) {
    display: none;
  }
  .fc-view-harness-active {
    height: 100%;
    overflow: auto;
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
`;
