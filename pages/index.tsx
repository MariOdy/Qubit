import AllThePower from "components/AllThePower/AllThePower";
import BrandsPromo from "components/Brandspromo/BrandsPromo";
import CommerceBlock from "components/CommerceBlock/CommerceBlock";
import Header from "components/Header/Header";
import Hero from "components/Hero/Hero";
import Statistic from "components/Statistic/Statistic";
import WhatYouCan from "components/WhatYouCan/WhatYouCan";
import Head from "next/head";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="favicon.svg" />
        <title>Qubit</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <BrandsPromo />
        <Statistic />
        <CommerceBlock />
        <AllThePower />
        <WhatYouCan />
      </main>
    </div>
  );
};

export default HomePage;
