import axios from 'axios';
import { backUrl } from '../config/config';

// 로그인
export const loginAPI = async (id: string, password: string) => {
  const params = {
    username: id,
    password: password,
  };

  console.log(params);

  axios
    .post(`${backUrl}/login`, params)
    .then((response) => {
      // 응답 데이터 처리
      console.log(response.data);
    })
    .catch((error) => {
      // 에러 처리
      console.error('로그인 API요청 실패');
    });
};

// id 중복확인
export const idDuplicateCheckAPI = async (id: string) => {
  const params = {
    signname: id,
  };

  console.log(params);

  // axios
  //   .post(`${backUrl}/duplicate`, params)
  //   .then((response) => {
  //     // 응답 데이터 처리
  //     console.log(response);
  //     console.log(response.data);
  //     return response.data;
  //   })
  //   .catch((error) => {
  //     // 에러 처리
  //     console.error('id 중복확인 API요청 실패');
  //   });
  return false;
};

// email 중복확인
export const emailDuplicateCheckAPI = async (id: string) => {
  const params = {
    signname: id,
  };

  console.log(params);

  axios
    .post(`${backUrl}/duplicate`, params)
    .then((response) => {
      // 응답 데이터 처리
      console.log(response);
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      // 에러 처리
      console.error('email 중복확인 API요청 실패');
    });
};

// 회원, 강사 회원가입
export const joinBasicAPI = async (account: { [key: string]: string }) => {
  const params = {
    role: account.role,
    signname: account.signname,
    password: account.password,
    username: account.username,
    email: account.email,
    phone: account.phone,
  };

  axios
    .post(`${backUrl}/user`, params)
    .then((response) => {
      // 응답 데이터 처리
      console.log(response);
      console.log(response.data);
      return response.data.message;
    })
    .catch((error) => {
      // 에러 처리
      console.error('회원, 강사 회원가입 API요청 실패');
    });
};
