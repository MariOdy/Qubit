import styled from "styled-components";

export const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  img {
    z-index: 0;
  }
`;
export const Content = styled.div`
  position: relative;
  max-width: 50%;
  height: 100vh;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 8%;

  p {
    font-size: 14px;
    font-weight: 300;
  }
  h2 {
    font-size: 54px;
    font-weight: 600;
    line-height: 50px;
    margin-top: 20px;
    margin-bottom: 30px;
    span {
      color: #6f2cff;
    }
  }
  h2 + p {
    font-size: 18px;
    width: 90%;
    line-height: 30px;
    span {
      font-weight: 800;
    }
  }

  form {
    border-radius: 28px;
    border: 1px solid #6f2cff;
    min-height: 45px;
    display: grid;
    grid-template-columns: 60% 40%;
    overflow: hidden;
    margin-top: 20px;
    input {
        border: none;
        padding: 2px 24px;
    }
    input:focus{
        outline: none;
    }
    button {
      background-color: #6f2cff;
      color: #ffffff;
      padding: 12px 36px;
    }
  }
`;
