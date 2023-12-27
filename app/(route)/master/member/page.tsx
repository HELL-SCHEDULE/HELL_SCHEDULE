'use client';
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
  TableBody,
  TableHead,
} from './styles';
import Image from 'next/image';
import { PageContent, PageContentWrpper } from '@/app/_layout/WebLayout/styles';
import { useCallback, useState } from 'react';
import ModalLayout from '@/app/_layout/ModalLayout';
import MemberRgModal from '@/app/_components/Modal/MemberRgModal';

const Member = () => {
  const [isOpenRegisterModal, setIsOpenRegisterModal] = useState(false);
  const members = [
    {
      name: '김하정',
      id: '0071',
      phone_number: '010-****-****',
      product: '그룹수업 10회권',
      register_date: '2023.12.25 ~ 2023.12.31',
      instructor: '김하정',
      count: 8,
      rocker: 32,
      look: true,
      period: '2023.12.25 ~ 2023.12.31',
    },
    {
      name: '김하정',
      id: '0072',
      phone_number: '010-****-****',
      product: '개인 1:1',
      register_date: '2023.12.25 ~ 2023.12.31',
      instructor: '김하정',
      count: 8,
      rocker: 32,
      look: true,
      period: '2023.12.25 ~ 2023.12.31',
    },
    {
      name: '김하정',
      id: '0073',
      phone_number: '010-****-****',
      product: '개인 1:1',
      register_date: '2023.12.25 ~ 2023.12.31',
      instructor: '김하정',
      count: 8,
      rocker: 32,
      look: true,
      period: '2023.12.25 ~ 2023.12.31',
    },
    {
      name: '김하정',
      id: '0071',
      phone_number: '010-****-****',
      product: '그룹수업 10회권',
      register_date: '2023.12.25 ~ 2023.12.31',
      instructor: '김하정',
      count: 8,
      rocker: 32,
      look: true,
      period: '2023.12.25 ~ 2023.12.31',
    },
    {
      name: '김하정',
      id: '0072',
      phone_number: '010-****-****',
      product: '개인 1:1',
      register_date: '2023.12.25 ~ 2023.12.31',
      instructor: '김하정',
      count: 8,
      rocker: 32,
      look: true,
      period: '2023.12.25 ~ 2023.12.31',
    },
    {
      name: '김하정',
      id: '0073',
      phone_number: '010-****-****',
      product: '개인 1:1',
      register_date: '2023.12.25 ~ 2023.12.31',
      instructor: '김하정',
      count: 8,
      rocker: 32,
      look: true,
      period: '2023.12.25 ~ 2023.12.31',
    },
    {
      name: '김하정',
      id: '0071',
      phone_number: '010-****-****',
      product: '그룹수업 10회권',
      register_date: '2023.12.25 ~ 2023.12.31',
      instructor: '김하정',
      count: 8,
      rocker: 32,
      look: true,
      period: '2023.12.25 ~ 2023.12.31',
    },
    {
      name: '김하정',
      id: '0072',
      phone_number: '010-****-****',
      product: '개인 1:1',
      register_date: '2023.12.25 ~ 2023.12.31',
      instructor: '김하정',
      count: 8,
      rocker: 32,
      look: true,
      period: '2023.12.25 ~ 2023.12.31',
    },
  ];
  const pagination = new Array(Math.ceil(members.length / 8))
    .fill(0)
    .map((v, i) => i + 1);

  const handleRegisterModal = useCallback(() => {
    setIsOpenRegisterModal((prev) => !prev);
  }, []);
  return (
    <WebLayout>
      <NavBar user={'master'} />
      <PageContentWrpper>
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
                <button
                  onClick={() => {
                    handleRegisterModal();
                  }}
                >
                  등록
                </button>
              </BtnSection>
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
                <tr key={member.id}>
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
                  <td id='product'>{member.product}</td>
                  <td id='register-date'>{member.register_date}</td>
                  <td id='instructor'>{member.instructor}</td>
                  <td id='count'>{member.count} 회</td>
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
        {isOpenRegisterModal && (
          <ModalLayout onCloseModal={handleRegisterModal}>
            <MemberRgModal onCloseModal={handleRegisterModal} />
          </ModalLayout>
        )}
      </PageContentWrpper>
    </WebLayout>
  );
};

export default Member;
