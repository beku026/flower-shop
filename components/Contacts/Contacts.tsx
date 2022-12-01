import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import slash from "../../assets/images/cart/Cart_slash.svg";
import timer from "../../assets/images/contacts/timer.svg";
import phone from "../../assets/images/contacts/phone.svg";
import instagram from "../../assets/images/contacts/instagram.svg";
import location from "../../assets/images/contacts/location.svg";
import email from "../../assets/images/contacts/email.svg";
import classes from "./Contacts.module.scss"
import classNames from "classnames";

const Contacts = () => {
    return (
        <>
            <Container >
                <div className="row">
                    <div className={classNames(classes.contacts_link)}>
                        <Link href="/">
                            <a>
                                <span className={classNames(classes.main_link, classes.active)}>Главная</span>
                            </a>
                        </Link>
                        <Image src={slash} alt="slash" />
                        <span className={classNames(classes.second_link)}>Контакты</span>
                    </div>
                    <div >
                        <h1 className={classNames(classes.contact_title)}>Контакты</h1>
                    </div>
                    <div className={classNames(classes.contact_section, "col-md-6")}>
                        <div className={classNames(classes.contacts_item)}>
                            <div className="d-flex">
                                <Image layout="fixed" src={timer} alt="timer" />
                            </div>
                            <span className={classNames(classes.contacts_item__title)}>Ежедневно с 10.00 до 20.00</span>
                        </div>
                        <div className={classNames(classes.contacts_item)}>
                            <div className="d-flex">
                                <Image layout="fixed" src={phone} alt="phone" />
                            </div>
                            <span className={classNames(classes.contacts_item__title)}>+996995400500 (Тел / WhatsApp / Telegram)</span>
                        </div>
                        <div className={classNames(classes.contacts_item)}>
                            <div className="d-flex">
                                <Image layout="fixed" src={email} alt="email" />
                            </div>
                            <span className={classNames(classes.contacts_item__title)}>achekeyarna@gmal.com</span>
                        </div>
                        <div className={classNames(classes.contacts_item)}>
                            <div className="d-flex">
                                <Image layout="fixed" src={location} alt="location" />
                            </div>
                            <span className={classNames(classes.contacts_item__title)}>г. Бишкек, ж/м Кок-Жар, Ачекей 50</span>
                        </div>
                        <div className={classNames(classes.contacts_item)}>
                            <div className="d-flex">
                                <Image layout="fixed" src={instagram} alt="instagram" />
                            </div>
                            <span className={classNames(classes.contacts_item__title)}>@achekeyarna</span>
                        </div>
                    </div>
                    <div className={classNames(classes.contact_map, " d-flex justify-content-center")}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2926.010594713507!2d74.65120001616211!3d42.830390013260434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb753e88d1de1%3A0xb422bf23fc0de330!2z0JPQvtGA0L7QtNC-0LogItCQ0KfQldCa0JXQmSI!5e0!3m2!1sru!2skg!4v1640163223284!5m2!1sru!2skg"
                            width="734" height="357" style={{ border: '1px solid #B28F58', borderRadius: '2px' }} loading="lazy">
                        </iframe>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Contacts;
