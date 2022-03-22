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
    padding: 0px 112px;
    max-width: 1440px;
  }
`;
export const Burger = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  background-color: white;
  &:hover > svg > path {
    stroke: #0072db;
  }

  @media screen and (min-width: 1439px) {
    display: none;
  }
`;

export const BurgerSvg = styled.svg``;

export const HeaderForm = styled.form`
  position: relative;
  margin-left: 16px;
  display: flex;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 1439px) {
    display: none;
  }
`;
export const HeaderFormInput = styled.input`
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
export const HeaderIcons = styled.div`
  margin-left: 16px;
  margin-right: 16px;
  @media screen and (min-width: 1439px) {
    margin-right: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
  }
`;
export const HeaderBell = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  :hover > svg > path {
    fill: #0072db;
  }
  @media screen and (min-width: 1439px) {
    margin-left: 20px;
  }
`;
export const HeaderBellSvg = styled.svg``;

export const HeaderPlus = styled.button`
  display: none;
  @media screen and (min-width: 1439px) {
    display: flex;
    align-items: center;
    justify-content: center;
    :hover > svg > path {
      fill: #0072db;
    }
  }
`;
export const HeaderPlusSvg = styled.svg``;

export const HeaderFavorite = styled.button`
  display: none;
  @media screen and (min-width: 1439px) {
    margin-left: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    :hover > svg > path {
      fill: #0072db;
    }
  }
`;

export const HeaderFavoriteSvg = styled.svg``;
export const HeaderAccount = styled.div`
  display: flex;
  align-items: center;
`;
export const HeaderAccountImg = styled.img`
  max-width: 32px;
  max-height: 32px;
  @media screen and (min-width: 1439px) {
    max-width: 48px;
    max-height: 48px;
  }
`;
export const HeaderAccountText = styled.div`
  display: none;
  @media screen and (min-width: 1439px) {
    display: block;
    margin-left: 12px;
  }
`;
export const HeaderAccountTextName = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 1.2;

  color: #222222;
`;
export const HeaderAccountTextRole = styled.p`
  margin-top: 3px;
  font-weight: 300;
  font-size: 12px;
  line-height: 1.2;

  color: #575757;
`;
export const Navigation = styled.nav`
  @media screen and (min-width: 1439px) {
    display: flex;
  }
`;
export const NavigationList = styled.ul`
  display: none;
  @media screen and (min-width: 1439px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 32px;
  }
`;
export const NavigationItem = styled.li`
  display: none;
  @media screen and (min-width: 1439px) {
    display: flex;
    :not(:last-child) {
      margin-right: 32px;
    }
  }
`;
export const NavigationItemLink = styled.a`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.2;
  /* identical to box height */

  /* main */

  color: #222222;
`;
export const HeaderLogoLink = styled.a`
  display: none;
  @media screen and (min-width: 1439px) {
    position: relative;

    display: flex;
  }
`;
export const HeaderLogoImg = styled.svg`
  display: none;
  @media screen and (min-width: 1439px) {
    display: block;
  }
`;
export const HeaderLogoText = styled.p`
  display: none;
  @media screen and (min-width: 1439px) {
    position: absolute;
    left: 18px;
    top: 7px;
    display: block;
    font-weight: 400;
    font-size: 28px;
    line-height: 1.2;
    color: #222222;
  }
`;
