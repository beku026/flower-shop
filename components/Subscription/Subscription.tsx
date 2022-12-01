import React from 'react';
import classes from './subscription.module.scss';
import Link from 'next/link';
import Image from 'next/dist/client/image';
import arrow from '../../assets/images/subscription/arrow.svg';

function Subscription() {
  return (
    <div className='container'>
      <div className={classes.subscriptions}>
        <div className='row'>
          <div className='col-lg-6 col-sm-12'>
            <div className={classes.subscription__item1}>
              <div className={classes.suvscription__body}>
                <div className={classes.subscription__title}>
                  <h1>
                    Цветочная
                    <br /> подписка
                  </h1>
                </div>
              </div>
              <div className={classes.subscription__button}>
                <div className={classes.subscription__btn}>
                  <Link href='/authorBouquets' passHref>
                    <a>
                      <button className={classes.btnCatalog}>
                        К каталогу
                        <Image
                          className={classes.subscription__arrow}
                          src={arrow}
                          width={18.69}
                          height={10.52}
                          alt='arrow'
                        />
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-6 col-sm-12'>
            <div className={classes.subscription__item}>
              <div className={classes.suvscription__body}>
                <div className={classes.subscription__title}>
                  <h1>
                    Цветочная <br /> подписка
                  </h1>
                </div>
              </div>
              <div className={classes.subscription__button}>
                <div className={classes.subscription__btn}>
                  <Link href='/authorBouquets' passHref>
                    <a>
                      <button className={classes.btnCatalog}>
                        К каталогу
                        <Image
                          className={classes.subscription__arrow}
                          src={arrow}
                          width={18.69}
                          height={10.52}
                          alt='arrow'
                        />
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
