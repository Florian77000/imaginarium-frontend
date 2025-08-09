import styles from '../styles/Home.module.css';
import Header from "./header/header";
import Footer from "./Footer";
import CardHero from "./CardHero";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useState, useEffect } from 'react';

import 'swiper/css';
import 'swiper/css/navigation'; //Ajoute les boutons pour naviguer
import 'swiper/css/scrollbar'; //Ajoute la navigation par scroll
import 'swiper/css/pagination'; //Ajoute les points de la navigation

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>  
        <div className={styles.swiperDiv}>
        <Swiper
          className={styles.swiper}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide><img src='./femme.jpg'></img></SwiperSlide>
          <SwiperSlide><img src='./bracelet.jpg'></img></SwiperSlide>
          <SwiperSlide><img src='./perle.jpg'></img></SwiperSlide>
        </Swiper> 
        </div>
      </main>
      <section>
        <div className={styles.title}>
          <h2>Nouveautés</h2>
        </div>
        <CardHero />
        <div className={styles.title}>
          <h2>Best sellers</h2>
        </div>
        <CardHero />
      </section>
      <Footer />
      
      </>
  );
}

