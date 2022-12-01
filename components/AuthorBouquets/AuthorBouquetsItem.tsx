import React from 'react';
import { IProductV2 } from '../../redux/types/product';
import classes from './authorBouquets.module.scss';
import classNames from 'classnames';

type Props = {
  data: IProductV2;
};

const AuthorBouquetsItem: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div className={classNames(classes.authorBouquets__colums)}>
        {!!data?.product_image &&
          data.product_image.map((item) => (
            <img
              key={item.id}
              src={item.image}
              alt={data.description}
              className={classNames(classes.authorBouquets__image)}
            />
          ))}
        <div
          className={classNames(
            classes.image_title,
            'd-flex justify-content-center'
          )}
        >
          {data.title}
        </div>
        <div
          className={classNames(
            classes.image_price,
            'd-flex justify-content-center'
          )}
        >
          {data.price}
        </div>
      </div>
    </>
  );
};

export default AuthorBouquetsItem;
