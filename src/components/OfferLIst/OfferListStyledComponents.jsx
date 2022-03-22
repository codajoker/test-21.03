import styled from 'styled-components';

export const SeectionOfferList = styled.section`
  padding-top: 16px;
`;
export const OfferListContainer = styled.div`
  height: 100%;
  padding: 0px 8px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  @media screen and (min-width: 374px) {
    padding: 0px 2px;
    max-width: 375px;
  }
  @media screen and (min-width: 1439px) {
    padding: 0px 112px;
    max-width: 1440px;
  }
`;
export const OfferListItem = styled.div`
  padding-left: 12px;
`;

export const OfferListItemWrapper = styled.div`
  padding: 10px 20px 8px 20px;
  border: 1px solid #ececec;
  border-radius: 4px;
`;

export const OfferListItemButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const OfferListItemImage = styled.svg``;
export const OfferListItemText = styled.p`
  margin-top: 8px;
  font-weight: 300;
  font-size: 10px;
  line-height: 1.2;

  color: #222222;
`;
