'use client';
import React, { useState } from 'react';
import {
  EmailAuth,
  MasterFormSection1,
  PhoneNumbForm,
  Buttton,
} from './styles';
import useInput from '@/app/hooks/useInput';
import AccountLayout from '@/app/_layout/AccountLayout';

const Basic = () => {
  const [name, onChangeName] = useInput('');

  const [email, onChangeEmail] = useInput('');
  const [emailAddress, setEmailAddress] = useState('');

  const [phone1, setPhone1] = useState('');
  const [phone2, onChangePhone2] = useInput('');
  const [phone3, onChangePhone3] = useInput('');

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
              <option value={'naver'}>naver</option>
              <option value={'gmail'}>gmail</option>
            </select>
            <button className='btn'>인증</button>
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
      <Buttton>완료</Buttton>
    </AccountLayout>
  );
};

export default Basic;
