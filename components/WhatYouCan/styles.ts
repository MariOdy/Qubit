import styled from "styled-components";

export const WhatYouCanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 100px;

  > h2 {
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 90px;
  }
  > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    gap: 90px;
  }
`;
export const OpportunityCard = styled.div`
  display: grid;
  grid-template-rows: 20% 60% 20%;
  text-align: center;
  align-items: center;

  h2 {
    font-size: 20px;
    font-weight: 600;
  }
  p {
    min-height: 70px;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
  }
`;
