import React from "react";
import classes from "./popular.module.scss";
import Link from "next/link";
import ProductCard from "../ProductCard/ProductCard";
import { useAppSelector } from "../../redux/hooks";
import { productSelectors } from "../../redux/products/product.slice";

const Popular: React.FC = () => {
  const products = useAppSelector((state) => productSelectors.selectAll(state));

  const { loading, error } = useAppSelector((state) => state.product);

  if (loading) {
    return <div className="d-flex justify-content-center" style={{ paddingTop: 100 }}>Loading...</div>;
  }
  if (error) {
    return (
      <div className="d-flex justify-content-center" style={{ paddingTop: 100 }}>
        <h1>Something went wrong!</h1>
        <p style={{ color: "red" }}>{error}</p>
      </div>
    );
  }
  return (
    <div className="container">
      <div className={classes.popular}>
        <h2 className={classes.title}>Популярное</h2>
        <div className="row">
          {products.slice(0, 4).map((product) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={product.id}>
              <Link href={"/products/" + product.id} passHref>
                <a className="no-link">
                  <ProductCard data={product} />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
