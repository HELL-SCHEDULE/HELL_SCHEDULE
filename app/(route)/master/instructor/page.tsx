'use client';
import Image from 'next/image';
import Title from '@/app/_components/Title';
import NavBar from '@/app/_layout/NavBar';
import SubNav from '@/app/_layout/SubNav';
import { ContentHeader, Section } from '@/app/_layout/SubNav/styles';
import WebLayout from '@/app/_layout/WebLayout';
import Link from 'next/link';
import {
  BtnSection,
  Pagination,
  RightSection,
  SearchSection,
} from '../member/styles';
import { PageContent, PageContentWrpper } from '@/app/_layout/WebLayout/styles';
import InstructorCard from '@/app/_components/InstructorCard';
import { InstructorCardSection } from './styles';

const Instructor = () => {
  const instuctors = [
    {
      name: '김하정',
      email: '****@****',
      phone_number: '010-****-****',
    },
    {
      name: '김하정',
      email: '****@****',
      phone_number: '010-****-****',
    },
    {
      name: '김하정',
      email: '****@****',
      phone_number: '010-****-****',
    },
    {
      name: '김하정',
      email: '****@****',
      phone_number: '010-****-****',
    },
    {
      name: '김하정',
      email: '****@****',
      phone_number: '010-****-****',
    },
    {
      name: '김하정',
      email: '****@****',
      phone_number: '010-****-****',
    },
  ];

  const pagination = new Array(Math.ceil(instuctors.length / 9))
    .fill(0)
    .map((v, i) => i + 1);

  return (
    <WebLayout>
      <NavBar user={'master'} />
      <PageContentWrpper>
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
        <PageContent>
          <InstructorCardSection>
            {instuctors.map((instuctor, i) => (
              <InstructorCard key={i} instructor={instuctor} />
            ))}
          </InstructorCardSection>
          <Pagination>
            <span>
              <Image
                src='/icons/arrow_left.svg'
                alt='arrow_left'
                width={16}
                height={16}
              />
            </span>
            {pagination.map((page, i) => (
              <span key={i}>{page}</span>
            ))}
            <span>
              <Image
                src='/icons/arrow_right.svg'
                alt='arrow_right'
                width={16}
                height={16}
              />
            </span>
          </Pagination>
        </PageContent>
      </PageContentWrpper>
    </WebLayout>
  );
};

export default Instructor;
