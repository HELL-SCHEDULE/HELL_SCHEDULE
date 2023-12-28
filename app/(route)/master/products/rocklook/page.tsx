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
} from '../../member/styles';
import {
  Content,
  PageContent,
  PageContentWrpper,
} from '@/app/_layout/WebLayout/styles';
import ProductCard from '@/app/_components/ProductCard';
import { useCallback, useState } from 'react';

const RockLook = () => {
  const looks = [
    {
      name: '락커 3개월 이용권',
      period: '3개월',
      price: '300,000',
    },
    {
      name: '락커 3개월 이용권',
      period: '3개월',
      price: '300,000',
    },
    {
      name: '락커 3개월 이용권',
      period: '3개월',
      price: '300,000',
    },
    {
      name: '락커 3개월 이용권',
      period: '3개월',
      price: '300,000',
    },
    {
      name: '락커 3개월 이용권',
      period: '3개월',
      price: '300,000',
    },
    {
      name: '락커 3개월 이용권',
      period: '3개월',
      price: '300,000',
    },
    {
      name: '락커 3개월 이용권',
      period: '3개월',
      price: '300,000',
    },
    {
      name: '락커 3개월 이용권',
      period: '3개월',
      price: '300,000',
    },
    {
      name: '락커 3개월 이용권',
      period: '3개월',
      price: '300,000',
    },
  ];

  const pagination = new Array(Math.ceil(looks.length / 10))
    .fill(0)
    .map((v, i) => i + 1);

  const [isClickedModify, setisClickedModify] = useState(false);
  const onClickModify = useCallback(() => {
    setisClickedModify((prev) => !prev);
  }, []);

  const handleDeleteInstructor = useCallback(() => {
    console.log('삭제');
    setisClickedModify(false);
  }, []);
  return (
    <WebLayout>
      <NavBar user={'master'} />
      <PageContentWrpper>
        <Title title={'상품 관리'} />
        <ContentHeader>
          <SubNav>
            <ul>
              <li>
                <Link href={'/master/products/tickets'}>수강권</Link>
              </li>
              <li className='active'>
                <Link href={'/master/products/rocklook'}>락커 및 회원복</Link>
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
                {isClickedModify ? (
                  <button
                    onClick={() => {
                      handleDeleteInstructor();
                    }}
                  >
                    삭제
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      onClickModify();
                    }}
                  >
                    편집
                  </button>
                )}
                <button>등록</button>
              </BtnSection>
            </RightSection>
          </Section>
        </ContentHeader>
        <PageContent>
          <Content grid='product'>
            {looks.map((look, i) => (
              <ProductCard
                key={i}
                product={look}
                isClickedModify={isClickedModify}
              />
            ))}
          </Content>
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

export default RockLook;
