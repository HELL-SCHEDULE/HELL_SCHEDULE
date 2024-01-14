import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
}

const TitleStyle = styled.div`
  height: 8%;
  font-size: 22px;
  font-weight: 600;
  display: flex;
  align-items: center;
  // padding: 3.04% 0 1.3% 2.04%;
  @media all and (min-width: 1024px) and (max-width: 1919px) {
    font-size: 20px;
  }
`;
const Title = ({ title }: Props) => {
  return <TitleStyle>{title}</TitleStyle>;
};

export default Title;
