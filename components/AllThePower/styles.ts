import styled from "styled-components";

export const AllThePowerWrapper = styled.div`
  width: 100%;
  min-height: 1020px;
  background-color: #f1f1f1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 40px;

  h2 {
    font-size: 40px;
    font-weight: 600;
  }
  p {
    font-size: 18px;
    font-weight: 300;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 20px;

  > button:nth-child(1) {
    border-radius: 20px;
    background-color: #6f2cff;
    color: #ffffff;
    padding: 12px 36px;
  }
  > button:nth-child(2) {
    background-color: #ffffff;
    color: #6f2cff;
  }
`;
