'use client';
import Image from 'next/image';
import Title from '@/app/_components/Title';
import NavBar from '@/app/_layout/NavBar';
import SubNav from '@/app/_layout/SubNav';
import {
  ContentHeader,
  RightSection,
  SearchSection,
  Section,
} from '@/app/_layout/SubNav/styles';
import WebLayout from '@/app/_layout/WebLayout';
import Link from 'next/link';
import { BtnSection, Pagination } from '../member/styles';
import {
  Content,
  PageContent,
  PageContentWrpper,
} from '@/app/_layout/WebLayout/styles';
import InstructorCard from '@/app/_components/InstructorCard';
import { useCallback, useState } from 'react';
import ModalLayout from '@/app/_layout/ModalLayout';
import InstructorRgModal from '@/app/_components/Modal/InstructorRgModal';
import InstructorDetailModal from '@/app/_components/Modal/InstructorDetailModal';

const Instructor = () => {
  const instuctors = [
    {
      name: '김하정1',
      email: '****@****',
      phone_number: '010-****-****',
    },
    {
      name: '김하정2',
      email: '****@****',
      phone_number: '010-****-****',
    },
    {
      name: '김하정3',
      email: '****@****',
      phone_number: '010-****-****',
    },
    {
      name: '김하정4',
      email: '****@****',
      phone_number: '010-****-****',
    },
    {
      name: '김하정5',
      email: '****@****',
      phone_number: '010-****-****',
    },
    {
      name: '김하정6',
      email: '****@****',
      phone_number: '010-****-****',
    },
  ];

  const pagination = new Array(Math.ceil(instuctors.length / 9))
    .fill(0)
    .map((v, i) => i + 1);

  const [isClickedEdit, setisClickedEdit] = useState(false);
  const onClickEdit = useCallback(() => {
    setisClickedEdit((prev) => !prev);
  }, []);

  const handleDeleteInstructor = useCallback(() => {
    console.log('삭제');
    setisClickedEdit(false);
  }, []);

  const [isOpenedRegisterModal, setIsOpenedRegisterModal] = useState(false);

  const handleRegisterModal = useCallback(() => {
    setIsOpenedRegisterModal((prev) => !prev);
  }, []);

  const [isOpenedDetailModal, setIsOpenedDetailModal] = useState(false);
  const [instructorInfo, setInstructorInfo] = useState<{
    [key: string]: string;
  }>({});

  const handleDetailModal = useCallback(() => {
    setIsOpenedDetailModal((prev) => !prev);
  }, []);

  const getInstructorInfo = useCallback(
    (instructor: { [key: string]: string }) => {
      setInstructorInfo(instructor);
    },
    []
  );

  return (
    <WebLayout>
      <NavBar user={'master'} />
      <PageContentWrpper>
        <Title title={'강사 관리'} />
        <ContentHeader>
          <SubNav>
            <ul>
              <li className='active'>
                <Link href={'/master/instructor'}>3명의 강사</Link>
              </li>
            </ul>
          </SubNav>
          <Section>
            <RightSection>
              <SearchSection>
                <input type='text'></input>
                <div className='icon'></div>
              </SearchSection>
              <BtnSection>
                {isClickedEdit ? (
                  <button
                    onClick={() => {
                      handleDeleteInstructor();
                    }}
                  >
                    삭제
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      onClickEdit();
                    }}
                  >
                    편집
                  </button>
                )}
                <button
                  onClick={() => {
                    handleRegisterModal();
                  }}
                >
                  등록
                </button>
              </BtnSection>
            </RightSection>
          </Section>
        </ContentHeader>
        <PageContent>
          <Content grid='instructor'>
            {instuctors.map((instuctor, i) => (
              <InstructorCard
                key={i}
                instructor={instuctor}
                isClickedEdit={isClickedEdit}
                handleDetailModal={handleDetailModal}
                getInstructorInfo={getInstructorInfo}
              />
            ))}
          </Content>
          <Pagination>
            <span>
              <Image
                src='/icons/arrow_left.svg'
                alt='arrow_left'
                width={16}
                height={16}
              />
            </span>
            {pagination.map((page, i) => (
              <span key={i}>{page}</span>
            ))}
            <span>
              <Image
                src='/icons/arrow_right.svg'
                alt='arrow_right'
                width={16}
                height={16}
              />
            </span>
          </Pagination>
        </PageContent>
        {isOpenedRegisterModal && (
          <ModalLayout onCloseModal={handleRegisterModal}>
            <InstructorRgModal onCloseModal={handleRegisterModal} />
          </ModalLayout>
        )}
        {isOpenedDetailModal && (
          <ModalLayout onCloseModal={handleDetailModal}>
            <InstructorDetailModal
              instructorInfo={instructorInfo}
              onCloseModal={handleDetailModal}
            />
          </ModalLayout>
        )}
      </PageContentWrpper>
    </WebLayout>
  );
};

export default Instructor;
