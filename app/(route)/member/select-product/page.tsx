'use client';
import Image from 'next/image';
import MobileLayout from '@/app/_layout/MobileLayout';
import React, { useCallback } from 'react';
import {
  ChoiceButtonWrapper,
  ContentHeader,
  PageContent,
  PageHeader,
  PageWrapper,
  ProductsWrapper,
  SelectCenter,
} from './styles';
import { useRouter, useSearchParams } from 'next/navigation';
import ProductSelectCard from '@/app/_components/ProductSelectCard';

const SelectProduct = () => {
  const router = useRouter();
  const routeToSeleteCenter = useCallback(() => {
    router.push('/select-senter?title=시설 선택');
  }, []);

  const goBack = useCallback(() => {
    router.back();
  }, []);

  const params = useSearchParams();
  const title = params.get('title');

  const products = [
    {
      name: '1:1 PT',
      period: '2023. 10. 30 ~ 2024. 2. 26',
      remain: 11,
      canCellable: 997,
    },
    {
      name: '1:1 PT',
      period: '2023. 10. 30 ~ 2024. 2. 26',
      remain: 11,
      canCellable: 997,
    },
  ];

  return (
    <MobileLayout>
      <PageWrapper>
        <PageHeader>
          <Image
            src='/icons/arrow_left.svg'
            alt='arrow_left'
            width={15}
            height={15}
            onClick={goBack}
          />
          {title}
        </PageHeader>
        <PageContent>
          {title == '수강권 선택' ? (
            <ContentHeader>
              수강권을 <br />
              선택해 주세요.
            </ContentHeader>
          ) : (
            <ContentHeader>
              {products.length}개의 <br />
              수강권이 있어요.
            </ContentHeader>
          )}
          <SelectCenter>
            <div>센터 A</div>
            <button onClick={routeToSeleteCenter}>변경</button>
          </SelectCenter>
          <ProductsWrapper>
            {products.map((product, i) => (
              <ProductSelectCard product={product} key={i} />
            ))}
          </ProductsWrapper>
          <ChoiceButtonWrapper>
            <button>시설 선택하기</button>
          </ChoiceButtonWrapper>
        </PageContent>
      </PageWrapper>
    </MobileLayout>
  );
};

export default SelectProduct;
