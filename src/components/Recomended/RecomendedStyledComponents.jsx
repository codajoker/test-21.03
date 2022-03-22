import styled from 'styled-components';
export const SeectionRecomended = styled.section`
  padding-top: 26px;
  @media screen and (min-width: 1439px) {
    padding-top: 49px;
  }
`;
export const RecomendedContainer = styled.div`
  height: 100%;
  padding: 0px 8px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  @media screen and (min-width: 374px) {
    padding: 0px 16px;
    max-width: 375px;
  }
  @media screen and (min-width: 1439px) {
    padding: 0px 112px;
    max-width: 1440px;
  }
`;
export const RecomendedTitle = styled.h1`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;

  color: #222222;
  @media screen and (min-width: 1439px) {
    font-size: 24px;
  }
`;
export const RecomendedList = styled.ul`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(168px, auto);
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  @media screen and (min-width: 1439px) {
    margin-top: 32px;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(342px, auto);
    grid-column-gap: 32px;
    grid-row-gap: 20px;
  }
`;
export const RecomendedListItem = styled.li``;
export const RecomendedListItemLink = styled.a``;

export const RecomendedListItemImg = styled.img``;
export const RecomendedListItemNotImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 384px;
  height: 222px;
  background: #f4f4f4;
  /* lines */

  border: 1px solid #e6ecf5;
  border-radius: 8px;
`;
export const RecomendedListItemNotImgSvg = styled.svg``;
export const RecomendedListItemNotImgText = styled.p`
  margin-top: 12px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;

  color: #dbdbdc;
`;

export const RecomendedListItemDescription = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (min-width: 1439px) {
    margin-top: 19px;
  }
`;
export const RecomendedListItemDescriptionText = styled.div``;
export const RecomendedListItemDescriptionHouse = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 1.2;

  /* main */

  color: #222222;
  @media screen and (min-width: 1439px) {
    margin-top: 8px;
    font-weight: 500;
    font-size: 20px;
  }
`;
export const RecomendedListItemDescriptionPrice = styled.p`
  margin-top: 4px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.2;

  /* main */

  color: #222222;
  @media screen and (min-width: 1439px) {
    margin-top: 0;
    font-size: 16px;
  }
`;
export const RecomendedListItemDescriptionStoke = styled.div`
  margin-top: 4px;

  display: flex;
  align-items: center;
  @media screen and (min-width: 1439px) {
    margin-top: 0;
  }
`;
export const RecomendedListItemDescriptionOldPrice = styled.p`
  position: relative;
  font-weight: 500;
  font-size: 11.5px;
  line-height: 1.2;

  color: #222222;
  @media screen and (min-width: 1439px) {
    font-size: 16px;
  }
  ::after {
    content: '';
    display: block;
    position: absolute;
    height: 1px;
    width: 76px;
    bottom: 8px;
    background-color: #222222;
    @media screen and (min-width: 1439px) {
      height: 2px;
      width: 101px;
    }
  }
`;
export const RecomendedListItemDescriptionsNewPrice = styled.p`
  margin-right: 4px;

  font-weight: 500;
  font-size: 11.5px;
  line-height: 1.2;

  /* btn */

  color: #0072db;
  @media screen and (min-width: 1439px) {
    margin-right: 12px;

    font-size: 16px;
  }
`;
export const RecomendedListItemDescriptionLocation = styled.p`
  margin-top: 5px;
  font-weight: 300;
  font-size: 10px;
  line-height: 1.2;

  /* main */

  color: #222222;
  @media screen and (min-width: 1439px) {
    margin-top: 8px;

    font-size: 14px;
  }
`;
export const RecomendedListItemDescriptionRoom = styled.p`
  margin-top: 4px;
  font-weight: 300;
  font-size: 10px;
  line-height: 1.2;
  color: #222222;
  @media screen and (min-width: 1439px) {
    margin-top: 8px;

    font-size: 14px;
  }
`;
export const RecomendedListItemDescriptionButton = styled.button`
  margin-left: 8.5px;
`;
export const RecomendedListItemDescriptionSvg = styled.svg``;
