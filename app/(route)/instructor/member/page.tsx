import NavBar from '@/app/_layout/NavBar';
import WebLayout from '@/app/_layout/WebLayout';
import React from 'react';

function Member() {
  return (
    <WebLayout>
      <NavBar user={'instructor'} />
    </WebLayout>
  );
}

export default Member;
