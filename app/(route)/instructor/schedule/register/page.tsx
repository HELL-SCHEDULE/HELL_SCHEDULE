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

const Register = () => {
  const router = useRouter();
  const routeToScheduleCheck = useCallback(() => {
    router.push('/instructor/schedule/check');
  }, []);

  return (
    <WebLayout>
      <NavBar user={'instructor'} />
      <PageContentWrpper>
        <Title title={'일정 관리'} />
        <PageContentCustom>
          <FullCalendarWapper>
            <span className='explanation'>
              가능하지 않은 시간대를 드래그해서 선택하여 저장해주세요.
            </span>
            <button className='register-btn' onClick={routeToScheduleCheck}>
              저장
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
                return `${date.date.year}년 ${date.date.month + 1}월`;
              }}
              dayHeaderContent={(label) => {
                const [week, day] = label.text.split(' ');
                return {
                  html:
                    `<div class="week">${week}</div> <div class=day id=` +
                    label.isToday +
                    `>${
                      day.split('/')[1]
                    }</div> <div class="class-info"> </div>`,
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

export default Register;
