'use client';
import { useEffect, useState } from 'react';
import WebSizeError from '@/app/_components/WebSizeError';

interface Props {
  children: React.ReactNode;
}

// 로그인 후 admin, master일 경우 웹 layout
const WebLayout = ({ children }: Props) => {
  const [innerWidth, setInnerWidth] = useState<number>();

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener('resize', resizeListener);
    resizeListener();
    return () => window.removeEventListener('resize', resizeListener);
  }, [innerWidth]);

  return (
    <div
      style={{
        width: '100vw',
        minHeight: '730px',
        height: '100vh',
      }}
    >
      {innerWidth! < 1024 ? (
        <WebSizeError />
      ) : (
        <div style={{ height: '100%' }}>{children}</div>
      )}
    </div>
  );
};

export default WebLayout;
