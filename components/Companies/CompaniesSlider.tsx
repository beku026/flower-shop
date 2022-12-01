import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import classes from "./companies.module.scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useGetCompaniesImage } from "../../redux/hooks";

SwiperCore.use([FreeMode, Navigation, Thumbs]);

const CompaniesSlider: React.FC = () => {
  const dataSlider = useGetCompaniesImage();
 

  return (
    <>
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          className={classes.slider}
        >
          {!!dataSlider.dataSlider?.length &&
            dataSlider.dataSlider.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <img
                    src={item.image}
                    alt={`${item.id}-thumb`}
                    width={1110}
                    height={440}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
};

export default CompaniesSlider;
