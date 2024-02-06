// 로그인
export const loginAPI = async (id: string, password: string) => {
  const params = {
    username: id,
    password: password,
  };

  console.log(params);
  await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error('400 or 500 에러 발생');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch(() => {
      console.error('로그인 API요청 실패');
    });
};

// Id 찾기
export const findAccountIdAPI = async (email: string) => {
  const params = {
    userEmail: email,
  };

  console.log(params);
  await fetch('http://localhost:8454/findIdByEmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error('400 or 500 에러 발생');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch(() => {
      console.error('아이디 찾기 API요청 실패');
    });
};

// Id 중복 체크
export const idDuplicateCheckAPI = async (userId: string) => {
  const params = {
    userId: userId,
  };

  console.log(params);
  await fetch('http://localhost:8454/checkUserId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error('400 or 500 에러 발생');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch(() => {
      console.error('아이디 찾기 API요청 실패');
    });
};
