import React from 'react'
import classes from './Favorites.module.scss'
import FavoriteIcon from '@mui/icons-material/Favorite'
import IconButton from '@mui/material/IconButton'
import { IFavoritesV } from '../../redux/types/product'
import { removeItemFromFavorites } from '../../redux/products/favorites.slice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import Image from 'next/image'
import cardIcon from '../../assets/icons/cardIcon.svg'
import {
  addToCart,
  cartSelectors,
  removeCartItem,
} from '../../redux/products/cart.slice'
import classNames from 'classnames'

type Props = {
  data: IFavoritesV
}

const FavoritesItem: React.FC<Props> = ({ data }) => {
  const dispatch = useAppDispatch()


  const inCartItem = useAppSelector((state) =>
    cartSelectors
      .selectAll(state)
      .find((cartItem) => cartItem.product.id === data.id)
  )

  const handleAddToCart = () => {
    if (inCartItem) {
      return dispatch(removeCartItem(inCartItem.id))
    }
    dispatch(
      addToCart({
        product: data.id,
        amount: 1,
      })
    )
  }

  const handleRemoveFavorites = (id: number) => {
    dispatch(removeItemFromFavorites(id))
  }

  return (
    <div className={classes.favorites__colums}>
      <div className={classes.favorites__item}>
        {data.product_image.map((image: any) => (
          <div key={image.id} className={classes.img}>
            <img
              src={image.image}
              alt={image.description}
              className={classes.favorites__image}
            />
          </div>
        ))}

        <div>
          <div className={classes.item_title}>{data.title}</div>
          <div className={classes.item_price}>{data.price}</div>
        </div>

        <div className={classes.item__like}>
          <IconButton onClick={() => handleRemoveFavorites(data.id)}>
            <FavoriteIcon className={classes.like_icon} />
          </IconButton>
        </div>
        <div
          className={classNames(
            classes.content__button,
            'd-flex justify-content-center'
          )}
        >
          <button
            onClick={handleAddToCart}
            className={classNames(
              classes.button,
              'd-flex justify-content-center'
            )}
          >
            <Image
              className={classes.content__icon}
              src={cardIcon}
              alt="card icon"
            />
            {inCartItem ? 'Delete' : 'В корзину'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default FavoritesItem
