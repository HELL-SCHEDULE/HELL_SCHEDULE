'use client';
import Title from '@/app/_components/Title';
import NavBar from '@/app/_layout/NavBar';
import SubNav from '@/app/_layout/SubNav';
import { ContentHeader, Section } from '@/app/_layout/SubNav/styles';
import WebLayout from '@/app/_layout/WebLayout';
import Link from 'next/link';
import { BtnSection, RightSection, SearchSection } from '../member/styles';

const Instructor = () => {
  return (
    <WebLayout>
      <NavBar user={'master'} />
      <Title title={'강사 관리'} />
      <ContentHeader>
        <SubNav>
          <ul>
            <li className='active'>
              <Link href={'/master/instructor'}>3명의 강사</Link>
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
              <button>편집</button>
              <button>등록</button>
            </BtnSection>
          </RightSection>
        </Section>
      </ContentHeader>
    </WebLayout>
  );
};

export default Instructor;
