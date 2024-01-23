'use client';
import Image from 'next/image';
import React, { useCallback, useState } from 'react';

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
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

// 로그인 성공하면 쿼리스트링으로 회원인지 강사인지 넘겨줌

const SelectSenter = () => {
  const center = ['센터 A', '센터 B'];
  const router = useRouter();

  const goBack = useCallback(() => {
    router.back();
  }, []);
  const params = useSearchParams();
  const title = params.get('title');

  const [isClickedDeleteBtn, setIsClickedDeleteBtn] = useState(false);
  const visibleDeleteBtn = useCallback(() => {
    setIsClickedDeleteBtn((prev) => !prev);
  }, []);

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
        <PageInfo>
          <Image
            src='/image/senter_search.png'
            alt='senter_search'
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '35%', height: 'auto' }}
          />
          {title == '시설 조회' ? (
            <div className='description'>
              {center.length} 개의 시설을 <br /> 이용하고 있어요.
              <span className='center-delete' onClick={visibleDeleteBtn}>
                {isClickedDeleteBtn ? '삭제 취소' : '시설 삭제'}
              </span>
            </div>
          ) : (
            <div className='description'>
              이용하실 시설을 <br /> 선택해주세요.
            </div>
          )}
        </PageInfo>
        <SenterButtonWrapper>
          {center.map((item, i) => (
            <div key={i}>
              <button className='center-button' key={i}>
                {item}
              </button>
              <div className={`delete ${isClickedDeleteBtn && 'visible'}`}>
                <Image
                  src='/icons/delete.svg'
                  alt='delete'
                  width={16}
                  height={16}
                />
              </div>
            </div>
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
