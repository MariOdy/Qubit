import styled from "styled-components";

export const StatisticWrapper = styled.div`
  width: 100%;
  min-height: 660px;
  padding: 50px 100px;

  display: flex;
  align-items: stretch;
  justify-content: space-between;
`;

export const LeftBlock = styled.div`
  flex: 1 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;

  h2 {
    font-size: 40px;
    font-weight: 800;
  }

  nav {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    a {
      text-decoration: underline;
    }
  }
`;

export const RightBlock = styled.div`
  flex: 1 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  justify-content: space-between;

  > div {
    border-left: 1px solid #e0e0e0;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    h2 {
      font-size: 40px;
      font-weight: 600;
    }
    p {
      font-size: 16px;
      font-weight: 300;
      width: 80%;
    }
  }
`;
