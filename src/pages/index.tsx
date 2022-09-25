import type { NextPage } from "next";
import { useKeenSlider } from "keen-slider/react";

import Image from "next/future/image";
import { HomeContainer, Product } from "../styles/pages/home";

import camiseta1 from "../assets/1.png";
import camiseta2 from "../assets/2.png";
import camiseta3 from "../assets/3.png";

import "keen-slider/keen-slider.min.css";

const Home: NextPage = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
    },
  });
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480} alt="camiseta" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 59,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta2} width={520} height={480} alt="camiseta" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 590,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta3} width={520} height={480} alt="camiseta" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 5,900,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta3} width={520} height={480} alt="camiseta" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 5,900,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta3} width={520} height={480} alt="camiseta" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 5,900,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
};

export default Home;
