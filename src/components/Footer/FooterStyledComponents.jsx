import styled from 'styled-components';
export const FooterTag = styled.footer`
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: white;
`;
export const FooterContainer = styled.div`
  height: 100%;
  background-color: white;

  padding: 0px 8px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 374px) {
    padding: 0px 16px;
    max-width: 375px;
  }
  @media screen and (min-width: 1439px) {
    padding: 0px 112px;
    max-width: 1440px;
  }
`;

export const FooterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const FooterListItem = styled.li`
  flex-basis: 20%;
`;
export const FooterListItemLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 7.5px 5px 6px 5px;
`;
export const FooterListItemSvg = styled.svg``;
export const FooterListItemText = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  /* identical to box height */

  text-align: center;

  /* second */

  color: #575757;
`;
export const FooterListItemTextActive = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  /* identical to box height */

  text-align: center;

  /* second */

  color: #0072db;
`;
