import React from 'react';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

import classes from './Delivery.module.scss';
import slash from '../../assets/images/cart/Cart_slash.svg';
import cash from '../../assets/images/delivery/cash.svg';
import timer from '../../assets/images/delivery/timer-sand.svg';
import car from '../../assets/images/delivery/car_delivery.svg';
import info from '../../assets/images/delivery/information.svg';
import bank from '../../assets/images/delivery/bank.svg';
import payment_cash from '../../assets/images/delivery/payment_cash.svg';
import wallet from '../../assets/images/delivery/wallet.svg';
import card from '../../assets/images/delivery/card.svg';

const Delivery = () => {
  return (
    <Container>
      <div>
        <div className={classes.delivery_link}>
          <Link href='/'>
            <a>
              <span className={classes.main_link}>Главная</span>
            </a>
          </Link>
          <Image src={slash} alt='slash' />
          <span className={classes.second_link}>Доставка и оплата</span>
        </div>
        <div>
          <h1 className={classes.delivery_title}>Доставка и оплата</h1>
        </div>
        <div>
          <h6 className={classes.delivery_conditions}>
            Условия доставки букетов
          </h6>
          <div
            className={`${classes.delivery_section} offset-2 d-flex flex-column`}
          >
            <div className={`${classes.delivery_items} d-flex`}>
              <div className={classes.image_block}>
                <Image layout='fixed' src={cash} alt='cash' />
              </div>
              <span>
                Стоимость доставки с 9.00 до 22.00 в пределах города Бишкек -
                200 сом <br />
                Стоимость доставки с 22.00 до 9 - 270 сом.
              </span>
            </div>
            <div className={`${classes.delivery_items} d-flex`}>
              <div className={classes.image_block}>
                <Image layout='fixed' src={timer} alt='cash' />
              </div>
              <span>Интервал доставки - 30 минут</span>
            </div>
            <div className={`${classes.delivery_items} d-flex`}>
              <div className={classes.image_block}>
                <Image layout='fixed' src={car} alt='cash' />
              </div>
              <span>
                Вы можете заказать доставку на любое время, при условии, что
                заказ будет <br />
                оформлен с 10.00 до 20.00.
              </span>
            </div>
            <div className={`${classes.delivery_items} d-flex`}>
              <div className={classes.info}>
                <Image layout='fixed' src={info} alt='cash' />
              </div>
              <span>
                Если вы хотели бы заказать доставку цветов, но не знаете точного
                адреса <br />
                получателя, то просто укажите в комментарии к заказу его
                контактный номер. Мы <br />
                деликатно уточним удобное место и время доставки букета.
              </span>
            </div>
          </div>
        </div>
        <div>
          <h6 className={classes.payment_conditions}>Способы оплаты</h6>
        </div>
        <div className={`${classes.payment_method} row`}>
          <div className={`${classes.payment_items} col-md-3`}>
            <div className={`${classes.payment_pic}`}>
              <Image layout='fixed' src={wallet} alt='bank' />
            </div>
            <span>
              На электронные кошельки <br />
              <b> MegaPay</b> (Megacom),
              <b>
                {' '}
                Элсом, <br />
                МБанк
              </b>
            </span>
          </div>
          <div className={`${classes.payment_items} col-md-3`}>
            <div className={`${classes.payment_pic}`}>
              <Image layout='fixed' src={payment_cash} alt='bank' />
            </div>
            <span>
              Наличными курьеру при <br /> получении букета
            </span>
          </div>
          <div className={`${classes.payment_items} col-md-3`}>
            <div className={`${classes.payment_pic}`}>
              <Image layout='fixed' src={bank} alt='bank' />
            </div>
            <span>
              Переводом на карты{' '}
              <b>
                {' '}
                Optima,
                <br /> DemirBank
              </b>
            </span>
          </div>
          <div className={`${classes.payment_items} col-md-3`}>
            <div className={`${classes.payment_pic}`}>
              <Image layout='fixed' src={card} alt='bank' />
            </div>
            <span>
              Банковской картой при <br /> оформлении заказа через <br /> сайт
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Delivery;
