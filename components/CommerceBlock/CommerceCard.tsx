import Image from "next/future/image";
import Insight from "/public/images/commerce-insight.svg";
import Personal from "/public/images/commerce-personal.svg";
import Effective from "/public/images/commerce-effective.svg";

import React from "react";
import { CardWrapper } from "./styles";

const commerceData = [
  {
    logo: Insight,
    name: "More insight",
    text: "Learn which products drive performance and which do not, through automated insights you can action.",
  },
  {
    logo: Personal,
    name: "More personal",
    text: "Qubit CommerceAI generates a model per shopper to make every customer interaction more relevant.",
  },
  {
    logo: Effective,
    name: "More effective",
    text: "Qubit fuses data, intent, and design tools to enable your team to create more effective customer experiences.",
  },
];

const CommerceCard: React.FC = () => {
  return (
    <CardWrapper>
      {commerceData.map((data) => (
        <div>
          <Image src={data.logo} alt="" />
          <h2>{data.name}</h2>
          <p>{data.text}</p>
        </div>
      ))}
    </CardWrapper>
  );
};

export default CommerceCard;
