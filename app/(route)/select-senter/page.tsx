'use client';
import Image from 'next/image';
import React from 'react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MobileLayout from '@/app/_layout/MobileLayout';
import {
  PageWrapper,
  PageHeader,
  PageInfo,
  SenterButtonWrapper,
  ChoiceButtonWrapper,
} from './syles';

// 로그인 성공하면 쿼리스트링으로 회원인지 강사인지 넘겨줌

const SelectSenter = () => {
  const senter = ['센터 A', '센터 B'];
  return (
    <MobileLayout>
      <PageWrapper>
        <PageHeader>
          <Image
            src='/icons/arrow_left.svg'
            alt='arrow_left'
            width={15}
            height={15}
          />
          시설 선택
        </PageHeader>
        <PageInfo>
          <Image
            src='/image/senter_search.png'
            alt='senter_search'
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '35%', height: 'auto' }}
          />
          <div className='description'>
            이용하실 시설을 <br /> 선택해주세요.
          </div>
        </PageInfo>
        <SenterButtonWrapper>
          {senter.map((item, i) => (
            <button key={i}>{item}</button>
          ))}
        </SenterButtonWrapper>
        <ChoiceButtonWrapper>
          <button>시설 선택하기</button>
        </ChoiceButtonWrapper>
      </PageWrapper>
    </MobileLayout>
  );
};

export default SelectSenter;
