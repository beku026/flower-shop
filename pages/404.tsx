import React from "react";
import classes from "../styles/404.module.scss";
import Image from "next/image";
import error404 from "../assets/images/error/eroor404.svg";
import fork from "../assets/images/error/fork.svg";
import socket from "../assets/images/error/socket.svg";
import Header from "../components/Header/Header";
import Link from "@mui/material/Link";
import NextLink from "next/link";

const Error404 = () => {
  return (
    <>
      <Header />
      <div className={classes.conteiner}>
        <div
          className={`${classes.content__error} col-md-12 d-flex align-items-center`}
        >
          <div className={classes.fork}>
            <Image src={fork} alt="Вилка" />
          </div>
          <div className={classes.error404}>
            <Image src={error404} alt="404" />
          </div>
          <div className={classes.socket}>
            <Image src={socket} alt="Розетка" />
          </div>
        </div>
        <div className={classes.title}>
          <h1>
            <b>Страница не найдена!</b>
          </h1>
        </div>
        <div className={`${classes.item} d-flex align-items-center`}>
          К сожалению, запрошенная вами страница не найдена.
          <br />
          Пожалуйста, вернитесь на главную!
        </div>
        <NextLink href="/">
          <Link className={classes.link} underline="none">
            На главную
          </Link>
        </NextLink>
      </div>
    </>
  );
};

export default Error404;
