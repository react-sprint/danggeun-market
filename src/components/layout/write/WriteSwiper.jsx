import React from 'react';
import styled from 'styled-components';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import 'swiper/swiper.scss';

SwiperCore.use([Pagination]);

const SwiperWrap = styled.div`
  .swiper-slide {
    height: 100vw;
    background: url(${({ imgLink }) => imgLink}) center center/cover no-repeat;
  }

  .swiper-pagination-bullet,
  .swiper-pagination-bullet-active {
    background-color: #fff;
  }
`;

function WriteSwiper({ carouselImg }) {
  return (
    <SwiperWrap>
      <Swiper spaceBetween={0} pagination>
        {carouselImg !== 'default' && carouselImg?.length >= 1 ? (
          carouselImg.map((img, idx) => {
            return (
              <SwiperSlide
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                style={{
                  background: `url(${img}) center center/cover no-repeat`,
                }}
              />
            );
          })
        ) : (
          <SwiperSlide
            style={{
              backgroundColor: '#CCC',
              fontSize: '2rem',
              textAlign: 'center',
              lineHeight: '100vw',
            }}
          >
            NO IMAGE
          </SwiperSlide>
        )}
      </Swiper>
    </SwiperWrap>
  );
}

export default WriteSwiper;
