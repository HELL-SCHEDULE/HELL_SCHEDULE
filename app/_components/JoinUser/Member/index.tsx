import React from 'react';
import { EmailAuth, MasterFormSection1, PhoneNumbForm } from '../Master/styles';

const Member = () => {
  return (
    <MasterFormSection1>
      <input type='text' className='global-input' placeholder='회원 이름' />
      <EmailAuth>
        <div>
          <input type='text' className='global-input email' />
          <span>@</span>
          <input type='text' className='global-input email' />
          <button className='btn'>인증</button>
        </div>
        <p className='error-message'>이메일 인증이 완료되었습니다.</p>
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
    </MasterFormSection1>
  );
};

export default Member;
