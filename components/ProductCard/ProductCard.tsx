import React from "react";
import classes from "./productCard.module.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { IProductV2 } from "../../redux/types/product";
import { useAppDispatch } from "../../redux/hooks";
import { addItemToFavorites } from "../../redux/products/favorites.slice";

import Link from "next/link";

type Props = {
  data: IProductV2;
};

const ProductCard: React.FC<Props> = ({ data }) => {
  const dispatch = useAppDispatch();

  const handleAddFavorites = (data: any) => {
    dispatch(addItemToFavorites(data));
  };
  return (
    <div>
      <div className={classes.productCard}>
        {data.product_image &&
          data.product_image.map((item) => (
            <img src={item.image} key={item.id} alt="img" />
          ))}
        <div className={classes.item__like}>
          <Link href={"/favorites/"} passHref>
            <IconButton onClick={() => handleAddFavorites(data.id)}>
              <FavoriteIcon className={classes.like_icon} />
            </IconButton>
          </Link>
        </div>
      </div>
      <div className={classes.item_title}>{data.title}</div>
      <div className={classes.item_price}>{data.price}</div>
    </div>
  );
};

export default ProductCard;
