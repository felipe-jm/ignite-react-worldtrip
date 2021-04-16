import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";

import { Slide } from "./Slide";
import { ContinentType } from "templates/Continent";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

type ContinentsSliderProps = {
  continents: ContinentType[];
};

export const ContinentsSlider = ({ continents }: ContinentsSliderProps) => (
  <Swiper navigation pagination>
    {continents.map((continent) => (
      <SwiperSlide key={continent.slug}>
        <Slide
          heading={continent.title}
          description={continent.subtitle}
          href={`/continents/${continent.slug}`}
          imgUrl={continent.imgUrl}
        />
      </SwiperSlide>
    ))}
  </Swiper>
);
