import React, { useMemo, useState } from 'react';
import classes from './ordering.module.scss';
import { Link, Breadcrumbs } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import Typography from '@mui/material/Typography';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckIcon from '@mui/icons-material/Check';
import { OrderingFormDto } from '../../redux/types/ProductDetails';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { cartSelectors } from '../../redux/products/cart.slice';
import classnames from 'classnames';
import { postOrderItem } from '../../redux/products/order.slice';
import router from 'next/router';

const initialValues: OrderingFormDto = {
  name: '',
  date: '',
  time: '',
  email: '',
  tel: '',
  comments: '',
  deliveryType: '',
  address: '',
  payment: '',
  receiver: '',
  privacyPolicy: false,
  totalSum: null,
};

const schema = yup.object({
  name: yup.string().required('Введите имя!'),
  date: yup.string().required('Введите дату оформления заказа!'),
  time: yup.string().required('Укажите время!'),
  email: yup.string().required('Введите почту!'),
  tel: yup.string().required('Введите номер телефона!'),
  comments: yup.string(),
  deliveryType: yup
    .string()
    .oneOf(['courier', 'pickup', 'post'])
    .required('Выберите вариант доставки!'),
  address: yup?.string(),
  payment: yup.string().required('Выберите вариант оплаты!'),
  receiver: yup
    .string()
    .oneOf(['ANOTHER', 'GIFT', 'ANONIMUS'])
    .required('Выберите получателя'),
  privacyPolicy: yup.bool().oneOf([true], 'Field must be checked'),
});

const successToaster = () => {
  toast(
    <p className={classes.notify}>
      <CheckIcon className={classes.checkIcon} /> Заказ успешно оформлен
    </p>,
    {
      className: 'custom-toast',
      draggable: true,
      position: toast.POSITION.TOP_CENTER,
    }
  );
};
const errorToaster = () => {
  toast('Ошибка!', {
    className: 'custom-toast',
    draggable: false,
    type: 'error',
    position: toast.POSITION.TOP_CENTER,
  });
};

