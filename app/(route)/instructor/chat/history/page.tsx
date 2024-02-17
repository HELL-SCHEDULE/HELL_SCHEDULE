'use client';
import Title from '@/app/_components/Title';
import NavBar from '@/app/_layout/NavBar';
import SubNav from '@/app/_layout/SubNav';
import { ContentHeader } from '@/app/_layout/SubNav/styles';
import WebLayout from '@/app/_layout/WebLayout';
import { PageContentWrpper } from '@/app/_layout/WebLayout/styles';
import Link from 'next/link';
import React from 'react';
import { HistoryContent } from './styles';

const History = () => {
  return (
    <WebLayout>
      <NavBar user={'instructor'} />
      <PageContentWrpper>
        <Title title={'채팅'} />
        <ContentHeader>
          <SubNav>
            <ul>
              <li className='active'>
                <Link href={'/instructor/chat/history'}>최근 채팅 목록</Link>
              </li>
              <li>
                <Link href={'/instructor/chat/memberList'}>회원 목록</Link>
              </li>
            </ul>
          </SubNav>
        </ContentHeader>
        <HistoryContent></HistoryContent>
      </PageContentWrpper>
    </WebLayout>
  );
};

export default History;
