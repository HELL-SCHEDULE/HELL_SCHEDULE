import React, { useCallback } from 'react';
import { FindAccountIdFrom } from './styles';
import Button from '../../Button';

const FindAccountId = () => {
  const style = { background: '#041f86', color: 'white', height: '21.8%' };

  const onClickHandler = useCallback(() => {
    console.log('아이디 찾기');
  }, []);

  return (
    <FindAccountIdFrom>
      <p>헬스케줄에 가입한 이메일을 정확히 입력해 주세요.</p>
      <input
        className='account-input'
        type='text'
        placeholder='example@gmail.com'
      />
      <Button
        title={'아이디 찾기'}
        style={style}
        onClickHandler={onClickHandler}
      />
    </FindAccountIdFrom>
  );
};

export default FindAccountId;
