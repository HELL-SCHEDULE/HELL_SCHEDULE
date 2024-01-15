'use client';
import {
  FullCalendarWapper,
  PageContentCustom,
} from '@/app/(route)/master/schedule/styles';
import Title from '@/app/_components/Title';
import NavBar from '@/app/_layout/NavBar';
import WebLayout from '@/app/_layout/WebLayout';
import { PageContentWrpper } from '@/app/_layout/WebLayout/styles';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

const Check = () => {
  const instructor = [
    {
      id: '1',
      classNum: '3',
      class: [
        {
          productName: '1:1 개인 레슨',
          member: '최재덕1',
          start: '2024-01-13T09:00:00',
          startTime: '2024-01-14T09:00:00',
          endTime: '2024-01-14T09:50:00',
        },
        {
          productName: '1:1 개인 레슨',
          member: '최재덕2',
          startTime: '2024-01-14T11:00:00',
          endTime: '2024-01-14T11:50:00',
        },
        {
          productName: '1:1 개인 레슨',
          member: '최재덕3',
          startTime: '2024-01-14T16:00:00',
          endTime: '2024-01-14T16:50:00',
        },
      ],
    },
    {
      id: '2',
      classNum: '3',
      class: [
        {
          productName: '1:1 개인 레슨',
          member: '최재덕1',
          startTime: '2024-01-15T09:00:00',
          endTime: '2024-01-15T09:50:00',
        },
      ],
    },
    {
      id: '3',
      classNum: '3',
      class: [],
    },
    {
      id: '4',
      classNum: '',
      class: [],
    },
    {
      id: '5',
      classNum: '',
      class: [],
    },
    {
      id: '6',
      classNum: '',
      class: [],
    },
    {
      id: '7',
      classNum: '',
      class: [],
    },
  ];

  const color = ['#F78181', '#FF922E', '#ECE53D'];
  const event = instructor
    .map((item, idx) => {
      return item.class.map((v, i) => {
        return {
          id: `${item.id + i}`,
          title: `${v.productName} ${v.member}`,
          resourceId: `${item.id}`,
          start: `${v.startTime}`,
          end: `${v.endTime}`,
          color: `${color[idx]}`,
          eventTextColor: `black`,
        };
      });
    })
    .flat(Infinity);

  const router = useRouter();
  const routeToScheduleSetting = useCallback(() => {
    router.push('/instructor/schedule/register');
  }, []);

  return (
    <WebLayout>
      <NavBar user={'instructor'} />
      <PageContentWrpper>
        <Title title={'일정 관리'} />
        <PageContentCustom>
          <FullCalendarWapper>
            <button className='register-btn' onClick={routeToScheduleSetting}>
              등록
            </button>
            <FullCalendar
              plugins={[timeGridPlugin]}
              initialView='timeGridWeek'
              headerToolbar={{
                left: 'prev',
                center: 'title',
                right: 'next',
              }}
              titleFormat={(date) => {
                console.log(date);
                return `${date.date.year}년 ${date.date.month + 1}월`;
              }}
              dayHeaderContent={(label) => {
                console.log(label);
                const [week, day] = label.text.split(' ');
                return {
                  html:
                    `<div class="week">${week}</div> <div class=day id=` +
                    label.isToday +
                    `>${day.split('/')[1]}</div> <div class="class-info">수업 ${
                      instructor[label.dow].classNum
                    }</div>`,
                };
              }}
              events={event}
              eventContent={(event) => {
                return {
                  html: `<div class="fc-event-main-frame"><div class="fc-event-title">${event.event._def.title}</div><div class="fc-event-time">${event.timeText}</div></div><button class="class-attend">출석완료</button>`,
                };
              }}
              slotMinTime={'08:00'} // Day 캘린더에서 시작 시간
              slotMaxTime={'23:00'} // Day 캘린더에서 종료 시간
            />
          </FullCalendarWapper>
        </PageContentCustom>
      </PageContentWrpper>
    </WebLayout>
  );
};

export default Check;
