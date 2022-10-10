import styled from "styled-components";

export const CommerceWrapper = styled.div`
  width: 100%;
  min-height: 530px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px 100px;

  h2 {
    font-size: 40px;
    font-weight: 600;
  }
  p {
    font-size: 18px;
    font-weight: 300;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 75px;
  margin-top: 50px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 16px;

    h2 {
      font-size: 18px;
      font-weight: 600;
      margin-top: 32px;
    }
    p {
      font-size: 16px;
      font-weight: 300;
      padding: 0 8px;
    }
  }
`;
