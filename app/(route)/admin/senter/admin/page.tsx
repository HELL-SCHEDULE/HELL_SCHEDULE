'use client';
import Image from 'next/image';
import Title from '@/app/_components/Title';
import NavBar from '@/app/_layout/NavBar';
import WebLayout from '@/app/_layout/WebLayout';
import React from 'react';

import SubNav from '@/app/_layout/SubNav';
import Link from 'next/link';
import { ContentHeader, Section } from '@/app/_layout/SubNav/styles';
import {
  RightSection,
  BtnSection,
  SearchSection,
  TableHeadCustom,
  TableBodyCustom,
} from './styles';
import { PageContent, PageContentWrpper } from '@/app/_layout/WebLayout/styles';
import { Pagination } from '@/app/(route)/master/member/styles';

const Admin = () => {
  const senter = [
    {
      tradeName: '헬스케줄1',
      master: '김하정1',
      businessNumber: '1111-111',
      email: '----@naver.com',
      phoneNumber: '010-****-****',
      address: '충남 대전 어딘가',
    },
    {
      tradeName: '헬스케줄2',
      master: '김하정2',
      businessNumber: '1111-111',
      email: '----@naver.com',
      phoneNumber: '010-****-****',
      address: '충남 대전 어딘가',
    },
    {
      tradeName: '헬스케줄3',
      master: '김하정3',
      businessNumber: '1111-111',
      email: '----@naver.com',
      phoneNumber: '010-****-****',
      address: '충남 대전 어딘가',
    },
  ];

  const pagination = new Array(Math.ceil(senter.length / 8))
    .fill(0)
    .map((v, i) => i + 1);

  return (
    <WebLayout>
      <NavBar user={'admin'} />
      <PageContentWrpper>
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
        <PageContent>
          <table>
            <TableHeadCustom>
              <tr>
                <th id='check-box'>
                  <input type='checkbox' />
                </th>
                <th id='number'>No.</th>
                <th id='trade-name'>상호명</th>
                <th id='master-name'>대표자</th>
                <th id='business-number'>사업자 번호</th>
                <th id='email'>이메일</th>
                <th id='phone-number'>전화번호</th>
                <th id='address'>위치</th>
                <th id='delete'>삭제</th>
              </tr>
            </TableHeadCustom>
            <TableBodyCustom>
              {senter.map((senter, i) => (
                <tr
                  key={i}
                  // onClick={() => {
                  //   handleDetailModal();
                  //   getMemberInfo(member);
                  // }}
                >
                  <td id='check-box'>
                    <input type='checkbox' />
                  </td>
                  <td id='number'>{i + 1}</td>
                  <td id='trade-name'>{senter.tradeName}</td>
                  <td id='master-name'>{senter.master}</td>
                  <td id='business-number'>{senter.businessNumber}</td>
                  <td id='email'>{senter.email}</td>
                  <td id='phone-number'>{senter.phoneNumber}</td>
                  <td id='address'>{senter.address}</td>
                  <td id='delete'>
                    <Image
                      src='/icons/delete.svg'
                      alt='delete'
                      width={16}
                      height={16}
                    />
                  </td>
                </tr>
              ))}
            </TableBodyCustom>
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
      </PageContentWrpper>
    </WebLayout>
  );
};

export default Admin;
