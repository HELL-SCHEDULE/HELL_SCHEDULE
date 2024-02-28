'use client';
import React, { use, useCallback, useState } from 'react';
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
  StartDate,
  EmailNumberAuth,
  ButtonSection,
} from './styles';
import { useRouter } from 'next/navigation';
import useInput from '@/app/hooks/useInput';
import axios from 'axios';

const Master = () => {
  const style = { background: '#041f86', color: 'white', height: '6.7%' };

  const [name, onChangeName] = useInput('');
  const [centerNumber, onChangeCenterNumber] = useInput('');
  const [startDate, onChangeStartDate] = useInput('');
  const [email_1, onChangeEmail_1] = useInput('');
  const [email_2, onChangeEmail_2] = useInput('');
  const [emailNumber, onChangeEmailNumber] = useInput('');
  const [verificationCenterNumberError, setVerificationCenterNumberError] =
    useState(false);
  const [verificationEmailError, setVerificationEmailError] = useState(false);

  const router = useRouter();

  const onSubmit = useCallback(() => {
    router.push('/login');
  }, []);

  const verificateCenterNumber = useCallback(() => {
    if (name && centerNumber && startDate) {
      axios
        .post(
          `http://api.odcloud.kr/api/nts-businessman/v1/validate?serviceKey=${process.env.NEXT_PUBLIC__SERVICE_KEY}`,
          {
            businesses: [
              {
                b_no: centerNumber,
                start_dt: startDate.replaceAll('-', ''),
                p_nm: name,
                p_nm2: '',
                b_nm: '',
                corp_no: '',
                b_sector: '',
                b_type: '',
                b_adr: '',
              },
            ],
          }
        )
        .then((response) => {
          // 인증 성공
          if (response.data.data[0].valid === '01') {
            alert('사업자 번호 인증을 완료했습니다.');
            setVerificationCenterNumberError(false);
          } else {
            setVerificationCenterNumberError(true);
          }
        })
        .catch((error) => {
          // 에러 처리
          console.error(error);
        });
    } else {
      alert('이름, 개업 일자, 사업자 번호를 입력해주세요!');
    }
  }, [name, startDate, centerNumber]);

  const verificateEmail = useCallback(() => {
    if (email_1 && email_2)
      alert('입력하신 이메일로 인증 번호가 전송되었습니다.');
  }, [email_1, email_2]);

  const verificateEmailNumber = useCallback(() => {
    // 인증번호 인증 성공 시 로직
    // setVerificationEmailError(true);
    // 인증번호 인증 실패 시 로직
    // setVerificationEmailError(false);
  }, []);

  return (
    <MasterJoinWrapper>
      <SenterImgSection>
        <div>backimg</div>
      </SenterImgSection>
      <MasterFormSection>
        <p className='title'>정보를 입력해주세요.</p>
        <input
          type='text'
          className='global-input'
          placeholder='대표자 이름'
          onChange={onChangeName}
        />
        <EmailAuth>
          <input
            type='text'
            className='global-input email'
            onChange={onChangeEmail_1}
          />
          <span>@</span>
          <select
            className='strong input email'
            value={email_2}
            onChange={onChangeEmail_2}
          >
            <option value={'naver'}>naver</option>
            <option value={'gmail'}>gmail</option>
          </select>
          <button className='btn' onClick={verificateEmail}>
            인증
          </button>
        </EmailAuth>
        <EmailNumberAuth>
          <input
            type='text'
            className='global-input email-number'
            placeholder='인증번호를 입력해주세요.'
            onChange={onChangeEmailNumber}
          />
          <button className='btn' onClick={verificateEmailNumber}>
            확인
          </button>
          {verificationEmailError && (
            <p className='error-message'>이메일 인증에 실패하였습니다.</p>
          )}
        </EmailNumberAuth>

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
        <StartDate>
          <p>개업 일자</p>
          <input
            type='date'
            className='global-input date'
            placeholder='개업 일자'
            onChange={onChangeStartDate}
          />
        </StartDate>
        <BusinessNumbAuth>
          <input
            type='text'
            className='global-input business'
            placeholder='사업자 번호'
            onChange={onChangeCenterNumber}
          />
          <button className='btn' onClick={verificateCenterNumber}>
            확인
          </button>

          {verificationCenterNumberError && (
            <p className='error-message'>
              사업자등록정보 진위확인을 실패하였습니다.
            </p>
          )}
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
        <ButtonSection onClick={onSubmit}>완료</ButtonSection>
      </MasterFormSection>
    </MasterJoinWrapper>
  );
};

export default Master;
