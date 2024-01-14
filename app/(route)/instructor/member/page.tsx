'use client';
import Image from 'next/image';
import Title from '@/app/_components/Title';
import NavBar from '@/app/_layout/NavBar';
import SubNav from '@/app/_layout/SubNav';
import {
  ContentHeader,
  RightSection,
  SearchSection,
  Section,
} from '@/app/_layout/SubNav/styles';
import WebLayout from '@/app/_layout/WebLayout';
import { PageContent, PageContentWrpper } from '@/app/_layout/WebLayout/styles';
import Link from 'next/link';
import { Pagination, TableBody, TableHead } from '../../master/member/styles';
import { useCallback, useState } from 'react';
import Filter from '@/app/_components/Filter';
import { FilterSection } from './styles';
import ModalLayout from '@/app/_layout/ModalLayout';
import MemberDetailModal from '@/app/_components/Modal/MemberDetailModal';

const Member = () => {
  const members = [
    {
      name: '김하정',
      id: '0072',
      phone_number: '010-****-****',
      product: [
        {
          name: '그룹수업 10회권',
          period: '3개월',
          allNumber: 10,
          remain: 3,
          price: 20000,
          type: '카드',
        },
        {
          name: '락커 3개월 이용권',
          period: '3개월',
          price: 20000,
          number: 32,
          type: '카드',
        },
      ],
      rocker: 32,
      period: '3개월',
      instructor: '김하정',
      look: true,
    },
  ];

  const pagination = new Array(Math.ceil(members.length / 8))
    .fill(0)
    .map((v, i) => i + 1);

  const productFilterList = ['수강권 A', '수강권 B', '수강권 C'];

  const [isOpenDetailModal, setIsOpenDetailModal] = useState(false);
  const handleDetailModal = useCallback(() => {
    setIsOpenDetailModal((prev) => !prev);
  }, []);

  const [memberInfo, setMemberInfo] = useState<{
    [key: string]: any;
  }>({});
  const getMemberInfo = useCallback((member: { [key: string]: any }) => {
    setMemberInfo(member);
    console.log(member);
  }, []);

  return (
    <WebLayout>
      <NavBar user={'instuctor'} />
      <PageContentWrpper>
        <Title title={`회원 관리`} />
        <ContentHeader>
          <SubNav>
            <ul>
              <li className='active'>
                <Link href={'/instructor/member'}>
                  {members.length}명의 회원
                </Link>
              </li>
            </ul>
          </SubNav>
          <Section>
            <FilterSection>
              <input className='filter-date' type='date' />
              <div className='filter-wrapper'>
                <Filter
                  filterTitle='수강권별 보기'
                  filterList={productFilterList}
                />
              </div>
            </FilterSection>
            <RightSection>
              <SearchSection>
                <input type='text'></input>
                <div className='icon'></div>
              </SearchSection>
            </RightSection>
          </Section>
        </ContentHeader>
        <PageContent>
          <table>
            <TableHead>
              <tr>
                <th id='check-box'>
                  <input type='checkbox' />
                </th>
                <th id='name'>이름</th>
                <th id='id'>회원번호</th>
                <th id='phone-number'>전화번호</th>
                <th id='product'>수강권</th>
                <th id='register-date'>등록날짜</th>
                <th id='instructor'>강사</th>
                <th id='count'>남은횟수</th>
                <th id='rocker'>락커</th>
                <th id='look'>회원복</th>
                <th id='preiod'>락커 및 회원복 기간</th>
              </tr>
            </TableHead>
            <TableBody>
              {members.map((member, i) => (
                <tr
                  key={member.id}
                  onClick={() => {
                    handleDetailModal();
                    getMemberInfo(member);
                  }}
                >
                  <td id='check-box'>
                    <input type='checkbox' />
                  </td>
                  <td id='name'>
                    <div className='profile'>
                      <div className='img'></div>
                      <div>{member.name}</div>
                    </div>
                  </td>
                  <td id='id'>{member.id}</td>
                  <td id='phone-number'>{member.phone_number}</td>
                  <td id='product'>{member.product[0].name}</td>
                  <td id='register-date'>{member.product[0].period}</td>
                  <td id='instructor'>{member.instructor}</td>
                  <td id='count'>{member.product[0].remain} 회</td>
                  <td id='rocker'>{member.rocker} 번</td>
                  <td id='look'>{member.look ? 'O' : '-'}</td>
                  <td id='preiod'>{member.period}</td>
                </tr>
              ))}
            </TableBody>
          </table>
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
        {isOpenDetailModal && (
          <ModalLayout onCloseModal={handleDetailModal}>
            <MemberDetailModal
              memberInfo={memberInfo}
              onCloseModal={handleDetailModal}
              getMemberInfo={getMemberInfo}
            />
          </ModalLayout>
        )}
      </PageContentWrpper>
    </WebLayout>
  );
};

export default Member;
