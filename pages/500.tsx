import Header from "../components/Header/Header";
import classes from "../styles/500.module.scss";
import error500img from "../assets/icons/error/error500.svg";
import Image from "next/image";

export default function Error500Page() {
  return (
    <>
      {/* <Header>

            </Header> */}
      <div className={classes.container}>
        <div className={classes.imageBlock}>
          <Image src={error500img} alt="" />
        </div>

        <div className={classes.notImageBlock}>
          <h1>500</h1>

          <p className={classes.description}>
            <b>Ошибка сервера</b>
          </p>

          <p className={classes.text}>
            На сервере произошла непредвиденная ошибка. Пожалуйста, вернитесь на
            главную!
          </p>

          <button>
            <b>На главную</b>
          </button>
        </div>
      </div>
    </>
  );
}
