import { Container } from 'react-bootstrap';
import classNames from 'classnames';
import Image from 'next/dist/client/image';
import Link from 'next/link';
import classes from '../components/AuthorBouquets/authorBouquets.module.scss';

import arrowDown from '../assets/images/authorBouquets/arrowDown.svg';
import arrowRight from '../assets/images/subscription/arrow.svg';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

import SidebarItem from '../components/AuthorBouquets/SideBar/SidebarItem';
import AuthorBouquetsItem from '../components/AuthorBouquets/AuthorBouquetsItem';

import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  productSelectors,
  fetchProducts,
} from '../redux/products/product.slice';
import { IProductV2 } from '../redux/types/product';
import {
  categoriesSelectors,
  fetchCategories,
} from '../redux/products/categories.slice';

type Props = {
  data?: IProductV2 | any;
};

const Catalog: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useAppSelector((state) => productSelectors.selectAll(state));
  const categories = useAppSelector((state) =>
    categoriesSelectors.selectAll(state)
  );

  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Header />
      <Container>
        <div className={classNames(classes.breadcrumb)}>
          <Link href='/' passHref>
            <a className='no-link'>Главная</a>
          </Link>
          <span>/</span>
          <Link href='' passHref>
            <>Каталог</>
          </Link>
        </div>
        <div className={classNames(classes.page__title)}>
          <h1>Каталог</h1>
        </div>

        <div className={classNames(classes.content)}>
          <div className={classNames('row justify-content-center mx-0')}>
            <div className={classNames(classes.sidebar__content, 'col-3')}>
              <div
                className={classNames(
                  classes.side,
                  'd-flex justify-content-center'
                )}
              >
                <div className='row'>
                  <div className={classNames(classes.side__button)}>
                    <button className={classNames(classes.button)}>
                      Все категории
                      <Image
                        className={classes.side__arrow}
                        src={arrowRight}
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
            <div className='col-8' style={{ paddingBottom: 170 }}>
              <div className={classNames(classes.content__item, 'row')}>
                {!!products?.length &&
                  products?.slice(0, 12).map((item) => (
                    <div
                      className={classNames(
                        classes.content__card,
                        'col-lg-4 col-md-6 col-sm-6'
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
                  ))}
              </div>
              <div
                className={classNames(
                  classes.content__button,
                  'd-flex justify-content-center'
                )}
              >
                <button
                  className={classNames(classes.button)}
                  onClick={handleOpen}
                >
                  Загрузить еще
                  <Image
                    className={classes.content__arrow}
                    src={arrowDown}
                    width={16}
                    height={16}
                    alt='arrow'
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Catalog;
