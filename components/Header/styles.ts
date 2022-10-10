import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  min-height: 60px;
  padding: 10px 30px;
  font-size: 14px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;

  li {
    cursor: default;
  }
`;
export const RightBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;