const Ordering: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleValuesSubmit = ({ values, resetForm }: any) => {
    const newObj = { ...values, totalSum: calcPrice };
    dispatch(postOrderItem(newObj));
    resetForm();
    router.push('/');
  };

  const cart = useAppSelector((state) => cartSelectors.selectAll(state));
  const [delivery, setDelivery] = useState();

  const calcPrice = useMemo(
    () =>
      !!cart?.length &&
      cart.reduce((acc, curr) => acc + curr.total_sum * curr.amount, 500),
    [cart]
  );

  return (
    <div className={`container ${classes.ordering}`}>
      <div className={`row ${classes.ordering__section}`}>
        <Breadcrumbs
          aria-label='breadcrumb'
          className={classes.breadcrumb_items}
        >
          <Link underline='hover' color='black' href='/'>
            Главная
          </Link>
          <Link underline='hover' color='black' href='/cart'>
            Корзина
          </Link>

          <Typography
            color='text.primary'
            className={classes.breadcrumb_item_active}
          >
            Оформление заказа
          </Typography>
        </Breadcrumbs>
        <div className='col-md-8'>
          <h1 className={classes.ordering__title}>Оформление заказа</h1>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { resetForm }) =>
              handleValuesSubmit({ values, resetForm })
            }
            validationSchema={schema}
          >
            {({ values, touched, errors, handleChange, handleSubmit }) => (
              <div className={classes.ordering}>
                <h2 className={classes.ordering__subtitle}>Доставка</h2>
                <form onSubmit={handleSubmit}>
                  <Field
                    as='select'
                    name='deliveryType'
                    className={`form-select ${classes.select}`}
                    aria-label='Default select example'
                    value={values.deliveryType}
                    onChange={handleChange}
                  >
                    <option value=''>Выберите вариант доставки</option>
                    <option value='courier'>Курьер</option>
                    <option value='pickup'>Самовывоз</option>
                  </Field>
                  {errors.deliveryType && touched.deliveryType && (
                    <p className='text-danger'>{errors.deliveryType}</p>
                  )}

                  <div className='row'>
                    <div className='col-6'>
                      <Field
                        type='date'
                        className='form-control mb-3 mt-3'
                        placeholder='Дата'
                        name='date'
                      />
                      {errors.date && touched.date && (
                        <p className='text-danger'>{errors.date}</p>
                      )}
                    </div>
                    <div className='col-6'>
                      <Field
                        type='time'
                        className='form-control mb-3 mt-3'
                        placeholder='Время'
                        name='time'
                      />
                      {errors.time && touched.time && (
                        <p className='text-danger'>{errors.time}</p>
                      )}
                    </div>
                  </div>
                  {values.deliveryType !== 'pickup' && (
                    <Field
                      type='text'
                      name='address'
                      value={values.address}
                      onChange={handleChange}
                      placeholder='Адрес доставки'
                      className='form-control'
                    />
                  )}

                  <div className='buyer'>
                    <h2 className={classes.ordering__subtitle}>Покупатель</h2>
                    <Field
                      type='text'
                      name='name'
                      value={values.name}
                      onChange={handleChange}
                      placeholder='Ваше имя'
                      className='form-control'
                    />
                    {errors.name && touched.name && (
                      <p className='text-danger'>{errors.name}</p>
                    )}

                    <div className='row'>
                      <div className='col-6'>
                        <Field
                          type='text'
                          className='form-control mb-3 mt-3'
                          placeholder='Ваш телефон'
                          name='tel'
                          value={values.tel}
                          onChange={handleChange}
                        />
                        {errors.tel && touched.tel && (
                          <p className='text-danger'>{errors.tel}</p>
                        )}
                      </div>
                      <div className='col-6'>
                        <Field
                          type='email'
                          className='form-control mb-3 mt-3'
                          placeholder='E-mail'
                          name='email'
                          value={values.email}
                          onChange={handleChange}
                        />
                        {errors.email && touched.email && (
                          <p className='text-danger'>{errors.email}</p>
                        )}
                      </div>
                      <div className={classes.comments}>
                        <Field
                          as='textarea'
                          className='form-control'
                          placeholder='Ваши комментарий и пожелания'
                          name='comments'
                        />
                      </div>
                    </div>
                  </div>
                  <div className={classes.receiver}>
                    <h2 className={classes.ordering__subtitle}>Получатель</h2>
                    <div role='group' aria-labelledby='receiver'>
                      <div className='form-check'>
                        <label className='form-check-label'>
                          <Field
                            className={`form-check-input mb-3 ${classes.radio_btn}`}
                            type='radio'
                            name='receiver'
                            value='ANOTHER'
                          />
                          Получатель другой человек
                        </label>
                      </div>
                      <div className='form-check'>
                        <label className='form-check-label'>
                          <Field
                            className={`form-check-input mb-3 ${classes.radio_btn}`}
                            type='radio'
                            name='receiver'
                            value='GIFT'
                          />
                          Открытка
                        </label>
                      </div>
                      <div className='form-check'>
                        <label className='form-check-label'>
                          <Field
                            className={`form-check-input mb-3 ${classes.radio_btn}`}
                            type='radio'
                            name='receiver'
                            value='ANONIMUS'
                          />
                          Анонимно (получатель не узнает, от кого букет)
                        </label>
                      </div>
                      {errors.receiver && touched.receiver && (
                        <p className='text-danger'>{errors.receiver}</p>
                      )}
                    </div>
                  </div>
                  <div className={classes.payment}>
                    <h2 className={classes.ordering__subtitle}>Оплата</h2>
                    <div className='col-12'>
                      <label className='visually-hidden'>
                        Выберите вариант оплаты
                      </label>
                      <Field
                        as='select'
                        className='form-select mb-3 mt-3'
                        id='inlineFormSelectPref'
                        name='payment'
                      >
                        <option value=''>Выберите вариант оплаты</option>
                        <option value='картой'>Картой</option>
                        <option value='наличными'>Наличными</option>
                      </Field>
                      {errors.payment && touched.payment && (
                        <p className='text-danger'>{errors.payment}</p>
                      )}
                    </div>
                    <div className='col-12'>
                      <div className='form-check mb-3'>
                        <label className='form-check-label'>
                          <Field
                            className='form-check-input'
                            type='checkbox'
                            id='inlineFormCheck'
                            name='privacyPolicy'
                          />
                          Я согласен на обработку персональных данных
                        </label>
                        {errors.privacyPolicy && touched.privacyPolicy && (
                          <p className='text-danger'>{errors.privacyPolicy}</p>
                        )}
                      </div>
                    </div>
                    <div className='col-12 d-flex justify-content-center align-items-center mt-5'>
                      <button type='submit' className={classes.ordering_btn}>
                        {' '}
                        Оформить заказ
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </Formik>
        </div>
        <div className='col-md-4 '>
          <div className={classes.total__block}>
            <div className={classes.total}>
              <h2 className={classes.total__title}>Итого</h2>
              <p className={classes.total__price}>
                {calcPrice} <span className={classes.currency_big}>c</span>
              </p>
            </div>
            {cart.map((item: any) => (
              <div key={item.id} className={classes.total__block_details}>
                <div className={classes.flower_delivery}>
                  <h3 className={classes.flower_info}>
                    {`${item.product.title} (${item.amount})`}
                  </h3>
                  <span className={classes.flower_price}>
                    {item.total_sum} <span className={classes.currency}>c</span>
                  </span>
                </div>
              </div>
            ))}
            <div
              className={classnames(
                classes.flower_delivery,
                classes.total__block_details
              )}
            >
              <h3 className={classes.flower_info}>Доставка</h3>
              <p className={classes.flower_price}>
                500 <span className={classes.currency}>c</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ordering;
