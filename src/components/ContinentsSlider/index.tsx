import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";

import { Slide } from "./Slide";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

export const ContinentsSlider = () => (
  <Swiper navigation pagination>
    <SwiperSlide>
      <Slide
        heading="Europa"
        description="O continente mais antigo"
        imgUrl="https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
    </SwiperSlide>
    <SwiperSlide>
      <Slide
        heading="Europa"
        description="O continente mais antigo"
        imgUrl="https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
    </SwiperSlide>
  </Swiper>
);
