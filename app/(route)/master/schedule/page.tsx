'use client';
import Title from '@/app/_components/Title';
import NavBar from '@/app/_layout/NavBar';
import WebLayout from '@/app/_layout/WebLayout';
import { PageContentWrpper } from '@/app/_layout/WebLayout/styles';
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import { FullCalendarWapper, PageContentCustom } from './styles';

const Schedule = () => {
  const instructor = [
    {
      id: '1',
      name: '김하정1',
      img: 'https://i.namu.wiki/i/Xi0giaEmhS4t5L7HTkI0JV_Sb-3HuvRKVF5MD7UlEoQPG01Z2GskbG6xteMsS2MC9wSPX1W9GifLHwwVzDjRPw.webp',
      classNum: '3',
      class: [
        {
          productName: '1:1 개인 레슨',
          member: '최재덕1',
          start: '2024-01-13T09:00:00',
          startTime: '2024-01-13T09:00:00',
          endTime: '2024-01-13T09:50:00',
        },
        {
          productName: '1:1 개인 레슨',
          member: '최재덕2',
          startTime: '2024-01-13T11:00:00',
          endTime: '2024-01-13T11:50:00',
        },
        {
          productName: '1:1 개인 레슨',
          member: '최재덕3',
          startTime: '2024-01-13T16:00:00',
          endTime: '2024-01-13T16:50:00',
        },
      ],
    },
    {
      id: '2',
      name: '김하정2',
      img: 'https://i.namu.wiki/i/Xi0giaEmhS4t5L7HTkI0JV_Sb-3HuvRKVF5MD7UlEoQPG01Z2GskbG6xteMsS2MC9wSPX1W9GifLHwwVzDjRPw.webp',
      classNum: '3',
      class: [
        {
          productName: '1:1 개인 레슨',
          member: '최재덕1',
          startTime: '2024-01-13T09:00:00',
          endTime: '2024-01-13T09:50:00',
        },
      ],
    },
    {
      id: '3',
      name: '김하정3',
      img: 'https://i.namu.wiki/i/Xi0giaEmhS4t5L7HTkI0JV_Sb-3HuvRKVF5MD7UlEoQPG01Z2GskbG6xteMsS2MC9wSPX1W9GifLHwwVzDjRPw.webp',
      classNum: '3',
      class: [],
    },
    {
      id: '4',
      name: '',
      img: '',
      classNum: '',
      class: [],
    },
    {
      id: '5',
      name: '',
      img: '',
      classNum: '',
      class: [],
    },
    {
      id: '6',
      name: '',
      img: '',
      classNum: '',
      class: [],
    },
    {
      id: '7',
      name: '',
      img: '',
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

  console.log(event);
  return (
    <WebLayout>
      <NavBar user={'master'} />
      <PageContentWrpper>
        <Title title={'일정 관리'} />
        <PageContentCustom>
          <FullCalendarWapper>
            <FullCalendar
              plugins={[resourceTimeGridPlugin]}
              initialView='resourceTimeGridDay'
              headerToolbar={{
                left: 'prev',
                center: 'title',
                right: 'next',
              }}
              titleFormat={(date) => {
                return `${date.date.year}년 ${date.date.month + 1}월 ${
                  date.date.day
                }일 `;
              }}
              resourceLabelContent={(resourceObject) => {
                if (resourceObject.resource.title !== '') {
                  return {
                    html:
                      `<div class="profile-wrapper" ><img class="profile-img"src="${resourceObject.resource.extendedProps.img}"/>
                      <div class="profile-name">${resourceObject.resource.title}</div></div>` +
                      `<div class="class-info">수업 ${resourceObject.resource.extendedProps.classNum}</div>`,
                  };
                } else {
                  return { html: '' };
                }
              }}
              resources={instructor.map((item, i) => {
                return {
                  id: `${item.id}`,
                  title: item.name,
                  extendedProps: {
                    classNum: item.classNum,
                    img: item.img,
                    class: item.class,
                  },
                };
              })}
              events={event}
              slotMinTime={'08:00'} // Day 캘린더에서 시작 시간
              slotMaxTime={'23:00'} // Day 캘린더에서 종료 시간
            />
          </FullCalendarWapper>
        </PageContentCustom>
      </PageContentWrpper>
    </WebLayout>
  );
};

export default Schedule;
