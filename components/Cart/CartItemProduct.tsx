import React, { useMemo } from "react";
import Image from "next/image";
import classes from "./Cart.module.scss";
import CloseCartImg from "../../assets/images/cart/cart_close.svg";
import fake_img from "../../assets/images/cart/fake_img.svg";
import PlusCartImg from "../../assets/images/cart/plus_cart.svg";
import MinusCartImg from "../../assets/images/cart/minus_cart.svg";
import {
  removeCartItem,
  changeCartItemAmount,
} from "../../redux/products/cart.slice";
import { useAppDispatch } from "../../redux/hooks";

type Props = {
  data: any;
  key: number;
};  

const CartItem: React.FC<Props> = ({
  data: { id, product, total_sum, amount },
  key,
}) => {
  const { product_image, title }: any = product;

  const dispatch = useAppDispatch();
  const total_Sum = useMemo(() => {
    return total_sum * amount;
  }, [amount]);

  const incrementCartCounter = () => {
    if (amount < 500) {
      dispatch(changeCartItemAmount({ id, amount: amount + 1 }));
    }
  };

  const decrementCartCounter = () => {
    if (amount > 1) {
      dispatch(changeCartItemAmount({ id, amount: amount - 1 }));
    } else {
      handleRemoveItem(id);
    }
  };

  const handleRemoveItem = (id: number) => {
    const message = `Вы действительно хотите удалить ${title} из корзины ?`;
    if (confirm(message)) dispatch(removeCartItem(id));
  };

  return (
    <div key={key}>
      <div className={`${classes.flower_section} d-flex`}>
        {!!product_image?.length
          ? product_image.map((item: any) => (
              <div key={item.id} className={classes.flower_image}>
                <img
                  className={classes.main_flower__image}
                  key={item.product_id}
                  src={item.image ? item.image : fake_img}
                  alt="flower"
                />
              </div>
            ))
          : null}
        <div className={`${classes.flower_shop__item}`}>
          <div className="row">
            <div className="col-9 col-md-10 col-lg-10">
              <span className={`${classes.flower_shop__title}`}>
                {title ? title : "цветы"}
              </span>
            </div>
            <div className="col-3 col-md-1 col-lg-1">
              <Image
                onClick={() => handleRemoveItem(id)}
                className="closeIcon"
                layout="fixed"
                src={CloseCartImg}
                alt="closeIcon"
              />
            </div>
          </div>
          <div
            className={`${classes.flower_button__group} d-flex align-items-center`}
          >
            <button
              onClick={decrementCartCounter}
              className={classes.flower_button}
            >
              <Image src={MinusCartImg} alt="minus" />
            </button>
            <span className={classes.flower_number}>{amount}</span>
            <button
              onClick={incrementCartCounter}
              className={classes.flower_button}
            >
              <Image src={PlusCartImg} alt="plus" />
            </button>
          </div>
          <div className="row">
            <span className={`${classes.flower_single__price} col`}>
              {total_Sum ? total_Sum : 0}{" "}
              <span className={classes.flower_cart__price}>с</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
