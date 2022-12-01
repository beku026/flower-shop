import React from 'react';
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import classes from './Footer.module.scss';
import phone from '../../assets/images/Footer/phone.svg';
import email from '../../assets/images/Footer/email.svg';
import facebook from '../../assets/images/Footer/facebook.svg';
import instagram from '../../assets/images/Footer/instagram.svg';
import Vector from '../../assets/images/Footer/Vector.svg';
import location from '../../assets/images/Footer/location.svg';
import timer from '../../assets/images/Footer/timer.svg';

const Footer = () => {
  return (
    <div className={classNames(classes.footer__box)}>
      <Container>
        <div className={classNames(classes.footer, 'row')}>
          <div className={classNames(classes.footer__column__1, 'col-md-2')}>
            <div className={classes.logo}>logo</div>
          </div>
          <div className={classNames(classes.footer__column__2, 'col-md-2')}>
            <ul className={classes.list}>
              <Link href='/catalog' passHref>
                <a>
                  <li className={classes.item}>Каталог</li>
                </a>
              </Link>
              <Link href='https://taplink.cc/achekey.arna/p/59483f/' passHref>
                <a>
                  <li className={classes.item}>Цветочная подписка</li>
                </a>
              </Link>
              <Link href='/companies' passHref>
                <a>
                  <li className={classes.item}>Компаниям</li>
                </a>
              </Link>
              <Link href='/aboutUs' passHref>
                <a>
                  <li className={classes.item}>О нас</li>
                </a>
              </Link>
            </ul>
          </div>
          <div className={classNames(classes.footer__column__3, 'col-md-4')}>
            <ul className={classes.list}>
              <li className={classes.item__title}>Контакты</li>
              <Link href='tel:+996995400500' passHref>
                <a>
                  <li className={classes.item}>
                    <div className={'d-flex align-items-start'}>
                      <div
                        className={classes.item__icon}
                        style={{ marginRight: 7 }}
                      >
                        <Image src={phone} width={24} height={24} alt='phone' />
                      </div>
                      +996995400500<>(Тел / WhatsApp / Telegram)</>
                    </div>
                  </li>
                </a>
              </Link>

              <Link href='mailto:achekeyarna@gmal.com' passHref>
                <a>
                  <li className={classes.item}>
                    <div className={'d-flex align-items-start'}>
                      <div
                        className={classes.item__icon}
                        style={{ marginRight: 13 }}
                      >
                        <Image src={email} width={24} height={24} alt='email' />
                      </div>
                      achekeyarna@gmal.com
                    </div>
                  </li>
                </a>
              </Link>

              <Link href='https://www.facebook.com/' passHref>
                <a>
                  <li className={classes.item}>
                    <div className={'d-flex align-items-start'}>
                      <div
                        className={classes.item__icon}
                        style={{ marginRight: 13 }}
                      >
                        <Image
                          src={facebook}
                          width={24}
                          height={24}
                          alt='facebook'
                        />
                      </div>
                      achekeyarna
                      <div style={{ marginLeft: 8 }}>
                        <Image
                          src={Vector}
                          className={classes.vector}
                          width={12}
                          height={12}
                          alt='vector'
                        />
                      </div>
                    </div>
                  </li>
                </a>
              </Link>

              <Link href='https://www.instagram.com/achekey.arna/' passHref>
                <a>
                  <li className={classes.item}>
                    <div className={'d-flex align-items-start'}>
                      <div
                        className={classes.item__icon}
                        style={{ marginRight: 13 }}
                      >
                        <Image
                          src={instagram}
                          width={24}
                          height={24}
                          alt='instagram'
                        />
                      </div>
                      @achekeyarna
                      <div style={{ marginLeft: 8 }}>
                        <Image
                          src={Vector}
                          className={classes.vector}
                          width={12}
                          height={12}
                          alt='vector'
                        />
                      </div>
                    </div>
                  </li>
                </a>
              </Link>
            </ul>
          </div>
          <div className={classNames(classes.footer__column__4, 'col-md-4')}>
            <ul className={classes.list}>
              <li className={classes.item__title}>Адрес</li>
              <Link
                href='https://m.2gis.kg/bishkek/firm/70000001047642793?m=74.65326%2C42.833501%2F16'
                passHref
              >
                <a>
                  <li className={classes.item}>
                    <div className={'d-flex align-items-start'}>
                      <div
                        className={classes.item__icon}
                        style={{ marginRight: 13 }}
                      >
                        <Image
                          src={location}
                          width={24}
                          height={24}
                          alt='location'
                        />
                      </div>
                      г. Бишкек, ж/м Кок-Жар, Ачекей 50
                    </div>
                  </li>
                </a>
              </Link>
              <li className={classes.item}>
                <div className={'d-flex align-items-start'}>
                  <div
                    className={classes.item__icon}
                    style={{ marginRight: 13 }}
                  >
                    <Image src={timer} width={24} height={24} alt='timer' />
                  </div>
                  Ежедневно с 10.00 до 20.00
                </div>
              </li>
            </ul>
          </div>
          <hr className={classes.footer__hr} />
          <p className={classNames(classes.year__title)}>{new Date().getFullYear()} © Arnaachekei</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
