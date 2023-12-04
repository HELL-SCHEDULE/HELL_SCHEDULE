'use client';

import { SectionWrapper, FormTitleSection, SenterImgSection } from './styles';

interface Props {
  title: string;
  children: React.ReactNode;
}

const AccountLayout = ({ title, children }: Props) => {
  return (
    <SectionWrapper>
      <SenterImgSection>
        <div>backimg</div>
      </SenterImgSection>
      <FormTitleSection>
        <div className='form-section-wrapper'>
          <div className='form-title-logo'></div>
          <div className='form-title'>{title}</div>
          <div className='form-content'>{children}</div>
        </div>
      </FormTitleSection>
    </SectionWrapper>
  );
};
export default AccountLayout;
