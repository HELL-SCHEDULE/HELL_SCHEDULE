'use client';
import Title from '@/app/_components/Title';
import NavBar from '@/app/_layout/NavBar';
import SubNav from '@/app/_layout/SubNav';
import { ContentHeader, Section } from '@/app/_layout/SubNav/styles';
import WebLayout from '@/app/_layout/WebLayout';
import Link from 'next/link';

const Schedule = () => {
  return (
    <WebLayout>
      <NavBar user={'master'} />
      <Title title={'일정 관리'} />
      <ContentHeader>
        <SubNav>
          <ul>
            <li className='active'>2023년 11월 10일</li>
          </ul>
        </SubNav>
      </ContentHeader>
    </WebLayout>
  );
};

export default Schedule;
