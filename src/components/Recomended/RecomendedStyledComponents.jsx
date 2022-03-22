import styled from 'styled-components';
export const SeectionRecomended = styled.section`
  padding-top: 26px;
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
    padding: 112px;
    max-width: 1440px;
  }
`;
export const RecomendedTitle = styled.h1`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;

  color: #222222;
`;
export const RecomendedList = styled.ul`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(168px, auto);
  grid-column-gap: 4px;
  grid-row-gap: 8px;
`;
export const RecomendedListItem = styled.li`
  max-width: 168px;
`;

export const RecomendedListItemImg = styled.img`
  max-width: 168px;
`;
export const RecomendedListItemDescription = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: flex-start;
`;
export const RecomendedListItemDescriptionText = styled.div`
  max-width: 141px;
`;
export const RecomendedListItemDescriptionHouse = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 1.2;

  /* main */

  color: #222222;
`;
export const RecomendedListItemDescriptionPrice = styled.p`
  margin-top: 4px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.2;

  /* main */

  color: #222222;
`;
export const RecomendedListItemDescriptionStoke = styled.div`
  margin-top: 4px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const RecomendedListItemDescriptionOldPrice = styled.p`
  position: relative;
  font-weight: 500;
  font-size: 11.5px;
  line-height: 1.2;

  /* main */

  color: #222222;
  ::after {
    content: '';
    display: block;
    position: absolute;
    height: 1px;
    width: 76px;
    bottom: 8px;
    background-color: #222222;
  }
`;
export const RecomendedListItemDescriptionsNewPrice = styled.p`
  font-weight: 500;
  font-size: 11.5px;
  line-height: 1.2;

  /* btn */

  color: #0072db;
`;
export const RecomendedListItemDescriptionLocation = styled.p`
  margin-top: 5px;
  font-weight: 300;
  font-size: 10px;
  line-height: 1.2;

  /* main */

  color: #222222;
`;
export const RecomendedListItemDescriptionRoom = styled.p`
  margin-top: 4px;
  font-weight: 300;
  font-size: 10px;
  line-height: 1.2;
  /* identical to box height */

  /* main */

  color: #222222;
`;
export const RecomendedListItemDescriptionButton = styled.button`
  margin-left: 8.5px;
`;
export const RecomendedListItemDescriptionSvg = styled.svg``;
