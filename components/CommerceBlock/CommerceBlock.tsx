import React from "react";
import CommerceCard from "./CommerceCard";
import { CommerceWrapper } from "./styles";

const CommerceBlock: React.FC = () => {
  return (
    <CommerceWrapper>
      <h2>Qubit CommerceAI.</h2>
      <p>The new way to drive growth.</p>
      <div>
        <CommerceCard />
      </div>
    </CommerceWrapper>
  );
};

export default CommerceBlock;
