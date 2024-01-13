'use client';
import Image from 'next/image';
import Title from '@/app/_components/Title';
import NavBar from '@/app/_layout/NavBar';
import SubNav from '@/app/_layout/SubNav';
import { ContentHeader, Section } from '@/app/_layout/SubNav/styles';
import WebLayout from '@/app/_layout/WebLayout';
import Link from 'next/link';
import {
  BtnSection,
  Pagination,
  RightSection,
  SearchSection,
} from '../../member/styles';
import {
  Content,
  PageContent,
  PageContentWrpper,
} from '@/app/_layout/WebLayout/styles';
import ProductCard from '@/app/_components/ProductCard';
import { useCallback, useState } from 'react';
import ModalLayout from '@/app/_layout/ModalLayout';
import ProductModal from '@/app/_components/Modal/ProductModal';

const Tickets = () => {
  const tickets = [
    {
      name: '그룹 피티 10회권',
      period: '3개월',
      price: '300,000',
    },
    {
      name: '그룹 피티 10회권',
      period: '3개월',
      price: '300,000',
    },
    {
      name: '그룹 피티 10회권',
      period: '3개월',
      price: '300,000',
    },
  ];

  const pagination = new Array(Math.ceil(tickets.length / 10))
    .fill(0)
    .map((v, i) => i + 1);

  const [isClickedEdit, setisClickedEdit] = useState(false);
  const handleEditTicket = useCallback(() => {
    setisClickedEdit((prev) => !prev);
  }, []);

  const handleDeleteTicket = useCallback(() => {
    console.log('삭제');
    setisClickedEdit(false);
  }, []);

  const [isOpenedRegisterModal, setIsOpenedRegisterModal] = useState(false);

  const handleRegisterModal = useCallback(() => {
    setIsOpenedRegisterModal((prev) => !prev);
  }, []);

  const [isOpenedModifyModal, setIsOpenedModifyModal] = useState(false);

  const handleModifyModal = useCallback(() => {
    setIsOpenedModifyModal((prev) => !prev);
  }, []);

  return (
    <WebLayout>
      <NavBar user={'master'} />
      <PageContentWrpper>
        <Title title={'상품 관리'} />
        <ContentHeader>
          <SubNav>
            <ul>
              <li className='active'>
                <Link href={'/master/products/tickets'}>수강권</Link>
              </li>
              <li>
                <Link href={'/master/products/locklook'}>락커 및 회원복</Link>
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
                      handleDeleteTicket();
                    }}
                  >
                    삭제
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      handleEditTicket();
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
          <Content grid='product'>
            {tickets.map((ticket, i) => (
              <ProductCard
                key={i}
                type={'상품 관리'}
                product={ticket}
                isClickedEdit={isClickedEdit}
                handleModifyModal={handleModifyModal}
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
            <ProductModal
              title={'수강권 등록'}
              onCloseModal={handleRegisterModal}
            />
          </ModalLayout>
        )}
        {isOpenedModifyModal && (
          <ModalLayout onCloseModal={handleModifyModal}>
            <ProductModal
              title={'수강권 수정'}
              onCloseModal={handleModifyModal}
            />
          </ModalLayout>
        )}
      </PageContentWrpper>
    </WebLayout>
  );
};

export default Tickets;
