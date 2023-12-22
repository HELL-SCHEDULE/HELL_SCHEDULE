'use client';
import Title from '@/app/_components/Title';
import NavBar from '@/app/_layout/NavBar';
import WebLayout from '@/app/_layout/WebLayout';
import {
  BtnSection,
  FilterSection,
  RightSection,
  SearchSection,
} from './styles';
import { useCallback, useState } from 'react';
import Link from 'next/link';
import SubNav from '@/app/_layout/SubNav';
import { ContentHeader, Section } from '@/app/_layout/SubNav/styles';

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

  return (
    <WebLayout>
      <NavBar user={'admin'} />
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
    </WebLayout>
  );
};

export default Request;
