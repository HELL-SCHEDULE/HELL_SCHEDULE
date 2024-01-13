'use client';
import Image from 'next/image';
import Title from '@/app/_components/Title';
import NavBar from '@/app/_layout/NavBar';
import WebLayout from '@/app/_layout/WebLayout';
import {
  BtnSection,
  FilterSection,
  RightSection,
  SearchSection,
  TableBodyCustom,
  TableHeadCustom,
} from './styles';
import { useCallback, useState } from 'react';
import Link from 'next/link';
import SubNav from '@/app/_layout/SubNav';
import { ContentHeader, Section } from '@/app/_layout/SubNav/styles';
import { PageContent, PageContentWrpper } from '@/app/_layout/WebLayout/styles';
import {
  Pagination,
  TableBody,
  TableHead,
} from '@/app/(route)/master/member/styles';

const Request = () => {
  const [filterListToggle, setFilterListToggle] = useState(false);
  const [filterValue, setFilterValue] = useState('요청별 현황');

  const handleFilterValue = useCallback(
    (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      const text = (e.target as HTMLButtonElement).innerText;
      setFilterValue(text);
    },
    []
  );

  const request = [
    {
      tradeName: '헬스케줄1',
      master: '김하정1',
      businessNumber: '1111-111',
      email: '----@naver.com',
      phoneNumber: '010-****-****',
      address: '충남 대전 어딘가',
      requestType: '등록',
    },
    {
      tradeName: '헬스케줄2',
      master: '김하정2',
      businessNumber: '1111-111',
      email: '----@naver.com',
      phoneNumber: '010-****-****',
      address: '충남 대전 어딘가',
      requestType: '수정',
    },
    {
      tradeName: '헬스케줄3',
      master: '김하정3',
      businessNumber: '1111-111',
      email: '----@naver.com',
      phoneNumber: '010-****-****',
      address: '충남 대전 어딘가',
      requestType: '탈퇴',
    },
  ];

  const pagination = new Array(Math.ceil(request.length / 8))
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
              <li className='active'>
                <Link href={'/admin/senter/request'}>등록</Link>
              </li>
              <li>
                <Link href={'/admin/senter/admin'}>관리</Link>
              </li>
            </ul>
          </SubNav>
          <Section>
            <FilterSection>
              <div
                className='select'
                onClick={() => {
                  setFilterListToggle((prev) => !prev);
                }}
              >
                <div className='selected'>
                  <div className='selected-value'>{filterValue}</div>
                  <div className='arrow'>v</div>
                </div>
                <ul className={`${filterListToggle ? 'active' : ''}`}>
                  <li
                    className={`${filterValue === '등록' && 'focus'}`}
                    onClick={(e) => handleFilterValue(e)}
                  >
                    등록
                  </li>
                  <li
                    className={`${filterValue === '수정' && 'focus'}`}
                    onClick={(e) => handleFilterValue(e)}
                  >
                    수정
                  </li>
                  <li
                    className={`${filterValue === '삭제' && 'focus'}`}
                    onClick={(e) => handleFilterValue(e)}
                  >
                    삭제
                  </li>
                </ul>
              </div>
            </FilterSection>
            <RightSection>
              <SearchSection>
                <input type='text'></input>
                <div className='icon'></div>
              </SearchSection>
              <BtnSection>
                <button>수락</button>
                <button>거절</button>
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
                <th id='request-type'>요청</th>
                <th id='refuse'>거절</th>
                <th id='accept'>수락</th>
              </tr>
            </TableHeadCustom>
            <TableBodyCustom>
              {request.map((request, i) => (
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
                  <td id='trade-name'>{request.tradeName}</td>
                  <td id='master-name'>{request.master}</td>
                  <td id='business-number'>{request.businessNumber}</td>
                  <td id='email'>{request.email}</td>
                  <td id='phone-number'>{request.phoneNumber}</td>
                  <td id='address'>{request.address}</td>
                  <td id='request-type'>{request.requestType}</td>
                  <td id='refuse'>
                    <Image
                      src='/icons/refuse.svg'
                      alt='refuse'
                      width={16}
                      height={16}
                    />
                  </td>
                  <td id='accept'>
                    <Image
                      src='/icons/accept.svg'
                      alt='accept'
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

export default Request;
