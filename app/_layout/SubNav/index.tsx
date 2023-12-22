import React from 'react';
import { SubNavStyles } from './styles';

interface Props {
  children: React.ReactNode;
}
const SubNav = ({ children }: Props) => {
  return <SubNavStyles>{children}</SubNavStyles>;
};

export default SubNav;
