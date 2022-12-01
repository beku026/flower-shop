import React from 'react';
import { useRouter } from 'next/router';
import { signUpUserActivation } from '../../../redux/products/auth.slice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import Header from '../../../components/Header/Header';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

function UserToken() {
  const router = useRouter();
  const obj = { ...router.query };
  const dispatch = useAppDispatch();

  const { userActivate, error } = useAppSelector((state) => state.auth);
  const handleActivateUser = () => {
    dispatch(signUpUserActivation(obj));
  };
  return (
    <>
      <Header />
      <div className='activate_user'>
        <div className='d-flex justify-content-center mt-5'>
          <h1>Активировать профиль</h1>
        </div>
        <div className='mt-5 text-center'>
          <Button variant='success' onClick={() => handleActivateUser()}>
            Successs
          </Button>
        </div>
        <div className='mt-5 text-center'>
          {userActivate ? (
            <span>
              Пользователь активирован <br />
              <Link href='/login'>
                <button
                  style={{
                    border: '1px solid #b28f58cc',
                    borderRadius: '3px',
                    backgroundColor: '#b28f58cc',
                    color: '#fff',
                  }}
                >
                  {' '}
                  перейти на страницу авторизации
                </button>
              </Link>
            </span>
          ) : null}
          {error ? <span>{error}</span> : null}
        </div>
      </div>
    </>
  );
}
export default UserToken;
