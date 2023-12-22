'use client';
import Title from '@/app/_components/Title';
import NavBar from '@/app/_layout/NavBar';
import WebLayout from '@/app/_layout/WebLayout';
import React from 'react';

import SubNav from '@/app/_layout/SubNav';
import Link from 'next/link';
import { ContentHeader, Section } from '@/app/_layout/SubNav/styles';
import { RightSection, BtnSection, SearchSection } from './styles';

const Admin = () => {
  return (
    <WebLayout>
      <NavBar user={'admin'} />
      <Title title={'회원 등록 및 관리'} />
      <ContentHeader>
        <SubNav>
          <ul>
            <li>
              <Link href={'/admin/senter/request'}>등록</Link>
            </li>
            <li className='active'>
              <Link href={'/admin/senter/admin'}>관리</Link>
            </li>
          </ul>
        </SubNav>
        <Section>
          <RightSection>
            <SearchSection>
              <input type='text'></input>
              <div className='icon'></div>
            </SearchSection>
            <BtnSection>
              <button>삭제</button>
            </BtnSection>
          </RightSection>
        </Section>
      </ContentHeader>
    </WebLayout>
  );
};

export default Admin;
