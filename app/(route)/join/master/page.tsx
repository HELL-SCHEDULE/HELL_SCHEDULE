'use client';
import React, { useCallback } from 'react';
import {
  MasterJoinWrapper,
  SenterImgSection,
  AddressSearch,
  BusinessNumbAuth,
  EmailAuth,
  MasterFormSection,
  MemberClothesForm,
  PhoneNumbForm,
  RockerNumbForm,
} from './styles';
import Button from '@/app/_components/Button';

const Master = () => {
  const style = { background: '#041f86', color: 'white', height: '9%' };

  const onSubmit = useCallback(() => {
    console.log('완료');
  }, []);

  return (
    <MasterJoinWrapper>
      <SenterImgSection>
        <div>backimg</div>
      </SenterImgSection>
      <MasterFormSection>
        <p className='title'>정보를 입력해주세요.</p>
        <input type='text' className='global-input' placeholder='대표자 이름' />
        <EmailAuth>
          <div>
            <input type='text' className='global-input email' />
            <span>@</span>
            <input type='text' className='global-input email' />
            <button className='btn'>인증</button>
          </div>
          <p className='error-message'>이메일 인증에 실패하였습니다.</p>
          {/* <p className='success-message'>이메일 인증이 완료되었습니다.</p>{' '} */}
        </EmailAuth>
        <PhoneNumbForm>
          <select className='global-input phone'>
            <option>010</option>
            <option>011</option>
          </select>
          <span>-</span>
          <input type='text' className='global-input phone' />
          <span>-</span>
          <input type='text' className='global-input phone' />
        </PhoneNumbForm>
        <input type='text' className='global-input' placeholder='상호명' />
        <AddressSearch>
          <input
            type='text'
            className='global-input address'
            placeholder='주소'
          />
          <button className='btn'>검색</button>
        </AddressSearch>
        <BusinessNumbAuth>
          <div>
            <input
              type='text'
              className='global-input business'
              placeholder='사업자 번호'
            />
            <button className='btn'>확인</button>
          </div>
          <p className='error-message'>
            대표자와 사업자 번호를 확인할 수 없습니다.
          </p>
        </BusinessNumbAuth>
        <RockerNumbForm>
          <p>락커 총 횟수</p>
          <div>
            <input
              type='text'
              className='global-input rocker'
              placeholder='0'
            />
            <span>개</span>
          </div>
        </RockerNumbForm>
        <MemberClothesForm>
          <div className='clothes-check-warpper'>
            <p>회원복</p>
            <div>
              <label>
                <input className='price-check' type='checkbox' />
                금액 O
              </label>
              <label>
                <input className='price-check' type='checkbox' />
                금액 X
              </label>
            </div>
          </div>
          <p className='error-message'>
            회원복을 지원하지 않는 경우에는 ‘금액x’ 를 선택해주세요.
          </p>
        </MemberClothesForm>
        <Button title='완료' style={style} onClickHandler={onSubmit} />
      </MasterFormSection>
    </MasterJoinWrapper>
  );
};

export default Master;
