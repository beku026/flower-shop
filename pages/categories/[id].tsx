import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/dist/client/image';
import classes from '../../components/AuthorBouquets/authorBouquets.module.scss';
import arrow1 from '../../assets/images/subscription/arrow.svg';
import { CircularProgress } from '@mui/material';
import { Container } from 'react-bootstrap';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import SidebarItem from '../../components/AuthorBouquets/SideBar/SidebarItem';
import AuthorBouquetsItem from '../../components/AuthorBouquets/AuthorBouquetsItem';

import React, { useEffect } from 'react';
import { GetStaticProps } from 'next';
import $api from '../../utils/axios';
import { ApiResponse } from '../../redux/types/apiTypes';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { IProductV2 } from '../../redux/types/product';
import { useRouter } from 'next/router';
import {
  productSelectors,
  fetchProducts,
} from '../../redux/products/product.slice';
import {
  categoriesSelectors,
  fetchCategories,
} from '../../redux/products/categories.slice';

type Props = {
  data?: IProductV2 | null;
  error?: any;
};
function Categories(props: Props) {
  const router = useRouter();

  const { id } = router.query;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useAppSelector((state) => productSelectors.selectAll(state));
  const categories = useAppSelector((state) =>
    categoriesSelectors.selectAll(state)
  );

  const { loading, error } = useAppSelector((state) => state.categories)
  if (error) {
    return (
      <>
        <h1
          className="d-flex justify-content-center"
          style={{ paddingTop: 300 }}
        >
          Something went wrong!
        </h1>
        <p style={{ color: 'red' }} className="d-flex justify-content-center">
          {error}
        </p>
      </>
    )
  }

  return (
    <>
      <Header />
      <Container>
        <div className={classNames(classes.breadcrumb)}>
          <Link href='/' passHref>
            <a className='no-link'>Главная</a>
          </Link>
          <span>/</span>
          <Link href='/catalog' passHref>
            <a className='no-link'>Каталог</a>
          </Link>
          <span>/</span>
          {!!categories?.length &&
            categories
              .filter((item) => Number(id) === Number(item.id))
              .map((item) => {
                return (
                  <Link href='' key={item.id}>
                    <>
                      <SidebarItem data={item} />
                    </>
                  </Link>
                );
              })}
        </div>
        {!!categories?.length &&
          categories
            .filter((item) => Number(id) === Number(item.id))
            .map((item) => {
              return (
                <h1 className={classes.page__title} key={item.id}>
                  <SidebarItem data={item} />
                </h1>
              );
            })}
        <div className={classNames(classes.content)}>
          <div className={classNames('row d-flex justify-content-center mx-0')}>
            <div className={classNames(classes.sidebar__content, 'col-3')}>
              <div className={classNames(classes.side)}>
                <div className='row'>
                  <div className={classNames(classes.side__button)}>
                    <button className={classNames(classes.button)}>
                      Все категории
                      <Image
                        className={classes.side__arrow}
                        src={arrow1}
                        width={20}
                        height={20}
                        alt='arrow'
                      />
                    </button>
                  </div>
                  <div className={classes.side__item}>
                    {!!categories?.length &&
                      categories.map((item) => (
                        <div key={item.id}>
                          <Link href={'/categories/' + item.id} passHref>
                            <a className='no-link'>
                              <p className={classes.item_title}>
                                <SidebarItem data={item} />
                              </p>
                            </a>
                          </Link>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className='col-8'
              style={{ paddingBottom: 300, paddingRight: 0, paddingLeft: 0 }}
            >
              <div className={classNames(classes.content__item, 'row')}>
                {!!products?.length &&
                  products
                    .filter(({ category }) => Number(id) === Number(category))
                    .map((item) => {
                      return (
                        <div
                          className={classNames(
                            classes.content__card,
                            'col-lg-4 col-md-6 col-sm-6 d-flex justify-content-center'
                          )}
                          style={{ padding: 0 }}
                          key={item.id}
                        >
                          <Link href={'/products/' + item.id} passHref>
                            <a className='no-link'>
                              <AuthorBouquetsItem data={item} />
                            </a>
                          </Link>
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps<
  Props,
  { categories: string; error: any }
> = async (context) => {
  try {
    const { data: data } = await $api.get<IProductV2>(
      `/categories/${context?.params?.categories}`
    );
    return {
      props: {
        data,
      },
      revalidate: 10,
    };
  } catch (e: any) {
    return {
      props: {
        data: null,
      },
    };
  }
};

export async function getStaticPaths() {
  const {
    data: { results },
  } = await $api.get<ApiResponse<IProductV2>>('/categories/');
  const paths = results.map((product) => ({
    params: { id: product.id.toString() },
  }));
  return { paths, fallback: 'blocking' };
}
export default Categories;
