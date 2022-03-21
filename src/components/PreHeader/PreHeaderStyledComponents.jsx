import styled from 'styled-components';
export const SeectionPreHeader = styled.section`
  display: flex;
  align-items: center;
  padding-top: 21px;
`;
export const PreHeaderContainer = styled.div`
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

export const PreHeaderTime = styled.img`
  margin-left: 22px;
  width: 37px;
  height: 17px;
`;
export const PreHeaderIndicators = styled.svg`
  display: block;
  right: 0;
  margin-left: auto;
`;
