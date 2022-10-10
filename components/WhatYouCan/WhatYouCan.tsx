import Image from 'next/image';
import React from 'react';
import oppportunities from './opportunities';
import { OpportunityCard, WhatYouCanWrapper } from './styles';

const WhatYouCan: React.FC = () => {

   return (
  <WhatYouCanWrapper>
    <h2>What you can do with Qubit.</h2>
    <div>
        {oppportunities.map((opportunity)=>(
            <OpportunityCard>
                <Image src={opportunity.logo} alt={opportunity.name}/>
                <h2>{opportunity.name}</h2>
                <p>{opportunity.text}</p>
            </OpportunityCard>
        ))}
    </div>
  </WhatYouCanWrapper>

)}

export default WhatYouCan;
