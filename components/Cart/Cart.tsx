import React, { useEffect, useMemo } from 'react'
import Image from 'next/image'
import { Container } from 'react-bootstrap'
import CartSlash from '../../assets/images/cart/Cart_slash.svg'
import VisaImg from '../../assets/images/cart/Visa.png'
import PayPalImg from '../../assets/images/cart/PayPal.png'
import MastercardImg from '../../assets/images/cart/Mastercard.png'
import MaestroImg from '../../assets/images/cart/Maestro.png'
import Link from 'next/link'
import classes from './Cart.module.scss'
import CartItemProduct from './CartItemProduct'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { fetchCartItems, cartSelectors } from '../../redux/products/cart.slice'

const Cart: React.FC = () => {
  const cart = useAppSelector((state) => cartSelectors.selectAll(state))
  const { error, ids } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCartItems())
  }, [dispatch])
  console.log(cart)

  const calcPrice = useMemo(
    () =>
      !!cart &&
      cart.reduce((acc, curr) => acc + curr.total_sum * curr.amount, 0),
    [cart]
  )

  const code = () => {
    const { ids } = useAppSelector((state) => state.favorites)
    const count = ids
    // console.k
    return count
  }

  return (
    <>
      <Container>
        <div className={`${classes.cart_page} row`}>
          <div className={classes.cart_link}>
            <Link href="/">
              <a>
                <span className={classes.main_link}>Главная</span>
              </a>
            </Link>
            <Image src={CartSlash} alt="slash" />
            <span className={classes.second_link}>Корзина</span>
          </div>
          <div>
            <h1 className={classes.cart_title}>Корзина</h1>
            <span className={classes.cart_item__title}>
              Всего {!!ids && ids.length} товара
            </span>
          </div>
          {error ? <span>{error}</span> : null}
          <div className={`${classes.cart_item} d-flex`}>
            <div className="col-sm-12 col-md-11 col-lg-8">
              <div className={classes.left_side}>
                {!!cart?.length
                  ? cart.map((item) => (
                      <CartItemProduct key={item.id} data={item} />
                    ))
                  : null}
              </div>
            </div>
            <div className="col-10  col-md-8 col-lg-4">
              <div className={`${classes.right_side} `}>
                <div
                  className={`${classes.payment_method__header} 
                  d-flex justify-content-between align-items-center`}
                >
                  <span className={classes.peyment_header__firstChild}>
                    Итого
                  </span>
                  <span className={classes.peyment_header__secondChild}>
                    {calcPrice ? calcPrice : 0}
                    <span className={classes.cart_price}>с</span>
                  </span>
                </div>
                <div className={classes.payment_method__button}>
                  <button className={classes.peyment_button__Quick}>
                    Быстрый заказ
                  </button>
                  <Link href="/ordering" passHref>
                    <a>
                      <button className={classes.peyment_button__Checkout}>
                        Оформить заказ
                      </button>
                    </a>
                  </Link>
                </div>
                <div className={`${classes.payment_method_footer} d-flex`}>
                  <span>Мы принимаем </span>
                  <div className={classes.payment_cards}>
                    <button className={classes.payment_button}>
                      <Image
                        className={classes.cart_visa}
                        src={VisaImg}
                        alt="VisaImg"
                      />
                    </button>
                    <button className={classes.payment_button}>
                      <Image
                        className={classes.cart_visa}
                        src={PayPalImg}
                        alt="PayPalImg"
                      />
                    </button>
                    <button className={classes.payment_button}>
                      <Image
                        className={classes.cart_visa}
                        src={MastercardImg}
                        alt="MastercardImg"
                      />
                    </button>
                    <button className={classes.payment_button}>
                      <Image
                        className={classes.cart_visa}
                        src={MaestroImg}
                        alt="MaestroImg"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Cart
