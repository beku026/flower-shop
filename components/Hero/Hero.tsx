import React from 'react';
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import classNames from 'classnames';
import classes from './Hero.module.scss';
import arrow from '../../assets/images/arrowHero.svg';

const Hero = () => {
  return (
    <Container>
      <div className={classNames(classes.hero)}>
        <div className={classNames(classes.content, 'row')}>
          <div className={classNames(classes.hero__title, 'col-md-6')}>
            Цветочная
            <br />
            подписка
          </div>
          <div className={classNames(classes.content__button, 'col-md-7')}>
            <button className={classNames(classes.button)}>
              <span>К каталогу</span> <Image src={arrow} alt='arrow' />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
