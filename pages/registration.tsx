import React from 'react';
import { Container } from 'react-bootstrap';
import classes from '../styles/registration.module.scss';
import classNames from 'classnames';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { signUpUser } from '../redux/products/auth.slice';
import ModalBlock from '../components/ModalBlock/ResendModalBlock';

interface LoginFormDto {
  username: string;
  fullName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const initialValues: LoginFormDto = {
  username: '',
  fullName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

const Schema = yup.object({
  username: yup.string().required('Введите логин!'),
  fullName: yup.string().required('Введите ФИО!'),
  email: yup.string().required('Введите E-mail!'),
  password: yup.string().required('Введите пароль!'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароли не совпадают!'),
});

const Login = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = React.useCallback((values: LoginFormDto) => {
    dispatch(signUpUser(values));
  }, []);
  const { error, signup } = useAppSelector((state) => state.auth);
  return (
    <div>
      <Header />
      <Container>
        <div className={classNames(classes.breadcrumb)}>
          <Link href='/' passHref>
            Главная
          </Link>
          <span>/</span>
          <Link href=''>
            <>Регистрация</>
          </Link>
        </div>
        <div className='row d-flex justify-content-center'>
          <div
            className={classNames(
              classes.page__title,
              'd-flex justify-content-center'
            )}
          >
            <h1 className={classNames(classes.title)}>Регистрация</h1>
          </div>

          <div className='d-flex justify-content-center'>
            <div className={classes.login__info}>
              После авторизации вы сможете отслеживать состояние своих
              <br />
              заказов, если у вас еще нет аккаунта, то пройдите регистрацию.
            </div>
          </div>
          <div className='col-xl-5 col-lg-5 col-md-10'>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={Schema}
            >
              {({ touched, errors }) => (
                <div className={classes.ordering}>
                  <Form>
                    <Field
                      type='text'
                      name='username'
                      placeholder='Логин'
                      className={classes.input__item}
                      style={{ marginBottom: 15 }}
                    />
                    {errors.username && touched.username && (
                      <p className={'text-danger'}>{errors.username}</p>
                    )}
                    <Field
                      type='text'
                      name='fullName'
                      placeholder='ФИО'
                      className={classes.input__item}
                      style={{ marginBottom: 15 }}
                    />
                    {errors.fullName && touched.fullName && (
                      <p className={'text-danger'}>{errors.fullName}</p>
                    )}
                    <Field
                      type='email'
                      name='email'
                      placeholder='E-mail'
                      className={classes.input__item}
                      style={{ marginBottom: 15 }}
                    />
                    {errors.email && touched.email && (
                      <p className={'text-danger'}>{errors.email}</p>
                    )}

                    <Field
                      type='password'
                      name='password'
                      placeholder='Пароль'
                      className={classes.input__item}
                      style={{ marginBottom: 15 }}
                    />

                    {errors.password && touched.password && (
                      <p className={'text-danger'}>{errors.password}</p>
                    )}
                    <Field
                      type='password'
                      name='passwordConfirmation'
                      placeholder='Подтверждение пароля'
                      className={classes.input__item}
                    />
                    {errors.passwordConfirmation &&
                      touched.passwordConfirmation && (
                        <p className={'text-danger'}>
                          {errors.passwordConfirmation}
                        </p>
                      )}
                    {signup && <span>Пользователь авторизован </span>}
                    {/* {error && <span>{error}</span>} */}
                    <div
                      className={classNames(
                        classes.content__button,
                        'row d-flex justify-content-center'
                      )}
                    >
                      <button
                        type='submit'
                        className={classNames(classes.button, 'col-md-3')}
                      >
                        Регистрация
                      </button>
                      <div
                        className={'d-flex d-block justify-content-center mt-3'}
                      ></div>
                    </div>
                  </Form>
                  {/* {
                    error ? error : null
                  } */}
                </div>
              )}
            </Formik>
            <div className={classes.modal_resendblock}>
              <ModalBlock />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Login;
