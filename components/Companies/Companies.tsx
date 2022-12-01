import React from "react";
import { Link, Breadcrumbs } from "@mui/material";
import Typography from "@mui/material/Typography";
import classes from "./companies.module.scss";
import CompaniesSlider from "./CompaniesSlider";
import Image from "next/image";
import { Field, Form, Formik } from "formik";
import img from "../../assets/images/contactInfo/img.png";
import arrow from "../../assets/images/subscription/arrow.svg";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import * as yup from "yup";
import {
  CreateNotificationDto,
  NotificationStatus,
} from "../../redux/types/notification";
import { useGetCompanies, useAppDispatch } from "../../redux/hooks";
import { createNotification } from "../../redux/products/notification.slice";



const initialValues: CreateNotificationDto = {
  client: "",
  phone: "",
  status: NotificationStatus.NOTIFICATION,
};
const schema = yup.object({
  client: yup.string().required("Введите имя!"),
  phone: yup.string().required("Введите номер телефона!"),
  status: yup
    .string()
    .required("Status is required")
    .oneOf(["NOTIFICATION", "DOING", "DONE"]),
});

const Companies: React.FC = () => {
  const { data } = useGetCompanies();
  const dispatch = useAppDispatch();

  const handleSubmit = async (values: CreateNotificationDto, helpers: any) => {
    await dispatch(createNotification(values))
    helpers.resetForm()
  };

  return (
    <div className={classes.companies}>
      <div className="container">
        <Breadcrumbs
          aria-label="breadcrumb"
          className={classes.breadcrumb_items}
        >
          <Link underline="hover" color="black" href="/">
            Главная
          </Link>
          <Typography
            color="text.primary"
            className={classes.breadcrumb_item_active}
          >
            Компаниям
          </Typography>
        </Breadcrumbs>
        <div className="row">
          <div>
            <div className="col-12 d-flex justify-content-center align-items-center">
              <p className={classes.companies__info}>
                Цветочная мастерская{" "}
                <span className={classes.companies__name}>Ачекей Арна</span>{" "}
                предоставляет широкий спектр услуг, касающихся поздравлений и
                оформлений - букеты, композиции для стола, подарочные наборы и
                оформление мероприятий живыми цветами.
              </p>
            </div>
          </div>
          <div className={classes.companies__slider}>
            <div className="col-12">
              <CompaniesSlider />
              <div className={classes.slider__counter}>
                <span className={classes.counter}>1/10</span>
              </div>
            </div>
          </div>

          <div className="col-12 d-flex justify-content-center align-items-center">
            <section className={classes.companies__service}>
              <h1 className={classes.companies__title}>{data?.[0]?.title}</h1>
              <ul className={classes.service__content}>
                <li>{data?.[0]?.description}</li>
              </ul>
            </section>
          </div>

          <div className={classes.companies__slider}>
            <div className="col-12">
              <CompaniesSlider />
              <div className={classes.slider__counter}>
                <span className={classes.counter}>1/10</span>
              </div>
            </div>
          </div>

          <div className="col-12 d-flex justify-content-center align-items-center">
            <section className={classes.companies__invitation}>
              <h3 className={classes.companies__title_invitation}>
                {data?.[1]?.title}
              </h3>
              <p className={classes.invitation__content}>
                {data?.[1]?.description}
              </p>
            </section>
          </div>
        </div>
      </div>
      <section className={classes.contactInfo}>
        <div className="container">
          <div className="row">
            <div className={`col-md-6 ${classes.contactInfo__content}`}>
              <h2>Мы с радостью соберём для вас:</h2>
              <p>
                В случае, если вы не нашли то, что подходит вам - мы готовы
                разработать для вас индивидуальное предложение. <br />
                На все ваши вопросы мы готовы ответить по нашему рабочему
                телефону:
              </p>
              <div className={classes.contactInfo__details}>
                <MobileScreenShareIcon />
                <span>+996995400500 (Тел / WhatsApp / Telegram)</span>
              </div>
              <p>
                Или оставьте свою контактную информацию, и мы с вами свяжемся в
                ближайшее время:
              </p>
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={schema}
              >
                {({ values, handleSubmit, touched, errors }) => (
                  <Form
                    onSubmit={handleSubmit}
                    className={classes.contactInfo__form}
                  >
                    <Field
                      type="text"
                      name="client"
                      value={values.client}
                      placeholder="Ваше имя"
                      className="form-control"
                    />
                    {errors.client && touched.client && (
                      <p className="text-danger">{errors.client}</p>
                    )}
                    <Field
                      type="text"
                      className="form-control mb-3 mt-3"
                      placeholder="Ваш телефон"
                      value={values.phone}
                      name="phone"
                    />
                    {errors.phone && touched.phone && (
                      <p className="text-danger">{errors.phone}</p>
                    )}

                    <button type="submit" className={classes.contact_btn}>
                      Отправить
                      <div className={classes.contactInfo__button}>
                        <Image
                          className={classes.contactInfo__arrow}
                          src={arrow}
                          width={18.69}
                          height={10.52}
                          alt="arrow"
                        />
                      </div>
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>

        <div className={classes.contactInfo_bg_wrapper}>
          <Image src={img} width={705} height={672} alt="flower" />
        </div>
      </section>
    </div>
  );
};

export default Companies;
