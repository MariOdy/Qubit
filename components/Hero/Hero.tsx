import Image from "next/future/image";
import HeroBg from "public/images/hero-bg.png";
import React from "react";
import { Content, HeroWrapper } from "./styles";

const Hero: React.FC = () => {
  return (
    <HeroWrapper>
      <Image src={HeroBg} alt="background" fill sizes="100vw" />
      <Content>
        <p>Driving growth with personalization.</p>
        <h2>
          Make ecommerce
          <br />
          <span>More personal.</span>
        </h2>
        <p>
          Hundreds of brands use <span>Qubit CommerceAI</span> to power the next
          generation of product recommendations, badging and insights to build
          exceptional customer experiences.
        </p>
        <form>
          <input
            type="email"
            id="input-email"
            placeholder="Enter your email"
            required
          ></input>
          <button type="submit">Book a demo</button>
        </form>
      </Content>
    </HeroWrapper>
  );
};

export default Hero;
