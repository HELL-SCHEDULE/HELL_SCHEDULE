'use client';
import Image from 'next/image';
import MobileContentLayout from '@/app/_layout/MobileContentLayout';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import {
  CenterSection,
  ProductsPage,
  ProductsSection,
  ScheduledClassSection,
} from './styles';
import ClassCard from '@/app/_components/ClassCard';
import MemberProductCard from '@/app/_components/MemberProductCard';
const Products = () => {
  const products = [
    {
      name: '1:1 PT',
      period: '2023.10.30 ~ 2024.02.26',
      instructor: '김하정',
      reservationAvailable: 12,
      cancellable: 10,
      remain: 14,
      allCount: 30,
    },
    {
      name: '2:1 그룹 PT',
      period: '2023.10.30 ~ 2024.02.26',
      instructor: '김하정',
      reservationAvailable: 12,
      cancellable: 10,
      remain: 14,
      allCount: 30,
    },
  ];

  const scheduledClass = [
    {
      date: '2024.01.16(화) 19:00 ~ 19:50',
      className: '1:1 PT',
      // img:'' 강사 이미지 src
      instructorName: '김하정1',
    },
    {
      date: '2024.01.16(화) 19:00 ~ 19:50',
      className: '1:1 PT',
      // img:'' 강사 이미지 src
      instructorName: '김하정2',
    },
  ];

  return (
    <MobileContentLayout title='수강권'>
      <ProductsPage>
        <CenterSection>
          <div className='center-name'>센터 A </div>
          <div className='select-center-wrapper'>
            <Image
              src='/image/center-select.png'
              alt='center-select'
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '5%', height: 'auto' }}
            />
            <div>시설 선택</div>
          </div>
        </CenterSection>
        <ProductsSection>
          <div className='title'>수강권</div>
          <div className='product-state'>사용중</div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{
              clickable: true,
              currentClass: 'swiper-pagination-current',
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {products.map((product: { [key: string]: any }, i: number) => (
              <SwiperSlide key={i}>
                <MemberProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </ProductsSection>
        <ScheduledClassSection>
          <div className='title'>예약된 수업</div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{
              clickable: true,
              currentClass: 'swiper-pagination-current',
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {scheduledClass.map((item: { [key: string]: any }, i: number) => (
              <SwiperSlide key={i}>
                <ClassCard key={i} classInfo={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </ScheduledClassSection>
      </ProductsPage>
    </MobileContentLayout>
  );
};

export default Products;
