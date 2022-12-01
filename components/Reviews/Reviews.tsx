import React from "react";
import Image from "next/dist/client/image";
import classes from "./reviews.module.scss";
import woman from "../../assets/images/reviews/woman.svg";
import star from "../../assets/images/reviews/star.svg";
import Link from "next/link";
import arrow from "../../assets/icons/Vector.svg";

function Reviews() {
  return (
    <div className={`container ${classes.reviews}`}>
      <div className="row d-flex justify-content-center">
        <Link href="/reviews" passHref>
          <a className={classes.nolink}>
            <div className={classes.reviews__link}>
              <h2 className={classes.title}>Отзывы</h2>
              <p className={classes.reviews__link_text}>
                Читать все
                <Image
                  src={arrow}
                  alt="arrow"
                  width={18.69}
                  height={10.52}
                  className={classes.reviews__link_arrow}
                />
              </p>
            </div>
          </a>
        </Link>

        <div className="col-lg-6 col-md-12 d-flex justify-content-center mt-3">
          <div className="row m-1">
            <div className={classes.reviews__item}>
              <div className="col-lg-4 col-md-4 d-flex justify-content-center">
                <div className={classes.item__photo}>
                  <Image
                    src={woman}
                    className={classes.card_photo}
                    width={94}
                    height={94}
                    alt="woman"
                  />
                  <div className={classes.reviews__stars}>
                    <Image
                      src={star}
                      className={classes.star_icon}
                      width={13.23}
                      height={12.64}
                      alt="star"
                    />
                    <Image
                      src={star}
                      className={classes.star_icon}
                      width={13.23}
                      height={12.64}
                      alt="star"
                    />
                    <Image
                      src={star}
                      className={classes.star_icon}
                      width={13.23}
                      height={12.64}
                      alt="star"
                    />
                    <Image
                      src={star}
                      className={classes.star_icon}
                      width={13.23}
                      height={12.64}
                      alt="star"
                    />
                    <Image
                      src={star}
                      className={classes.star_icon}
                      width={13.23}
                      height={12.64}
                      alt="star"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 d-flex justify-content-center">
                <div className={classes.reviews__content}>
                  <h2 className={classes.reviews__title}>Александр Иванов</h2>
                  <p className={classes.reviews__text}>
                    Это целая история о любви, дружбе, признательности,
                    благодарности. Это способ самовыражения, возможность стать
                    ближе, доставить радость и устроить неожиданный праздник,
                    несмотря на серые будни. Такими принципами руководствуется в
                    своей работе команда Lacy Bird.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 d-flex justify-content-center mt-3">
          <div className="row m-1">
            <div className={classes.reviews__item}>
              <div className="col-lg-4 col-md-4 d-flex justify-content-center">
                <div className={classes.item__photo}>
                  <Image
                    src={woman}
                    className={classes.card_photo}
                    width={94}
                    height={94}
                    alt="woman"
                  />
                  <div className={classes.reviews__stars}>
                    <Image
                      src={star}
                      className={classes.star_icon}
                      width={13.23}
                      height={12.64}
                      alt="star"
                    />
                    <Image
                      src={star}
                      className={classes.star_icon}
                      width={13.23}
                      height={12.64}
                      alt="star"
                    />
                    <Image
                      src={star}
                      className={classes.star_icon}
                      width={13.23}
                      height={12.64}
                      alt="star"
                    />
                    <Image
                      src={star}
                      className={classes.star_icon}
                      width={13.23}
                      height={12.64}
                      alt="star"
                    />
                    <Image
                      src={star}
                      className={classes.star_icon}
                      width={13.23}
                      height={12.64}
                      alt="star"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 d-flex justify-content-center">
                <div className={classes.reviews__content}>
                  <h2 className={classes.reviews__title}>Александр Иванов</h2>
                  <p className={classes.reviews__text}>
                    Это целая история о любви, дружбе, признательности,
                    благодарности. Это способ самовыражения, возможность стать
                    ближе, доставить радость и устроить неожиданный праздник,
                    несмотря на серые будни. Такими принципами руководствуется в
                    своей работе команда Lacy Bird.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
