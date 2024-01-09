'use client';
import Title from '@/app/_components/Title';
import NavBar from '@/app/_layout/NavBar';
import SubNav from '@/app/_layout/SubNav';
import { ContentHeader, Section } from '@/app/_layout/SubNav/styles';
import WebLayout from '@/app/_layout/WebLayout';
import { PageContent, PageContentWrpper } from '@/app/_layout/WebLayout/styles';
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import { FullCalendarWapper } from './styles';

const Schedule = () => {
  return (
    <WebLayout>
      <NavBar user={'master'} />
      <PageContentWrpper>
        <Title title={'일정 관리'} />
        <ContentHeader>
          <SubNav>
            <ul>
              <li className='active'>2023년 11월 10일</li>
            </ul>
          </SubNav>
        </ContentHeader>
        <PageContent>
          <FullCalendarWapper>
            <FullCalendar
              plugins={[resourceTimeGridPlugin]}
              initialView='resourceTimeGridDay'
              resources={[
                {
                  id: 'a',
                  title: 'Room A',
                  event: [
                    {
                      title: 'All Day Event',
                      start: '2024-01-10T16:00:00',
                      end: '2024-01-10T17:00:00',
                    },
                  ],
                },
                { id: 'b', title: 'Room B' },
                { id: 'c', title: 'Room C' },
              ]}
              slotMinTime={'08:00'} // Day 캘린더에서 시작 시간
              slotMaxTime={'23:00'} // Day 캘린더에서 종료 시간
            />
          </FullCalendarWapper>
        </PageContent>
      </PageContentWrpper>
    </WebLayout>
  );
};

export default Schedule;
