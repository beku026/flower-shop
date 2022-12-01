import React from 'react'
import classNames from 'classnames'
import classes from './reviewsPage.module.scss'

import { Container } from 'react-bootstrap'

import womanReviews from '../../assets/images/womanReviews.svg'
import orangestar from '../../assets/images/Star/orangestar.svg'
import graystar from '../../assets/images/Star/graystar.svg'
import { IReviewsItem } from '../../redux/types/ProductDetails'
import ReviewsItem from './ReviewsItem'

const data: IReviewsItem[] = [
  {
    id: 1,
    title: 'Александр Иванов',
    text: 'Это целая история о любви, дружбе, признательности, благодарности. Это способ самовыражения, возможность стать ближе, доставить  радость и устроить неожиданный праздник, несмотря на серые будни.  Такими принципами руководствуется в своей работе команда Lacy Bird.',
    image: womanReviews,
    icon1: orangestar,
    icon2: orangestar,
    icon3: orangestar,
    icon4: graystar,
    icon5: graystar,
  },
  {
    id: 2,
    title: 'Александр Иванов',
    text: 'Это целая история о любви, дружбе, признательности, благодарности. Это способ самовыражения, возможность стать ближе, доставить  радость и устроить неожиданный праздник, несмотря на серые будни.  Такими принципами руководствуется в своей работе команда Lacy Bird.',
    image: womanReviews,
    icon1: orangestar,
    icon2: orangestar,
    icon3: orangestar,
    icon4: graystar,
    icon5: graystar,
  },
  {
    id: 3,
    title: 'Александр Иванов',
    text: 'Это целая история о любви, дружбе, признательности, благодарности. Это способ самовыражения, возможность стать ближе, доставить  радость и устроить неожиданный праздник, несмотря на серые будни.  Такими принципами руководствуется в своей работе команда Lacy Bird.',
    image: womanReviews,
    icon1: orangestar,
    icon2: orangestar,
    icon3: orangestar,
    icon4: graystar,
    icon5: graystar,
  },
  {
    id: 4,
    title: 'Александр Иванов',
    text: 'Это целая история о любви, дружбе, признательности, благодарности. Это способ самовыражения, возможность стать ближе, доставить  радость и устроить неожиданный праздник, несмотря на серые будни.  Такими принципами руководствуется в своей работе команда Lacy Bird.',
    image: womanReviews,
    icon1: orangestar,
    icon2: orangestar,
    icon3: orangestar,
    icon4: graystar,
    icon5: graystar,
  },
]

const Reviews: React.FC = () => {
  return (
    <Container>
      <div className="row d-flex justify-content-center">
        {!!data?.length &&
          data.map((item) => (
            <div
              className={classNames(
                classes.content__card,
                'col-md-8 d-flex justify-content-center'
              )}
              key={item.id}
            >
              <br />
              <ReviewsItem data={item} />
            </div>
          ))}
      </div>
    </Container>
  )
}

export default Reviews
