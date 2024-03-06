'use client';
import React, { use, useCallback, useEffect, useState } from 'react';
import {
  EmailAuth,
  MasterFormSection1,
  PhoneNumbForm,
  Buttton,
} from './styles';
import useInput from '@/app/hooks/useInput';
import AccountLayout from '@/app/_layout/AccountLayout';
import { useRouter } from 'next/navigation';
import { emailDuplicateCheckAPI, joinBasicAPI } from '@/app/api/accout';
import { useData } from '@/DataContext';

const Basic = () => {
  const [name, onChangeName] = useInput('');

  const [email, onChangeEmail] = useInput('');
  const [emailAddress, setEmailAddress] = useState('naver.com');

  const [phone1, setPhone1] = useState('010');
  const [phone2, onChangePhone2] = useInput('');
  const [phone3, onChangePhone3] = useInput('');

  const router = useRouter();
  const { account } = useData(); // 나중에 ssr로 가져오기
  // 이메일 인증완료, 입력값 다 받았을때만 동작하도록
  // 각 입력값 유효성 검사
  const onSubmit = useCallback(async () => {
    account.username = name;
    account.email = `${email}@${emailAddress}`;
    account.phone = phone1 + phone2 + phone3;
    console.log(account);
    const result: string = await joinBasicAPI(account);
    console.log(result);
    if (result == 'OK') {
      // router.push('/login');
    }
  }, [name, email, emailAddress, phone1, phone2, phone3]);

  const emailAuth = useCallback(async () => {
    const result = await emailDuplicateCheckAPI(`${email}@${emailAddress}`);
    console.log(result);
  }, [email, emailAddress]);

  return (
    <AccountLayout title={'정보를 입력해주세요.'}>
      <MasterFormSection1>
        <input
          type='text'
          className='global-input'
          placeholder='이름'
          value={name}
          onChange={onChangeName}
        />
        <EmailAuth>
          <div>
            <input
              type='text'
              className='global-input email'
              placeholder='example'
              value={email}
              onChange={onChangeEmail}
            />
            <span>@</span>
            <select
              className='email'
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            >
              <option value={'naver.com'}>naver.com</option>
              <option value={'gmail.com'}>gmail.com</option>
            </select>
            <button className='btn' onClick={emailAuth}>
              인증
            </button>
          </div>
          <p className='error-message'>이메일 인증에 실패하였습니다.</p>
          {/* <p className='success-message'>이메일 인증이 완료되었습니다.</p> */}
        </EmailAuth>
        <PhoneNumbForm>
          <select
            className='global-input phone'
            value={phone1}
            onChange={(e) => setPhone1(e.target.value)}
          >
            <option value={'010'}>010</option>
            <option value={'011'}>011</option>
          </select>
          <span>-</span>
          <input
            type='text'
            className='global-input phone'
            value={phone2}
            onChange={onChangePhone2}
          />
          <span>-</span>
          <input
            type='text'
            className='global-input phone'
            value={phone3}
            onChange={onChangePhone3}
          />
        </PhoneNumbForm>
      </MasterFormSection1>
      <Buttton onClick={onSubmit}>완료</Buttton>
    </AccountLayout>
  );
};

export async function getServerSideProps(context: any) {
  // 데이터를 가져오는 로직을 여기에 작성

  // 데이터를 props로 전달하여 페이지에 제공
  return {
    // props: { account },
  };
}

export default Basic;
