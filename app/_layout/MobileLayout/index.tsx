'use client';
import { Layout } from './styles';

interface Props {
  children: React.ReactNode;
}

// 로그인 후 member일 경우 mobile layout
const MobileLayout = ({ children }: Props) => {
  return <Layout>{children}</Layout>;
};

export default MobileLayout;
