import React from 'react';
import { Container } from 'react-bootstrap';
import classNames from 'classnames';
import classes from './Bouquets.module.scss';

const Text = () => {
  return (
    <div>
      <Container>
        <div className={classNames(classes.content, 'row d-flex')}>
          <h1>
            БУКЕТ ИЗ ЦВЕТОВ – ЭТО НЕ ПРОСТО НАБОР
            <br />
            РАСТЕНИЙ, ГАРМОНИРУЮЩИХ
            <br />
            ПО ЦВЕТУ И ФОРМЕ.
          </h1>
          <p>
            Это целая история о любви, дружбе, признательности, благодарности.
            Это способ самовыражения,
            <br />
            возможность стать ближе, доставить радость и устроить неожиданный
            праздник, несмотря
            <br />
            на серые будни. Такими принципами руководствуется в своей работе
            команда Lacy Bird
            <br />
            <br />У нас можно заказать оригинальный букет в Москве для любого
            события и получателя
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Text;
