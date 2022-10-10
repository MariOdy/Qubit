import Image from "next/future/image";
import Example from "/public/images/example.png";
import React from "react";
import { AllThePowerWrapper, Buttons } from "./styles";
import BookDemo from "components/buttons/BookDemo";

const AllThePower: React.FC = () => {
  return (
    <AllThePowerWrapper>
      <h2>All the power. Easy to use.</h2>
      <p>
        By collaborating with real ecommerce teams we've built the next-gen
        personalization tool. No code. No clunkiness.
      </p>
      <Image src={Example} alt="Example" width={929} height={661} />
      <Buttons>
        <button>See products</button>
        <BookDemo />
      </Buttons>
    </AllThePowerWrapper>
  );
};

export default AllThePower;
