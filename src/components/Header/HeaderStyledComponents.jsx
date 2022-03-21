import styled from 'styled-components';
export const HeaderStyled = styled.header`
  margin-top: 9px;
  padding: 4px 0px 5px 0px;
  border-bottom: 1px solid #e6ecf5;
  @media (max-width: 767px) {
  }
  @media (max-width: 400px) {
  }
`;
export const HeaderContainer = styled.div`
  height: 100%;
  padding: 0px 8px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  display: flex;
  align-items: center;
  @media screen and (min-width: 374px) {
    padding: 0px 16px;
    max-width: 375px;
  }
  @media screen and (min-width: 1439px) {
    padding: 112px;
    max-width: 1440px;
  }
`;
export const Burger = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  background-color: white;
  &:hover > svg > path {
    stroke: #0072db;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const BurgerSvg = styled.svg``;

export const HeaderForm = styled.form`
  position: relative;
  margin-left: 16px;
  display: flex;
  align-items: center;
`;
export const HeaderFormInput = styled.input`
  width: 215px;
  height: 40px;
  border: 1px solid #e6ecf5;
  box-sizing: border-box;
  border-radius: 4px;
  padding-top: 11px;
  padding-left: 16px;
  padding-bottom: 12px;
  ::placeholder {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.2;

    color: #575757;
  }
`;
export const HeaderFormButton = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 0;
  background: #0072db;
  border-radius: 0px 4px 4px 0px;
`;
export const HeaderFormButtonSvg = styled.svg``;
export const HeaderBell = styled.button`
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover > svg > path {
    fill: #0072db;
  }
`;

export const HeaderBellSvg = styled.svg``;
export const HeaderAccount = styled.img`
  margin-left: 21px;
`;
