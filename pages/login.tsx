import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import classes from '../styles/login.module.scss';
import classNames from 'classnames';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import Link from 'next/link';
import { loginUser } from '../redux/products/auth.slice';
import { useRouter } from 'next/router';

interface LoginFormDto {
  email: string;
  password: string;
}

const initialValues: LoginFormDto = {
  email: '',
  password: '',
};

const Schema = yup.object({
  email: yup.string().required('Введите emile'),
  password: yup.string().required('Введите пароль!'),
});
const Login = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);
  const handleSubmit = async (values: LoginFormDto) => {
    await dispatch(loginUser(values));
    if (localStorage.getItem('accessToken')) {
      router.push('/');
    }
  };

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Загрузка <Spinner animation='border' />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Container>
        <div className={classNames(classes.breadcrumb)}>
          <Link href='/' passHref>
            <a>Главная</a>
          </Link>
          <span>/</span>
          <Link href=''>
            <>Авторизация</>
          </Link>
        </div>

        <div className='row d-flex justify-content-center'>
          <div
            className={classNames(
              classes.page__title,
              'd-flex justify-content-center'
            )}
          >
            <h1 className={classNames(classes.title)}>Авторизация</h1>
          </div>
          <div className='d-flex justify-content-center'>
            <div className={classes.login__info}>
              После авторизации вы сможете отслеживать состояние своих
              <br />
              заказов, если у вас еще нет аккаунта, то пройдите регистрацию.
              <div style={{ color: 'red' }}>{error ? error : null}</div>
            </div>
          </div>
          <div className='col-xl-6 col-lg-6 col-md-10'>
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
                      name='email'
                      placeholder='Логин'
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
                    />
                    {errors.password && touched.password && (
                      <p className={'text-danger'}>{errors.password}</p>
                    )}
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
                        <div className={classes.sbutton__title}>Войти</div>
                      </button>
                    </div>
                  </Form>
                </div>
              )}
            </Formik>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Login;
