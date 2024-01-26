'use client';
import React, { useCallback, useState } from 'react';
import MobileContentLayout from '@/app/_layout/MobileContentLayout';
import {
  CalendarSection,
  ReservationPage,
  SelectClassSection,
  SelectProduct,
} from './styles';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import ClassCard from '@/app/_components/ClassCard';
import { useRouter } from 'next/navigation';

const Reservation = () => {
  const [calendarType, setCalendarType] = useState('timeGridWeek');

  const schduleClass = [
    {
      className: '1:1 PT',
      date: '11:00~11:50',
      instructorName: '김하정 강사',
      state: '대기가능',
    },
    {
      className: '2:1 PT',
      date: '14:00~14:50',
      instructorName: '김하정 강사',
      state: '예약가능',
    },
    {
      className: '2:1 PT',
      date: '14:00~14:50',
      instructorName: '김하정 강사',
      state: '예약가능',
    },
    {
      className: '2:1 PT',
      date: '14:00~14:50',
      instructorName: '김하정 강사',
      state: '예약가능',
    },

    {
      className: '2:1 PT',
      date: '14:00~14:50',
      instructorName: '김하정 강사',
      state: '예약가능',
    },
  ];

  const router = useRouter();
  const routeToSeleteProduct = useCallback(() => {
    router.push('/member/select-product?title=수강권 선택');
  }, []);

  return (
    <MobileContentLayout title='수업 예약'>
      <ReservationPage>
        <SelectProduct>
          <div>1:1 그룹 30회권</div>
          <button onClick={routeToSeleteProduct}>변경</button>
        </SelectProduct>
        <CalendarSection
          type={calendarType == 'timeGridWeek' ? 'timeGridWeek' : 'dayGridWeek'}
        >
          <FullCalendar
            plugins={[timeGridPlugin, dayGridPlugin]}
            initialView='timeGridWeek'
            headerToolbar={{
              left: 'prev title next',
              center: '',
              right: 'dayGridMonth,timeGridWeek',
            }}
            buttonText={{
              week: '오늘',
              month: '주간',
            }}
            titleFormat={(date) => {
              console.log(date);
              return `${date.date.year}년 ${date.date.month + 1}월`;
            }}
            dayHeaderContent={(label) => {
              console.log(label);
              setCalendarType(label.view.type);
              if (label.view.type == 'timeGridWeek') {
                const [week, day] = label.text.split(' ');
                console.log(week, day);
                return {
                  html:
                    `<div class="week">${week}</div> <div class=day id=` +
                    label.isToday +
                    `>${day.split('/')[1]}</div> `,
                };
              } else {
                return {
                  html: `<div class="week">
                      ${label.text}
                     </div> `,
                };
              }
            }}
          />
        </CalendarSection>

        <SelectClassSection
          type={calendarType == 'timeGridWeek' ? 'timeGridWeek' : 'dayGridWeek'}
        >
          {schduleClass.map((item: { [key: string]: any }, i: number) => (
            <div className='class-card-wrapper' key={i}>
              <ClassCard key={i} classInfo={item} />
            </div>
          ))}
        </SelectClassSection>
      </ReservationPage>
    </MobileContentLayout>
  );
};

export default Reservation;
