'use client';
import Title from '@/app/_components/Title';
import NavBar from '@/app/_layout/NavBar';
import SubNav from '@/app/_layout/SubNav';
import { ContentHeader, Section } from '@/app/_layout/SubNav/styles';
import WebLayout from '@/app/_layout/WebLayout';
import Link from 'next/link';
import { BtnSection, RightSection, SearchSection } from './styles';

const Member = () => {
  return (
    <WebLayout>
      <NavBar user={'master'} />
      <Title title={'회원 등록 및 관리'} />
      <ContentHeader>
        <SubNav>
          <ul>
            <li className='active'>
              <Link href={'/master/member'}>등록</Link>
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
              <button>등록</button>
            </BtnSection>
          </RightSection>
        </Section>
      </ContentHeader>
    </WebLayout>
  );
};

export default Member;
