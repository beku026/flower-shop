import React, { useState } from "react";
import { Container } from "react-bootstrap";

import classes from "../styles/personalArea.module.scss";
import classNames from "classnames";
import loginOptions from "../assets/images/loginOptions.svg";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Image from "next/image";

import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import Link from "next/link";
import { setPassword } from "../redux/products/auth.slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

interface PersonalAreaFormDto {
  username: string;
  number: string;
  email: string;
  current_password: string;
  new_password: string;
}

const initialValues: PersonalAreaFormDto = {
  username: "",
  number: "",
  email: "",
  current_password: "",
  new_password: "",
};

const Schema = yup.object({
  current_password: yup.string().required("Введите пароль!"),
  new_password: yup.string().required("Введите новый пароль!"),
});

const PersonalArea: React.FC = () => {
  const { username } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const handleSubmit = React.useCallback((values: any) => {
    dispatch(setPassword(values));
    console.log(values);
  }, []);

  const [isVisible, setVisible] = useState(false);
  const VisiblePassBlock = () => {
    setVisible(!isVisible);
  };
  return (
    <div className={classes.personalArea}>
      <Header />
      <Container>
        <div className={classNames(classes.breadcrumb)}>
          <Link href="/" passHref>
            <a>Главная</a>
          </Link>
          <span>/</span>
          <Link href="">
            <>Личный кабинет</>
          </Link>
        </div>
        <div
          className={classNames(
            classes.personalArea_block,
            "row d-flex justify-content-center"
          )}
        >
          <div
            className={classNames(
              classes.page__title,
              "d-flex justify-content-center"
            )}
          >
            <h1 className={classNames(classes.title)}>Личный кабинет</h1>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-10">
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={Schema}
            >
              {({ touched, errors, values, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Логин"
                    className={classes.input__item}
                    style={{ marginBottom: 15 }}
                  />
                  {errors.username && touched.username && (
                    <p className={"text-danger"}>{errors.username}</p>
                  )}
                  <Field
                    type="text"
                    name="number"
                    placeholder="+996 500 456 345"
                    className={classes.input__item}
                    style={{ marginBottom: 15 }}
                  />
                  {errors.number && touched.number && (
                    <p className={"text-danger"}>{errors.number}</p>
                  )}
                  <Field
                    type="email"
                    name="email"
                    value={username ? username : ""}
                    placeholder="alexivanov@gmail.com"
                    className={classes.input__item}
                    style={{ marginBottom: 15 }}
                  />
                  {errors.email && touched.email && (
                    <p className={"text-danger"}>{errors.email}</p>
                  )}
                  <div className="d-flex justify-content-end">
                    <button
                      type="button"
                      className={classes.setPassVisionButton}
                      onClick={VisiblePassBlock}
                    >
                      Поменять пароль
                    </button>
                    <Image
                      className={isVisible ? "" : classes.loingOptImgSec}
                      src={loginOptions}
                      alt="options"
                    />
                  </div>
                  {isVisible ? (
                    <div>
                      <Field
                        type="password"
                        name="current_password"
                        placeholder="Старый пароль"
                        value={values.current_password}
                        onChange={handleChange}
                        className={classes.input__item}
                        style={{ marginBottom: 15, marginTop: 15 }}
                      />
                      {errors.current_password && touched.current_password && (
                        <p className={"text-danger"}>
                          {errors.current_password}
                        </p>
                      )}
                      <Field
                        type="password"
                        name="new_password"
                        value={values.new_password}
                        onChange={handleChange}
                        placeholder="Новый пароль"
                        className={classes.input__item}
                      />
                      {errors.new_password && touched.new_password && (
                        <p className={"text-danger"}>{errors.new_password}</p>
                      )}
                    </div>
                  ) : null}
                  <div
                    className={classNames(
                      classes.content__button,
                      " d-flex justify-content-center"
                    )}
                  >
                    <button
                      type="submit"
                      className={classNames(classes.button, "col-md-3")}
                    >
                      Сохранить
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default PersonalArea;
