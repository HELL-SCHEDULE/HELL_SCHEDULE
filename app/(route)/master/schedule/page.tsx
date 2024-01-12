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
  const instructor = [
    {
      name: '김하정1',
      img: 'https://i.namu.wiki/i/Xi0giaEmhS4t5L7HTkI0JV_Sb-3HuvRKVF5MD7UlEoQPG01Z2GskbG6xteMsS2MC9wSPX1W9GifLHwwVzDjRPw.webp',
      classNum: '3',
    },
    {
      name: '김하정2',
      img: 'https://i.namu.wiki/i/Xi0giaEmhS4t5L7HTkI0JV_Sb-3HuvRKVF5MD7UlEoQPG01Z2GskbG6xteMsS2MC9wSPX1W9GifLHwwVzDjRPw.webp',
      classNum: '3',
    },
    {
      name: '김하정3',
      img: 'https://i.namu.wiki/i/Xi0giaEmhS4t5L7HTkI0JV_Sb-3HuvRKVF5MD7UlEoQPG01Z2GskbG6xteMsS2MC9wSPX1W9GifLHwwVzDjRPw.webp',
      classNum: '3',
    },
    {
      name: '',
      img: '',
      classNum: '',
    },
    {
      name: '',
      img: '',
      classNum: '',
    },
    {
      name: '',
      img: '',
      classNum: '',
    },
    {
      name: '',
      img: '',
      classNum: '',
    },
  ];
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
              resourceLabelContent={(resourceObject) => {
                console.log(resourceObject);
                if (resourceObject.resource.title !== '') {
                  return {
                    html:
                      `<img src=${resourceObject.resource.extendedProps.img} style="width: 55px; aspect-ratio: 1/1; border-radius: 50%;"}}>${resourceObject.resource.title}</img>` +
                      `<div>수업 ${resourceObject.resource.extendedProps.classNum}</div>`,
                  };
                } else {
                  return { html: '' };
                }
              }}
              resources={instructor.map((item, i) => {
                return {
                  id: i,
                  title: item.name,
                  extendedProps: {
                    classNum: item.classNum,
                    img: item.img,
                  },
                };
              })}
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
