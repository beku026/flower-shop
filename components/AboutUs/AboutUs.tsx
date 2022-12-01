import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import slash from '../../assets/images/cart/Cart_slash.svg';
import bot_line from '../../assets/images/aboutUs/btm_line.svg';
import group_img from '../../assets/images/aboutUs/group.png';
import classes from './aboutUs.module.scss';
import classNames from 'classnames';

const AboutUs = () => {
  return (
    <Container>
      <div className={classNames(classes.aboutUs_page)}>
        <div className={classNames(classes.header_link)}>
          <Link href='/'>
            <a className={classNames(classes.main_link, classes.active)}>
              Главная
            </a>
          </Link>
          <Image src={slash} alt='slash' />
          <span className={classNames(classes.second_link)}>
            Доставка и оплата
          </span>
        </div>
        <div>
          <h1 className={classNames(classes.header_title)}>О нас</h1>
        </div>
        <div className={classNames(classes.aboutus)}>
          <div
            className={classNames(
              classes.about_text__header,
              'd-inline-block position-relative'
            )}
          >
            Ачекей Арна
            <div className={classNames(classes.about_img, 'position-absolute')}>
              <Image src={bot_line} alt='line' />
            </div>
          </div>
          <span>
            {' '}
            - новая цветочная мастерская в Бишкеке с упором на доставку. <br />
            Мы работаем с 20 марта 2022 года - совсем недавно, но достаточно для
            того, чтобы <br />
            найти своих людей, которые возвращаются к нам вновь и вновь.
          </span>
        </div>
        <div className='row'>
          <div className='col-sm-8 col-lg-5'>
            <div className={classes.group_section}>
              <Image src={group_img} width={474} height={710} alt='flowers' />
            </div>
          </div>
          <div className={classNames(classes.about_text, 'col-sm-12 col-lg-7')}>
            <div className={classNames(classes.first_section)}>
              <p>
                Ачекей Арна - это цветы, которые приятно дарить и получать. А
                ещё их <br /> приятно собирать, чем мы и занимаемся.
              </p>
              <p>Итак, что из себя представляет наш магазин?</p>
              <p>
                Ачекей Арна - новая цветочная мастерская в Бишкеке с упором на
                доставку.
                <br />
                Мы работаем с февраля 2021 года - совсем недавно, но достаточно
                для того,
                <br />
                чтобы найти своих людей, которые возвращаются к нам вновь и
                вновь.
              </p>
              <p>
                В основе нашего дела стоят чувства - самое сокровенное, что есть{' '}
                <br /> у каждого человека.
              </p>
            </div>
            <div className={classNames(classes.second_section)}>
              <p>
                Чувство любви и вдохновения прекрасным привело нас к открытию{' '}
                <br /> магазина.
              </p>
              <p>
                Что такое букет в подарок? Это в первую очередь ваши чувства,{' '}
                <br />
                которые вы хотите передать человеку, начиная с «я тебя люблю» до{' '}
                <br />
                «ты мне дорог». Мы берём на себя такую ответственность - донести{' '}
                <br />
                их до получателя в целости и сохранности.
              </p>
              <p>
                Чем мы сильно дорожим - честность. Мы честно любим свою работу,{' '}
                <br />
                не можем успокоиться пока каждый цветок в букете не будет <br />
                выглядеть идеально. Для нас важно отдать клиенту свежие цветы,{' '}
                <br />
                которые будут стоять долго, не трепать ваши (да и свои тоже)
                нервы и <br />
                доставить всё в срок и лучшем виде. Давайте строить честные{' '}
                <br />
                отношения везде.
              </p>
              <p>И самое важное - мы хотим сделать этот мир прекраснее.</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
