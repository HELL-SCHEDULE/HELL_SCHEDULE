import styled from 'styled-components';

interface Props {
  type: string;
}

export const ReservationPage = styled.div`
  width: 100%;
  height: 100%;
`;

export const SelectProduct = styled.div`
  height: 6%;
  margin: 0 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f4f4f4;
  color: #615e5e;
  border-radius: 8px;
  padding: 2% 4%;
  padding-right: 0;
  font-size: 12px;
  & > button {
    width: 16%;
    background: none;
    border: none;
    border-left: 1px solid gray;
    font-size: 12px;
    color: #464444;
    font-weight: 600;
    cursor: pointer;
  }
`;
export const CalendarSection = styled.div<Props>`
  width: 100%;
  height: ${(props) => (props.type == 'timeGridWeek' ? '20%' : '49%')};
  padding: 0 4%;
  margin-top: 3%;
  --fc-today-bg-color: none;
  .fc-direction-ltr {
    height: 100% !important;
  }
  .fc-header-toolbar {
    height: 30px;
    margin-bottom: 0.5em !important;
  }
  .fc-toolbar-title {
    font-size: 14px;
  }
  .fc .fc-view-harness {
    flex-grow: inherit;
    height: calc(100% - 30px) !important;
  }
  .fc .fc-view-harness-active > .fc-view {
    height: 100%;
  }
  .fc-theme-standard th {
    border: none;
    font-weight: 400;
  }
  .fc .fc-col-header-cell-cushion {
    display: flex;
    padding: 2px 4px;
    flex-direction: column;
    gap: 13%;
    font-size: 12px;
    align-items: center;
  }
  .day {
    width: 62%;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  .fc-day-today .day {
    background: #041f86;
    color: white;
  }
  .fc-scroller-harness,
  .fc-scroller,
  .fc-col-header,
  .fc-scrollgrid-sync-inner,
  .fc-col-header-cell-cushion {
    height: 100% !important;
  }
  .fc-toolbar-chunk:first-child {
    width: 50%;
    display: flex;
    align-items: center;
  }
  .fc-button-primary {
    background: white;
    color: black;
    border: none;
    padding: 0;
  }
  .fc-theme-standard .fc-scrollgrid {
    border: none !important;
  }
  .fc-day-sun {
    color: #f61414;
  }
  .fc-day-sat {
    color: #1234b8db;
  }
  .fc-daygrid-day-events {
    min-height: 0 !important;
  }
  .fc-theme-standard td {
    border: none;
  }
  .fc-daygrid-day-top {
    justify-content: center;
  }
  .fc-day-today .fc-daygrid-day-number {
    aspect-ratio: 1/1;
    width: 58%;
    background: #041f86;
    text-align: center;
    border-radius: 50%;
    color: white;
  }
  button[title='주간 view'] {
    transform: translateX(-50%);
  }
  button[title='주간 view'],
  button[title='오늘 view'] {
    background-image: url(../image/calendar.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 30px;
    height: 30px;
    font-size: 8px;
    background-color: white !important;
    border: none;
    color: black !important;
    padding-top: 5%;
  }
  .fc-button-active:focus {
    box-shadow: none !important;
  }
  tbody[role='rowgroup'] {
    display: ${(props) => (props.type == 'timeGridWeek' ? 'none' : 'contents')};
  }
`;

export const SelectClassSection = styled.div<Props>`
  height: ${(props) => (props.type == 'timeGridWeek' ? '71.8%' : '42.8%')};
  background: #f4f4f4;
  border-top: 1px solid #aaaaaa;
  overflow-y: auto;
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
  .class-card-wrapper {
    height: ${(props) => (props.type == 'timeGridWeek' ? '27.3%' : '46%')};
    padding: 2% 3.5%;
    margin-bottom: 2%;
  }
`;
