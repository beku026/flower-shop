import React from 'react'
import classes from './reviewsPage.module.scss'
import classNames from 'classnames'
import { IReviewsItem } from '../../redux/types/ProductDetails'
import Image from 'next/image'

type Props = {
  data: IReviewsItem
}

const ReviewsItem: React.FC<Props> = ({ data }) => {
  return (
    <div
      className={classNames(
        classes.reviews__colums,
        'row d-flex justify-content-center'
      )}
    >
      <div className={classNames(classes.images, 'col-md-2')}>
        <div className={classNames(classes.reviews__image)}>
          <Image
            className={classNames(classes.woman__image)}
            width={94}
            height={94}
            src={data.image || ''}
            alt="review"
          />
        </div>
        <div className={classNames(classes.star)}>
          <Image
            className={classNames(classes.star__icon)}
            src={data.icon1 || ''}
            alt="star"
          />
          <Image
            className={classNames(classes.star__icon)}
            src={data.icon2 || ''}
            alt="star"
          />
          <Image
            className={classNames(classes.star__icon)}
            src={data.icon3 || ''}
            alt="star"
          />
          <Image
            className={classNames(classes.star__icon)}
            src={data.icon4 || ''}
            alt="star"
          />
          <Image
            className={classNames(classes.star__icon)}
            src={data.icon5 || ''}
            alt="star"
          />
        </div>
      </div>
      <div className={classNames(classes.item, 'row col-md-8')}>
        <div className={classNames(classes.image_title)}>{data.title}</div>
        <div className={classNames(classes.image_text)}>{data.text}</div>
      </div>
    </div>
  )
}

export default ReviewsItem
