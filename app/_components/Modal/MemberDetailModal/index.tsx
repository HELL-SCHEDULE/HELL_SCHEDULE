'use client';

import Image from 'next/image';
import React, { useCallback } from 'react';
import {
  MemberDetailModalStyle,
  MemberDetailModalHeader,
  MemberDetailModalContent,
  ProductInfoWrapper,
  ProductInfoWrapperMainNav,
  ProductInfoWrapperSubNav,
  InfoWrapper,
} from './styles';

// import library
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import ProductSwiperSlide from '../../ProductSwiperSlide';
import ProductDetailInfoCard from '../../ProductDetailInfoCard';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

interface Props {
  memberInfo: { [key: string]: any };
  onCloseModal: () => void;
  handleModifyModal: () => void;
  getMemberInfo: Function;
}

const MemberDetailModal = ({
  memberInfo,
  onCloseModal,
  handleModifyModal,
  getMemberInfo,
}: Props) => {
  const stopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);
  console.log(memberInfo);

  const onClickModifyIcon = useCallback(() => {
    getMemberInfo(memberInfo);
    handleModifyModal();
    onCloseModal();
  }, []);

  return (
    <MemberDetailModalStyle onClick={stopPropagation}>
      <MemberDetailModalHeader>
        <span>
          {memberInfo.name}님의 수강권
          <Image
            onClick={onClickModifyIcon}
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
          {memberInfo.product.map(
            (product: { [key: string]: any }, i: number) => (
              <SwiperSlide key={i}>
                <ProductSwiperSlide product={product} key={i} />
              </SwiperSlide>
            )
          )}
        </Swiper>
        <ProductInfoWrapper>
          <ProductInfoWrapperMainNav>
            <div>이용내역</div>
          </ProductInfoWrapperMainNav>
          <ProductInfoWrapperSubNav>
            <div className='focus'>전체</div>
            <div>예약</div>
            <div>이용완료</div>
            <div>취소</div>
            <div>수강권 변경</div>
          </ProductInfoWrapperSubNav>
          <InfoWrapper>
            <ProductDetailInfoCard />
            <ProductDetailInfoCard />
            <ProductDetailInfoCard />
          </InfoWrapper>
        </ProductInfoWrapper>
      </MemberDetailModalContent>
    </MemberDetailModalStyle>
  );
};

export default MemberDetailModal;
