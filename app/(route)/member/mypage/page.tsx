'use client';
import Image from 'next/image';
import MobileContentLayout from '@/app/_layout/MobileContentLayout';
import React, { useCallback } from 'react';
import {
  MyBasicInfo,
  MyInfo,
  MypageStyle,
  SelectCenter,
  MyInfoModify,
} from './styles';
import { useRouter } from 'next/navigation';

const Mypage = () => {
  const router = useRouter();

  const routeToSeleteCenter = useCallback(() => {
    router.push('/select-senter?title=시설 선택');
  }, []);

  const routeToSearchCenter = useCallback(() => {
    router.push('/select-senter?title=시설 조회');
  }, []);

  const routeToProductSearch = useCallback(() => {
    router.push('/member/select-product?title=수강권 조회');
  }, []);

  const routeToModifyName = useCallback(() => {
    router.push('/member/myinfo-modify/name');
  }, []);

  const routeToModifyEmail = useCallback(() => {
    router.push('/member/myinfo-modify/email');
  }, []);

  const routeToModifyPassword = useCallback(() => {
    router.push('/member/myinfo-modify/password');
  }, []);

  return (
    <MobileContentLayout title='마이페이지'>
      <MypageStyle>
        <MyBasicInfo>
          <div className='profile-wrapper'>
            <Image
              src='/icons/profile.svg'
              alt='profile'
              width={30}
              height={30}
            />
          </div>
          <div className='basic-info-wrapper'>
            <div>
              <span className='strong'>김하정</span> 님
            </div>
            <div>010-5851-0071</div>
            <div>gkwjd719@naver.com</div>
          </div>
        </MyBasicInfo>
        <SelectCenter>
          <div>센터 A</div>
          <div onClick={routeToSeleteCenter}>시설 변경</div>
        </SelectCenter>
        <MyInfo>
          <div className='title'>내 이용 정보</div>
          <div className='info-list'>
            <div className='info-list-item' onClick={routeToSearchCenter}>
              <div>시설 조회</div>
              <Image
                src='/icons/arrow_right.svg'
                alt='arrow_right'
                width={18}
                height={18}
              />
            </div>
            <div className='info-list-item' onClick={routeToProductSearch}>
              <div>수강권 조회</div>
              <Image
                src='/icons/arrow_right.svg'
                alt='arrow_right'
                width={18}
                height={18}
              />
            </div>
          </div>
        </MyInfo>
        <MyInfoModify>
          <div className='title'>내 정보 수정</div>
          <div className='info-list'>
            <div className='info-list-item' onClick={routeToModifyName}>
              <div>프로필 수정</div>
              <Image
                src='/icons/arrow_right.svg'
                alt='arrow_right'
                width={18}
                height={18}
              />
            </div>
            <div className='info-list-item' onClick={routeToModifyEmail}>
              <div>이메일 변경</div>
              <Image
                src='/icons/arrow_right.svg'
                alt='arrow_right'
                width={18}
                height={18}
              />
            </div>
            <div className='info-list-item' onClick={routeToModifyPassword}>
              <div>비밀번호 변경</div>
              <Image
                src='/icons/arrow_right.svg'
                alt='arrow_right'
                width={18}
                height={18}
              />
            </div>
          </div>
        </MyInfoModify>
      </MypageStyle>
    </MobileContentLayout>
  );
};

export default Mypage;
