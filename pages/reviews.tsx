import React from 'react'

import { Container } from 'react-bootstrap'
import Link from 'next/link'
import classes from '../styles/reviewsPage.module.scss'
import classNames from 'classnames'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import ReviewsPage from '../components/reviewsPage/ReviewsPage'

import Image from 'next/image'
import arrow from '../assets/images/authorBouquets/arrowDown.svg'
import plusIcon from '../assets/images/reviews/plusIcon.svg'

function ReviewsComponent() {
  return (
    <div className={classes.reviews__page}>
      <Header />
      <Container>
        <div className={classNames(classes.breadcrumb)}>
          <Link href="/" passHref>
            <a>Главная</a>
          </Link>
          <span>/</span>
          <Link href="">
            <>Отзывы</>
          </Link>
        </div>
        <div className="row">
          <div className={classNames(classes.page__title, 'col-md-7')}>
            <h1 className={classNames(classes.title)}>Отзывы</h1>
          </div>
          <div className={classNames(classes.reviews__button, 'col-md-5 ')}>
            <button className={classNames(classes.reviews__button__item)}>
              <div className={classes.plus__icon}>
                <Image src={plusIcon} alt="plus icon" />
              </div>
              <div className={classes.reviews__button__title}>
                Написать отзыв
              </div>
            </button>
          </div>
        </div>
        <ReviewsPage />
        <div
          className={classNames(
            classes.content__button,
            'd-flex justify-content-center'
          )}
        >
          <button className={classNames(classes.button)}>
            <div className={classes.button__title}>Загрузить еще</div>
            <div className={classes.content__arrow}>
              <Image src={arrow} width={20} height={12} alt="arrow" />
            </div>
          </button>
        </div>
      </Container>
      <Footer />
    </div>
  )
}
export default ReviewsComponent
