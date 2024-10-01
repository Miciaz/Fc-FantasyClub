'use client';

/* eslint-disable react/jsx-indent-props */
import React, { ReactElement } from 'react';
import { Carousel } from '@mantine/carousel';
import Image from 'next/image';
import LogoFanta from '@/public/LogoFanta.png';
import logoMilan from '@/public/LogoMilan.png';
import LogoLazio from '@/public/LogoLazio.png';

import '@mantine/carousel/styles.css';
import styles from './Demo.module.scss';

function Demo(): ReactElement {
  return (
    <Carousel
      slideSize="70%"
      height={200}
      slideGap="xl"
      controlsOffset="xs"
      className={styles.carouselWrapper}
    >
      {/* Slide 1 */}
      <Carousel.Slide>
        <div className={styles.carouselSlide}>
          <div className={styles.header}>
            Partite recenti
            <div className={styles.league}>Serie A</div>
          </div>
          <div className={styles.content}>
            <div className={styles.team}>
              <Image src={logoMilan} alt="Inter Logo" className={styles.logo} />
              <div className={styles.name}>AC Milan</div>
            </div>
            <div className={styles.score}>
              3<span className={styles.separator}>:</span>1
            </div>
            <div className={styles.team}>
              <Image src={LogoLazio} alt="Milan Logo" className={styles.logo} />
              <div className={styles.name}>SS Lazio</div>
            </div>
          </div>
        </div>
      </Carousel.Slide>

      {/* Slide 2 */}
      <Carousel.Slide>
        <div className={styles.carouselSlide}>
          <div className={styles.header}>
            Partite recenti
            <div className={styles.league}>Serie A</div>
          </div>
          <div className={styles.content}>
            <div className={styles.team}>
              <Image
                src={LogoFanta}
                alt="Team 1 Logo"
                className={styles.logo}
                height={64}
                width={120}
              />
              <div className={styles.name}>Team45</div>
            </div>
            <div className={styles.score}>
              2<span className={styles.separator}>:</span>2
            </div>
            <div className={styles.team}>
              <Image
                src={LogoFanta}
                alt="Team 2 Logo"
                className={styles.logo}
                height={54}
                width={100}
              />
              <div className={styles.name}>Team23</div>
            </div>
          </div>
        </div>
      </Carousel.Slide>

      {/* Slide 3 */}
      <Carousel.Slide>
        <div className={styles.carouselSlide}>
          <div className={styles.header}>
            Partite recenti
            <div className={styles.league}>Serie A</div>
          </div>
          <div className={styles.content}>
            <div className={styles.team}>
              <Image
                src={LogoFanta}
                alt="Team 3 Logo"
                className={styles.logo}
                height={54}
                width={100}
              />
              <div className={styles.name}>Team3</div>
            </div>
            <div className={styles.score}>
              1<span className={styles.separator}>:</span>4
            </div>
            <div className={styles.team}>
              <Image
                src={LogoFanta}
                alt="Team 4 Logo"
                className={styles.logo}
                height={54}
                width={80}
              />
              <div className={styles.name}>Team4</div>
            </div>
          </div>
        </div>
      </Carousel.Slide>
    </Carousel>
  );
}

export default Demo;
