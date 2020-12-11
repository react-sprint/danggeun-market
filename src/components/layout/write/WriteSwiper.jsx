import React from 'react';
import { useHistory } from 'react-router-dom';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import queryString from 'query-string';

import 'swiper/swiper-bundle.css';
import 'swiper/swiper.scss';

function WriteSwiper() {
  const history = useHistory();
  const { search } = history.location;
  const query = queryString.parse(search);

  console.log(query);
  return (
    <Swiper spaceBetween={0}>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
}

export default WriteSwiper;
