'use client';

import Image from 'next/image';
import React, { useCallback } from 'react';
import {
  MemberDetailModalStyle,
  MemberDetailModalHeader,
  MemberDetailModalContent,
} from './styles';

// import library
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

interface Props {
  memberInfo: { [key: string]: any };
  onCloseModal: () => void;
}

const MemberDetailModal = ({ memberInfo, onCloseModal }: Props) => {
  const stopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);
  console.log(memberInfo);

  return (
    <MemberDetailModalStyle onClick={stopPropagation}>
      <MemberDetailModalHeader>
        <span>
          {memberInfo.name}님의 수강권
          <Image
            onClick={onCloseModal}
            src='/icons/modify.svg'
            alt='modify'
            width={22}
            height={22}
            style={{ cursor: 'pointer' }}
          />
        </span>
        <Image
          onClick={onCloseModal}
          src='/icons/close_modal.svg'
          alt='close_modal'
          width={18}
          height={18}
          style={{ cursor: 'pointer' }}
        />
      </MemberDetailModalHeader>
      <MemberDetailModalContent>
        <Swiper
          // install Swiper modules
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
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </MemberDetailModalContent>
    </MemberDetailModalStyle>
  );
};

export default MemberDetailModal;
