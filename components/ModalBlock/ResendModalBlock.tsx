import { useState } from 'react';
import * as Yup from 'yup';
import { Button, Modal } from 'react-bootstrap';
import classes from './ResendModalBlock.module.scss';
import { Formik } from 'formik';
import { useAppDispatch } from '../../redux/hooks';
import { resendActivation } from '../../redux/products/auth.slice';

const ResendActivationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Почта не действительна!'),
});

export default function Example() {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleResendSubmit = (values: any) => {
    dispatch(resendActivation(values));
    handleClose();
  };
  return (
    <>
      <button className={`${classes.button} d-block`} onClick={handleShow}>
        Oтправить электронное письмо повторно
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Отправить ссылку на почту</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{ email: '' }}
            validationSchema={ResendActivationSchema}
            onSubmit={(values) => handleResendSubmit(values)}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <div className='d-flex justify-content-center'>
                <form onSubmit={handleSubmit}>
                  <input
                    type='email'
                    name='email'
                    onChange={handleChange}
                    value={values.email}
                    placeholder='Напишите свой email'
                    className={'form-control'}
                  />
                  {errors.email && touched.email && (
                    <p className='text-danger'>{errors.email}</p>
                  )}
                  <Button
                    variant='primary'
                    className='mb-3 mt-3 '
                    type='submit'
                  >
                    {' '}
                    Отправить ссылку на почту
                  </Button>
                </form>
              </div>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}
