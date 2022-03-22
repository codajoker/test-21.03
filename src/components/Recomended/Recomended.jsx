import { useEffect, useState } from 'react';
import {
  SeectionRecomended,
  RecomendedContainer,
  RecomendedTitle,
  RecomendedList,
  RecomendedListItem,
  RecomendedListItemImg,
  RecomendedListItemDescriptionHouse,
  RecomendedListItemDescriptionPrice,
  RecomendedListItemDescriptionLocation,
  RecomendedListItemDescriptionRoom,
  RecomendedListItemDescription,
  RecomendedListItemDescriptionText,
  RecomendedListItemDescriptionButton,
  RecomendedListItemDescriptionSvg,
  RecomendedListItemDescriptionStoke,
  RecomendedListItemDescriptionOldPrice,
  RecomendedListItemDescriptionsNewPrice,
} from './RecomendedStyledComponents';
const Recomended = () => {
  const [matches, setMatches] = useState(
    window.matchMedia('(max-width: 1439px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(max-width: 1439px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);
  return (
    <SeectionRecomended>
      <RecomendedContainer>
        <RecomendedTitle>Рекомендации для вас</RecomendedTitle>
        <RecomendedList>
          {matches && (
            <>
              <RecomendedListItem>
                <RecomendedListItemImg
                  alt="House"
                  src={require('images/mobile/home_1.jpg')}
                ></RecomendedListItemImg>
                <RecomendedListItemDescription>
                  <RecomendedListItemDescriptionText>
                    {' '}
                    <RecomendedListItemDescriptionHouse>
                      1-к. квартира, 75 м², 3/6 эт.
                    </RecomendedListItemDescriptionHouse>
                    <RecomendedListItemDescriptionPrice>
                      от 8 000 ₽ за сутки
                    </RecomendedListItemDescriptionPrice>
                    <RecomendedListItemDescriptionLocation>
                      с. Эсто-Садок, ул. Горная Карусель, 6 р-н Адлерский
                    </RecomendedListItemDescriptionLocation>
                    <RecomendedListItemDescriptionRoom>
                      1 комната • 75 м²
                    </RecomendedListItemDescriptionRoom>
                  </RecomendedListItemDescriptionText>
                  <RecomendedListItemDescriptionButton type="button">
                    <RecomendedListItemDescriptionSvg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 32 32"
                    >
                      <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
                    </RecomendedListItemDescriptionSvg>
                  </RecomendedListItemDescriptionButton>
                </RecomendedListItemDescription>
              </RecomendedListItem>
              <RecomendedListItem>
                <RecomendedListItemImg
                  alt="House"
                  src={require('images/mobile/home_2.jpg')}
                ></RecomendedListItemImg>
                <RecomendedListItemDescription>
                  <RecomendedListItemDescriptionText>
                    {' '}
                    <RecomendedListItemDescriptionHouse>
                      Гостиница, 90 м²{' '}
                    </RecomendedListItemDescriptionHouse>
                    <RecomendedListItemDescriptionStoke>
                      <RecomendedListItemDescriptionsNewPrice>
                        3 100 000 ₽
                      </RecomendedListItemDescriptionsNewPrice>
                      <RecomendedListItemDescriptionOldPrice>
                        3 400 000 ₽
                      </RecomendedListItemDescriptionOldPrice>
                    </RecomendedListItemDescriptionStoke>
                    <RecomendedListItemDescriptionLocation>
                      жилой район Адлер, ул. Просвещения, 74Б{' '}
                    </RecomendedListItemDescriptionLocation>
                    <RecomendedListItemDescriptionRoom>
                      90 м²{' '}
                    </RecomendedListItemDescriptionRoom>
                  </RecomendedListItemDescriptionText>
                  <RecomendedListItemDescriptionButton type="button">
                    <RecomendedListItemDescriptionSvg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 32 32"
                    >
                      <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
                    </RecomendedListItemDescriptionSvg>
                  </RecomendedListItemDescriptionButton>
                </RecomendedListItemDescription>
              </RecomendedListItem>
              <RecomendedListItem>
                <RecomendedListItemImg
                  alt="House"
                  src={require('images/mobile/home_1.jpg')}
                ></RecomendedListItemImg>
                <RecomendedListItemDescription>
                  <RecomendedListItemDescriptionText>
                    {' '}
                    <RecomendedListItemDescriptionHouse>
                      1-к. квартира, 75 м², 3/6 эт.
                    </RecomendedListItemDescriptionHouse>
                    <RecomendedListItemDescriptionPrice>
                      от 8 000 ₽ за сутки
                    </RecomendedListItemDescriptionPrice>
                    <RecomendedListItemDescriptionLocation>
                      с. Эсто-Садок, ул. Горная Карусель, 6 р-н Адлерский
                    </RecomendedListItemDescriptionLocation>
                    <RecomendedListItemDescriptionRoom>
                      1 комната • 75 м²
                    </RecomendedListItemDescriptionRoom>
                  </RecomendedListItemDescriptionText>
                  <RecomendedListItemDescriptionButton type="button">
                    <RecomendedListItemDescriptionSvg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 32 32"
                    >
                      <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
                    </RecomendedListItemDescriptionSvg>
                  </RecomendedListItemDescriptionButton>
                </RecomendedListItemDescription>
              </RecomendedListItem>
              <RecomendedListItem>
                <RecomendedListItemImg
                  alt="House"
                  src={require('images/mobile/home_2.jpg')}
                ></RecomendedListItemImg>
                <RecomendedListItemDescription>
                  <RecomendedListItemDescriptionText>
                    {' '}
                    <RecomendedListItemDescriptionHouse>
                      Гостиница, 90 м²{' '}
                    </RecomendedListItemDescriptionHouse>
                    <RecomendedListItemDescriptionStoke>
                      <RecomendedListItemDescriptionsNewPrice>
                        3 100 000 ₽
                      </RecomendedListItemDescriptionsNewPrice>
                      <RecomendedListItemDescriptionOldPrice>
                        3 400 000 ₽
                      </RecomendedListItemDescriptionOldPrice>
                    </RecomendedListItemDescriptionStoke>
                    <RecomendedListItemDescriptionLocation>
                      жилой район Адлер, ул. Просвещения, 74Б{' '}
                    </RecomendedListItemDescriptionLocation>
                    <RecomendedListItemDescriptionRoom>
                      90 м²{' '}
                    </RecomendedListItemDescriptionRoom>
                  </RecomendedListItemDescriptionText>
                  <RecomendedListItemDescriptionButton type="button">
                    <RecomendedListItemDescriptionSvg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 32 32"
                    >
                      <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
                    </RecomendedListItemDescriptionSvg>
                  </RecomendedListItemDescriptionButton>
                </RecomendedListItemDescription>
              </RecomendedListItem>
              <RecomendedListItem>
                <RecomendedListItemImg
                  alt="House"
                  src={require('images/mobile/home_1.jpg')}
                ></RecomendedListItemImg>
                <RecomendedListItemDescription>
                  <RecomendedListItemDescriptionText>
                    {' '}
                    <RecomendedListItemDescriptionHouse>
                      1-к. квартира, 75 м², 3/6 эт.
                    </RecomendedListItemDescriptionHouse>
                    <RecomendedListItemDescriptionPrice>
                      от 8 000 ₽ за сутки
                    </RecomendedListItemDescriptionPrice>
                    <RecomendedListItemDescriptionLocation>
                      с. Эсто-Садок, ул. Горная Карусель, 6 р-н Адлерский
                    </RecomendedListItemDescriptionLocation>
                    <RecomendedListItemDescriptionRoom>
                      1 комната • 75 м²
                    </RecomendedListItemDescriptionRoom>
                  </RecomendedListItemDescriptionText>
                  <RecomendedListItemDescriptionButton type="button">
                    <RecomendedListItemDescriptionSvg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 32 32"
                    >
                      <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
                    </RecomendedListItemDescriptionSvg>
                  </RecomendedListItemDescriptionButton>
                </RecomendedListItemDescription>
              </RecomendedListItem>
              <RecomendedListItem>
                <RecomendedListItemImg
                  alt="House"
                  src={require('images/mobile/home_2.jpg')}
                ></RecomendedListItemImg>
                <RecomendedListItemDescription>
                  <RecomendedListItemDescriptionText>
                    {' '}
                    <RecomendedListItemDescriptionHouse>
                      Гостиница, 90 м²{' '}
                    </RecomendedListItemDescriptionHouse>
                    <RecomendedListItemDescriptionStoke>
                      <RecomendedListItemDescriptionsNewPrice>
                        3 100 000 ₽
                      </RecomendedListItemDescriptionsNewPrice>
                      <RecomendedListItemDescriptionOldPrice>
                        3 400 000 ₽
                      </RecomendedListItemDescriptionOldPrice>
                    </RecomendedListItemDescriptionStoke>
                    <RecomendedListItemDescriptionLocation>
                      жилой район Адлер, ул. Просвещения, 74Б{' '}
                    </RecomendedListItemDescriptionLocation>
                    <RecomendedListItemDescriptionRoom>
                      90 м²{' '}
                    </RecomendedListItemDescriptionRoom>
                  </RecomendedListItemDescriptionText>
                  <RecomendedListItemDescriptionButton type="button">
                    <RecomendedListItemDescriptionSvg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 32 32"
                    >
                      <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
                    </RecomendedListItemDescriptionSvg>
                  </RecomendedListItemDescriptionButton>
                </RecomendedListItemDescription>
              </RecomendedListItem>
              <RecomendedListItem>
                <RecomendedListItemImg
                  alt="House"
                  src={require('images/mobile/home_1.jpg')}
                ></RecomendedListItemImg>
                <RecomendedListItemDescription>
                  <RecomendedListItemDescriptionText>
                    {' '}
                    <RecomendedListItemDescriptionHouse>
                      1-к. квартира, 75 м², 3/6 эт.
                    </RecomendedListItemDescriptionHouse>
                    <RecomendedListItemDescriptionPrice>
                      от 8 000 ₽ за сутки
                    </RecomendedListItemDescriptionPrice>
                    <RecomendedListItemDescriptionLocation>
                      с. Эсто-Садок, ул. Горная Карусель, 6 р-н Адлерский
                    </RecomendedListItemDescriptionLocation>
                    <RecomendedListItemDescriptionRoom>
                      1 комната • 75 м²
                    </RecomendedListItemDescriptionRoom>
                  </RecomendedListItemDescriptionText>
                  <RecomendedListItemDescriptionButton type="button">
                    <RecomendedListItemDescriptionSvg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 32 32"
                    >
                      <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
                    </RecomendedListItemDescriptionSvg>
                  </RecomendedListItemDescriptionButton>
                </RecomendedListItemDescription>
              </RecomendedListItem>
              <RecomendedListItem>
                <RecomendedListItemImg
                  alt="House"
                  src={require('images/mobile/home_2.jpg')}
                ></RecomendedListItemImg>
                <RecomendedListItemDescription>
                  <RecomendedListItemDescriptionText>
                    {' '}
                    <RecomendedListItemDescriptionHouse>
                      Гостиница, 90 м²{' '}
                    </RecomendedListItemDescriptionHouse>
                    <RecomendedListItemDescriptionStoke>
                      <RecomendedListItemDescriptionsNewPrice>
                        3 100 000 ₽
                      </RecomendedListItemDescriptionsNewPrice>
                      <RecomendedListItemDescriptionOldPrice>
                        3 400 000 ₽
                      </RecomendedListItemDescriptionOldPrice>
                    </RecomendedListItemDescriptionStoke>
                    <RecomendedListItemDescriptionLocation>
                      жилой район Адлер, ул. Просвещения, 74Б{' '}
                    </RecomendedListItemDescriptionLocation>
                    <RecomendedListItemDescriptionRoom>
                      90 м²{' '}
                    </RecomendedListItemDescriptionRoom>
                  </RecomendedListItemDescriptionText>
                  <RecomendedListItemDescriptionButton type="button">
                    <RecomendedListItemDescriptionSvg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 32 32"
                    >
                      <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
                    </RecomendedListItemDescriptionSvg>
                  </RecomendedListItemDescriptionButton>
                </RecomendedListItemDescription>
              </RecomendedListItem>
              <RecomendedListItem>
                <RecomendedListItemImg
                  alt="House"
                  src={require('images/mobile/home_1.jpg')}
                ></RecomendedListItemImg>
                <RecomendedListItemDescription>
                  <RecomendedListItemDescriptionText>
                    {' '}
                    <RecomendedListItemDescriptionHouse>
                      1-к. квартира, 75 м², 3/6 эт.
                    </RecomendedListItemDescriptionHouse>
                    <RecomendedListItemDescriptionPrice>
                      от 8 000 ₽ за сутки
                    </RecomendedListItemDescriptionPrice>
                    <RecomendedListItemDescriptionLocation>
                      с. Эсто-Садок, ул. Горная Карусель, 6 р-н Адлерский
                    </RecomendedListItemDescriptionLocation>
                    <RecomendedListItemDescriptionRoom>
                      1 комната • 75 м²
                    </RecomendedListItemDescriptionRoom>
                  </RecomendedListItemDescriptionText>
                  <RecomendedListItemDescriptionButton type="button">
                    <RecomendedListItemDescriptionSvg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 32 32"
                    >
                      <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
                    </RecomendedListItemDescriptionSvg>
                  </RecomendedListItemDescriptionButton>
                </RecomendedListItemDescription>
              </RecomendedListItem>
              <RecomendedListItem>
                <RecomendedListItemImg
                  alt="House"
                  src={require('images/mobile/home_2.jpg')}
                ></RecomendedListItemImg>
                <RecomendedListItemDescription>
                  <RecomendedListItemDescriptionText>
                    {' '}
                    <RecomendedListItemDescriptionHouse>
                      Гостиница, 90 м²{' '}
                    </RecomendedListItemDescriptionHouse>
                    <RecomendedListItemDescriptionStoke>
                      <RecomendedListItemDescriptionsNewPrice>
                        3 100 000 ₽
                      </RecomendedListItemDescriptionsNewPrice>
                      <RecomendedListItemDescriptionOldPrice>
                        3 400 000 ₽
                      </RecomendedListItemDescriptionOldPrice>
                    </RecomendedListItemDescriptionStoke>
                    <RecomendedListItemDescriptionLocation>
                      жилой район Адлер, ул. Просвещения, 74Б{' '}
                    </RecomendedListItemDescriptionLocation>
                    <RecomendedListItemDescriptionRoom>
                      90 м²{' '}
                    </RecomendedListItemDescriptionRoom>
                  </RecomendedListItemDescriptionText>
                  <RecomendedListItemDescriptionButton type="button">
                    <RecomendedListItemDescriptionSvg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 32 32"
                    >
                      <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
                    </RecomendedListItemDescriptionSvg>
                  </RecomendedListItemDescriptionButton>
                </RecomendedListItemDescription>
              </RecomendedListItem>
            </>
          )}
        </RecomendedList>
      </RecomendedContainer>
    </SeectionRecomended>
  );
};

export default Recomended;
