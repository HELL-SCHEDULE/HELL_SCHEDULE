'use client';
import Title from '@/app/_components/Title';
import NavBar from '@/app/_layout/NavBar';
import SubNav from '@/app/_layout/SubNav';
import { ContentHeader } from '@/app/_layout/SubNav/styles';
import WebLayout from '@/app/_layout/WebLayout';
import Link from 'next/link';

const Delete = () => {
  return (
    <WebLayout>
      <NavBar user={'master'} />
      <Title title={'센터 관리'} />
      <ContentHeader>
        <SubNav>
          <ul>
            <li>
              <Link href={'/master/senter/admin'}>센터 정보 수정</Link>
            </li>
            <li className='active'>
              <Link href={'/master/senter/delete'}>탈퇴</Link>
            </li>
          </ul>
        </SubNav>
      </ContentHeader>
    </WebLayout>
  );
};

export default Delete;
