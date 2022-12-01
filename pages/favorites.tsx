import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import classes from "../components/FavoritesPage/Favorites.module.scss";
import classNames from "classnames";
import Link from "next/link";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import FavoritesItem from "../components/FavoritesPage/FavoritesItem";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import {
  fetchfavorites,
  favoritesSelectors,
} from "../redux/products/favorites.slice";
import { CircularProgress } from "@mui/material";
import { fetchCartItems } from "../redux/products/cart.slice";

const Favorites: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchfavorites());
    dispatch(fetchCartItems())
  }, [dispatch]);

  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const favorites = useAppSelector((state) =>
    favoritesSelectors.selectAll(state)
  );

  const { loading, error } = useAppSelector((state) => state.favorites);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center"
        style={{ paddingTop: 300 }}
      >
        Loading
        <CircularProgress />
      </div>
    )
  }
  if (error) {
    return (
      <>
        <h1
          className="d-flex justify-content-center"
          style={{ paddingTop: 300 }}
        >
          Something went wrong!
        </h1>
        <p style={{ color: 'red' }} className="d-flex justify-content-center">
          {error}
        </p>
      </>
    )
  }
  return (
    <div className="favorites__page">
      <Header />
      <Container>
        <div className={classNames(classes.breadcrumb)}>
          <Link href="/" passHref>
            <a>Главная</a>
          </Link>
          <span>/</span>
          <Link href="">
            <>Избранное</>
          </Link>
        </div>
        <div className={classes.favorites__page}>
          <h1
            className={classNames(
              classes.title,
              'd-flex justify-content-center'
            )}
          >
            Избранное
          </h1>
          <div className="row">
            {!!favorites?.length &&
              favorites.map((item) => (
                <div
                  key={item.id}
                  className={classNames(
                    classes.content,
                    'col-lg-3 col-md-6 col-sm-12'
                  )}
                >
                  <FavoritesItem data={item} />
                </div>
              ))}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default Favorites
