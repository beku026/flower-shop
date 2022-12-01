import React from "react";
import ImageSlider from "./ImageSlider";
import classes from "./imageSlider.module.scss";
import { Link, Breadcrumbs } from "@mui/material";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProductCard from "../ProductCard/ProductCard";
import { useAppSelector } from "../../redux/hooks";
import { productSelectors } from "../../redux/products/product.slice";
import { IProductV2 } from "../../redux/types/product";

type Props = {
  productData: IProductV2;
};

const SliderProductDetail: React.FC<Props> = ({ productData }) => {
  const products = useAppSelector((state) => productSelectors.selectAll(state));
  const { loading, error } = useAppSelector((state) => state.product);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <>
        <h1>Something went wrong!</h1>
        <p style={{ color: "red" }}>{error}</p>
      </>
    );
  }
  return (
    <>
      <div className={`container ${classes.sliderProduct}`}>
        <Breadcrumbs
          aria-label="breadcrumb"
          className={classes.breadcrumb_items}
        >
          <Link href="/" className={classes.nolink}>
            Главная
          </Link>
          <Link href="/authorBouquets" className={classes.nolink}>
            Каталог
          </Link>
          <Link href="/authorBouquets" className={classes.nolink}>
            Авторские букеты
          </Link>
          <Typography
            color="text.primary"
            className={classes.breadcrumb_item_active}
          >
            {productData.title}
          </Typography>
        </Breadcrumbs>
        <div className={`row ${classes.slider__block}`}>
          <div className={`col-4 ${classes.slider__item}`}>
            <ImageSlider images={productData?.product_image} />
          </div>
          <div className={`col-8 ${classes.slider__block__content}`}>
            <div className={classes.icecream}>
              <h1>Авторский букет «Айс крим»</h1>
              <p className={classes.icecream__price}>
                {productData.price}
                <span className={classes.currency}>c</span>
              </p>
            </div>
            <hr />
            <div className={classes.icecream__buttons}>
              <div className={classes.btn__order}>
                <Link href="/ordering" className={classes.nolink}>
                  <button className={classes.btn}>Быстрый заказ</button>
                </Link>
              </div>

              <div className={classes.btn_card}>
                <Link href="/cart" className={classes.nolink}>
                  <button className={classes.btn_second}>
                    <CardTravelIcon />
                    <p className={classes.btn__title}>В корзину</p>
                  </button>
                </Link>
              </div>
            </div>
            <section>
              <Accordion className={classes.accordion__item}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.accordion__block_title}>
                    Описание{" "}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={classes.accordion__block_text}>
                    Букет, в который вложено много любви. Флористы студии Lacy
                    Bird сделали его из <br /> самых свежих цветов, тщательно
                    продумав его состав. Теперь он готов удивить <br /> красотой
                    своего получателя!
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className={classes.accordion__item}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.accordion__block_title}>
                    Характеристика
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={classes.accordion__block_text}>
                    <div>Состав букета: </div>
                    <div>
                      Роза, Пионовидная роза, Кустовая роза, Диантус (Гвоздика),{" "}
                      <br />
                      Гортензия (Гидрангия), Антуриум, Хризантема, Гербера,
                      Кустовая <br />
                      пионовидная роза, Аспарагус, Рускус
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className={classes.accordion__item}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.accordion__block_title}>
                    Комплектация
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={classes.accordion__block_text}>
                    Упакуем букет в стильную фирменную коробку с крышкой, с
                    полной защитой от <br />
                    перепадов погоды (жара, мороз, ветер или дождь - заказывайте
                    букет в любую <br /> погоду)! В комплекте с букетом мы
                    прилагаем инструкцию по уходу за букетом и <br />
                    средство для продления жизни цветов.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </section>
          </div>
        </div>

        <h2 className={classes.title}>Рекомендуем</h2>
        <div className={`${classes.recomandation__item}`}>
          {products.slice(0, 5).map((item) => (
            <ProductCard data={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SliderProductDetail;
