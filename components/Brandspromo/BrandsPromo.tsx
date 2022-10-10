import MeetCustomers from "components/buttons/MeetCustomers";
import Image from "next/image";
import React from "react";
import logos from "./logos";
import { BrandsPromoWrapper, Logos } from "./styles";

const BrandsPromo: React.FC = () => {
  return (
    <BrandsPromoWrapper>
      <h2>Trusted by world-class brands.</h2>
      <Logos>
        {logos.map((logo) => (
          <Image src={logo.src} alt={logo.alt} />
        ))}
      </Logos>
      <MeetCustomers />
    </BrandsPromoWrapper>
  );
};

export default BrandsPromo;
