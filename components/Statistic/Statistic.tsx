import BookDemo from "components/buttons/BookDemo";
import MeetCustomers from "components/buttons/MeetCustomers";
import React from "react";
import data from "./data";
import { LeftBlock, RightBlock, StatisticWrapper } from "./styles";

const Statistic: React.FC = () => {
  return (
    <StatisticWrapper>
      <LeftBlock>
        <h2>
          Grow 2.5x faster than
          <br />
          your competitors.
        </h2>
        <nav>
          <BookDemo />
          <MeetCustomers />
        </nav>
        <div>
          <p>*PwC audited methodology.</p>
          <a href="/">Read the report</a>
        </div>
      </LeftBlock>
      <RightBlock>
        {data.map((info) => (
          <div>
            <h2>{info.value}</h2>
            <p>{info.text}</p>
          </div>
        ))}
      </RightBlock>
    </StatisticWrapper>
  );
};

export default Statistic;
