import {
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
  RecomendedListItemLink,
  RecomendedListItemNotImg,
  RecomendedListItemNotImgSvg,
  RecomendedListItemNotImgText,
} from './RecomendedStyledComponents';

const RecomendedMarkupDesktope = () => {
  return (
    <>
      {' '}
      <RecomendedListItem>
        <RecomendedListItemLink href="#">
          <RecomendedListItemImg
            alt="House"
            src={require('images/desktop/home-1@2x.jpg')}
          ></RecomendedListItemImg>{' '}
        </RecomendedListItemLink>

        <RecomendedListItemDescription>
          <RecomendedListItemDescriptionText>
            {' '}
            <RecomendedListItemDescriptionPrice>
              от 8 000 ₽ за сутки
            </RecomendedListItemDescriptionPrice>
            <RecomendedListItemDescriptionHouse>
              1-к. квартира, 75 м², 3/6 эт.
            </RecomendedListItemDescriptionHouse>
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
              width="24"
              height="24"
              viewBox="0 0 32 32"
            >
              <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
            </RecomendedListItemDescriptionSvg>
          </RecomendedListItemDescriptionButton>
        </RecomendedListItemDescription>
      </RecomendedListItem>
      <RecomendedListItem>
        <RecomendedListItemLink href="#">
          {' '}
          <RecomendedListItemImg
            alt="House"
            src={require('images/desktop/home-2@2x.jpg')}
          ></RecomendedListItemImg>{' '}
        </RecomendedListItemLink>

        <RecomendedListItemDescription>
          <RecomendedListItemDescriptionText>
            {' '}
            <RecomendedListItemDescriptionStoke>
              <RecomendedListItemDescriptionsNewPrice>
                3 100 000 ₽
              </RecomendedListItemDescriptionsNewPrice>
              <RecomendedListItemDescriptionOldPrice>
                3 400 000 ₽
              </RecomendedListItemDescriptionOldPrice>
            </RecomendedListItemDescriptionStoke>
            <RecomendedListItemDescriptionHouse>
              Гостиница, 90 м²{' '}
            </RecomendedListItemDescriptionHouse>
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
              width="24"
              height="24"
              viewBox="0 0 32 32"
            >
              <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
            </RecomendedListItemDescriptionSvg>
          </RecomendedListItemDescriptionButton>
        </RecomendedListItemDescription>
      </RecomendedListItem>
      <RecomendedListItem>
        <RecomendedListItemLink href="#">
          <RecomendedListItemImg
            alt="House"
            src={require('images/desktop/home-3@2x.jpg')}
          ></RecomendedListItemImg>{' '}
        </RecomendedListItemLink>

        <RecomendedListItemDescription>
          <RecomendedListItemDescriptionText>
            {' '}
            <RecomendedListItemDescriptionPrice>
              7 887 300 ₽{' '}
            </RecomendedListItemDescriptionPrice>
            <RecomendedListItemDescriptionHouse>
              1-к. квартира, 75 м², 3/6 эт.
            </RecomendedListItemDescriptionHouse>
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
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M21.6328 6.64688C21.3187 5.91946 20.8657 5.26029 20.2992 4.70625C19.7323 4.15056 19.064 3.70896 18.3305 3.40547C17.5699 3.08952 16.7541 2.92779 15.9305 2.92969C14.775 2.92969 13.6477 3.24609 12.668 3.84375C12.4336 3.98672 12.2109 4.14375 12 4.31485C11.7891 4.14375 11.5664 3.98672 11.332 3.84375C10.3523 3.24609 9.225 2.92969 8.06953 2.92969C7.2375 2.92969 6.43125 3.08906 5.66953 3.40547C4.93359 3.71016 4.27031 4.14844 3.70078 4.70625C3.13359 5.25966 2.6805 5.91899 2.36719 6.64688C2.04141 7.40391 1.875 8.20781 1.875 9.03516C1.875 9.81563 2.03438 10.6289 2.35078 11.4563C2.61563 12.1477 2.99531 12.8648 3.48047 13.5891C4.24922 14.7352 5.30625 15.9305 6.61875 17.1422C8.79375 19.1508 10.9477 20.5383 11.0391 20.5945L11.5945 20.9508C11.8406 21.1078 12.157 21.1078 12.4031 20.9508L12.9586 20.5945C13.05 20.5359 15.2016 19.1508 17.3789 17.1422C18.6914 15.9305 19.7484 14.7352 20.5172 13.5891C21.0023 12.8648 21.3844 12.1477 21.6469 11.4563C21.9633 10.6289 22.1227 9.81563 22.1227 9.03516C22.125 8.20781 21.9586 7.40391 21.6328 6.64688Z"
                fill="#0072DB"
              />
            </RecomendedListItemDescriptionSvg>
          </RecomendedListItemDescriptionButton>
        </RecomendedListItemDescription>
      </RecomendedListItem>
      <RecomendedListItem>
        <RecomendedListItemLink href="#">
          {' '}
          <RecomendedListItemNotImg>
            <RecomendedListItemNotImgSvg
              width="56"
              height="56"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#dbdbdc"
                d="M23.517 29.193c0 0.689-0.559 1.248-1.248 1.248h-17.279c-2.752 0-4.99-2.239-4.99-4.99v-14.347c0-1.053 0.324-2.059 0.937-2.912 0.402-0.559 1.182-0.686 1.741-0.284s0.687 1.182 0.284 1.741c-0.306 0.425-0.468 0.928-0.468 1.455v14.347c0 1.376 1.119 2.495 2.495 2.495h17.279c0.689 0 1.248 0.559 1.248 1.248zM9.79 15.301c-0.68-0.117-1.324 0.338-1.442 1.017-0.076 0.438-0.114 0.887-0.114 1.335 0 4.299 3.498 7.797 7.797 7.797 0.512 0 1.023-0.050 1.521-0.148 0.676-0.134 1.115-0.79 0.982-1.466s-0.79-1.116-1.466-0.981c-0.339 0.067-0.687 0.101-1.036 0.101-2.924 0-5.302-2.378-5.302-5.302 0-0.306 0.026-0.612 0.078-0.91 0.117-0.679-0.338-1.324-1.017-1.442zM31.635 31.572c-0.244 0.244-0.563 0.366-0.882 0.366s-0.639-0.122-0.882-0.366l-29.442-29.442c-0.487-0.487-0.487-1.277 0-1.764s1.277-0.487 1.764 0l5.46 5.46c0.169-0.14 0.301-0.325 0.377-0.536l0.432-1.196c0.534-1.478 1.948-2.471 3.52-2.471h7.97c1.603 0 3.027 1.020 3.543 2.537l0.377 1.109c0.172 0.506 0.647 0.845 1.181 0.845h1.894c2.752 0 4.99 2.239 4.99 4.99v8.109c0 0.689-0.558 1.248-1.248 1.248s-1.248-0.558-1.248-1.248v-8.109c0-1.376-1.119-2.495-2.495-2.495h-1.894c-1.603 0-3.027-1.019-3.543-2.537l-0.378-1.109c-0.172-0.506-0.647-0.846-1.181-0.846h-7.97c-0.524 0-0.996 0.331-1.174 0.824l-0.432 1.196c-0.202 0.56-0.534 1.057-0.958 1.455l3.1 3.1c1.085-0.548 2.285-0.836 3.513-0.836 4.299 0 7.797 3.498 7.797 7.797 0 1.231-0.287 2.429-0.835 3.513l5.877 5.877c0.366-0.44 0.573-0.997 0.573-1.593 0-0.689 0.559-1.248 1.248-1.248s1.248 0.559 1.248 1.248c0 1.272-0.47 2.458-1.298 3.363l0.995 0.995c0.487 0.487 0.487 1.277 0 1.764zM14.426 12.599l6.659 6.659c0.163-0.515 0.248-1.055 0.248-1.605 0-2.924-2.378-5.302-5.302-5.302-0.549 0-1.090 0.085-1.605 0.248z"
              ></path>
            </RecomendedListItemNotImgSvg>
            <RecomendedListItemNotImgText>
              Фото отсутствует
            </RecomendedListItemNotImgText>
          </RecomendedListItemNotImg>{' '}
        </RecomendedListItemLink>

        <RecomendedListItemDescription>
          <RecomendedListItemDescriptionText>
            {' '}
            <RecomendedListItemDescriptionPrice>
              280 000 000 ₽{' '}
            </RecomendedListItemDescriptionPrice>
            <RecomendedListItemDescriptionHouse>
              Общепит, 800 м²{' '}
            </RecomendedListItemDescriptionHouse>
            <RecomendedListItemDescriptionLocation>
              Краснодарский край, Сочи, Курортный пр-т, 47/3 р-н Центральный{' '}
            </RecomendedListItemDescriptionLocation>
            <RecomendedListItemDescriptionRoom>
              800 м²{' '}
            </RecomendedListItemDescriptionRoom>
          </RecomendedListItemDescriptionText>
          <RecomendedListItemDescriptionButton type="button">
            <RecomendedListItemDescriptionSvg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 32 32"
            >
              <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
            </RecomendedListItemDescriptionSvg>
          </RecomendedListItemDescriptionButton>
        </RecomendedListItemDescription>
      </RecomendedListItem>
      <RecomendedListItem>
        <RecomendedListItemLink href="#">
          <RecomendedListItemImg
            alt="House"
            src={require('images/desktop/home-1@2x.jpg')}
          ></RecomendedListItemImg>{' '}
        </RecomendedListItemLink>

        <RecomendedListItemDescription>
          <RecomendedListItemDescriptionText>
            {' '}
            <RecomendedListItemDescriptionPrice>
              от 8 000 ₽ за сутки
            </RecomendedListItemDescriptionPrice>
            <RecomendedListItemDescriptionHouse>
              1-к. квартира, 75 м², 3/6 эт.
            </RecomendedListItemDescriptionHouse>
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
              width="24"
              height="24"
              viewBox="0 0 32 32"
            >
              <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
            </RecomendedListItemDescriptionSvg>
          </RecomendedListItemDescriptionButton>
        </RecomendedListItemDescription>
      </RecomendedListItem>
      <RecomendedListItem>
        <RecomendedListItemLink href="#">
          {' '}
          <RecomendedListItemImg
            alt="House"
            src={require('images/desktop/home-2@2x.jpg')}
          ></RecomendedListItemImg>{' '}
        </RecomendedListItemLink>

        <RecomendedListItemDescription>
          <RecomendedListItemDescriptionText>
            {' '}
            <RecomendedListItemDescriptionStoke>
              <RecomendedListItemDescriptionsNewPrice>
                3 100 000 ₽
              </RecomendedListItemDescriptionsNewPrice>
              <RecomendedListItemDescriptionOldPrice>
                3 400 000 ₽
              </RecomendedListItemDescriptionOldPrice>
            </RecomendedListItemDescriptionStoke>
            <RecomendedListItemDescriptionHouse>
              Гостиница, 90 м²{' '}
            </RecomendedListItemDescriptionHouse>
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
              width="24"
              height="24"
              viewBox="0 0 32 32"
            >
              <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
            </RecomendedListItemDescriptionSvg>
          </RecomendedListItemDescriptionButton>
        </RecomendedListItemDescription>
      </RecomendedListItem>{' '}
      <RecomendedListItem>
        <RecomendedListItemLink href="#">
          <RecomendedListItemImg
            alt="House"
            src={require('images/desktop/home-1@2x.jpg')}
          ></RecomendedListItemImg>{' '}
        </RecomendedListItemLink>

        <RecomendedListItemDescription>
          <RecomendedListItemDescriptionText>
            {' '}
            <RecomendedListItemDescriptionPrice>
              от 8 000 ₽ за сутки
            </RecomendedListItemDescriptionPrice>
            <RecomendedListItemDescriptionHouse>
              1-к. квартира, 75 м², 3/6 эт.
            </RecomendedListItemDescriptionHouse>
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
              width="24"
              height="24"
              viewBox="0 0 32 32"
            >
              <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
            </RecomendedListItemDescriptionSvg>
          </RecomendedListItemDescriptionButton>
        </RecomendedListItemDescription>
      </RecomendedListItem>
      <RecomendedListItem>
        <RecomendedListItemLink href="#">
          {' '}
          <RecomendedListItemImg
            alt="House"
            src={require('images/desktop/home-2@2x.jpg')}
          ></RecomendedListItemImg>{' '}
        </RecomendedListItemLink>

        <RecomendedListItemDescription>
          <RecomendedListItemDescriptionText>
            {' '}
            <RecomendedListItemDescriptionStoke>
              <RecomendedListItemDescriptionsNewPrice>
                3 100 000 ₽
              </RecomendedListItemDescriptionsNewPrice>
              <RecomendedListItemDescriptionOldPrice>
                3 400 000 ₽
              </RecomendedListItemDescriptionOldPrice>
            </RecomendedListItemDescriptionStoke>
            <RecomendedListItemDescriptionHouse>
              Гостиница, 90 м²{' '}
            </RecomendedListItemDescriptionHouse>
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
              width="24"
              height="24"
              viewBox="0 0 32 32"
            >
              <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
            </RecomendedListItemDescriptionSvg>
          </RecomendedListItemDescriptionButton>
        </RecomendedListItemDescription>
      </RecomendedListItem>
      <RecomendedListItem>
        <RecomendedListItemLink href="#">
          <RecomendedListItemImg
            alt="House"
            src={require('images/desktop/home-3@2x.jpg')}
          ></RecomendedListItemImg>{' '}
        </RecomendedListItemLink>

        <RecomendedListItemDescription>
          <RecomendedListItemDescriptionText>
            {' '}
            <RecomendedListItemDescriptionPrice>
              7 887 300 ₽{' '}
            </RecomendedListItemDescriptionPrice>
            <RecomendedListItemDescriptionHouse>
              1-к. квартира, 75 м², 3/6 эт.
            </RecomendedListItemDescriptionHouse>
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
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M21.6328 6.64688C21.3187 5.91946 20.8657 5.26029 20.2992 4.70625C19.7323 4.15056 19.064 3.70896 18.3305 3.40547C17.5699 3.08952 16.7541 2.92779 15.9305 2.92969C14.775 2.92969 13.6477 3.24609 12.668 3.84375C12.4336 3.98672 12.2109 4.14375 12 4.31485C11.7891 4.14375 11.5664 3.98672 11.332 3.84375C10.3523 3.24609 9.225 2.92969 8.06953 2.92969C7.2375 2.92969 6.43125 3.08906 5.66953 3.40547C4.93359 3.71016 4.27031 4.14844 3.70078 4.70625C3.13359 5.25966 2.6805 5.91899 2.36719 6.64688C2.04141 7.40391 1.875 8.20781 1.875 9.03516C1.875 9.81563 2.03438 10.6289 2.35078 11.4563C2.61563 12.1477 2.99531 12.8648 3.48047 13.5891C4.24922 14.7352 5.30625 15.9305 6.61875 17.1422C8.79375 19.1508 10.9477 20.5383 11.0391 20.5945L11.5945 20.9508C11.8406 21.1078 12.157 21.1078 12.4031 20.9508L12.9586 20.5945C13.05 20.5359 15.2016 19.1508 17.3789 17.1422C18.6914 15.9305 19.7484 14.7352 20.5172 13.5891C21.0023 12.8648 21.3844 12.1477 21.6469 11.4563C21.9633 10.6289 22.1227 9.81563 22.1227 9.03516C22.125 8.20781 21.9586 7.40391 21.6328 6.64688Z"
                fill="#0072DB"
              />
            </RecomendedListItemDescriptionSvg>
          </RecomendedListItemDescriptionButton>
        </RecomendedListItemDescription>
      </RecomendedListItem>
      <RecomendedListItem>
        <RecomendedListItemLink href="#">
          {' '}
          <RecomendedListItemNotImg>
            <RecomendedListItemNotImgSvg
              width="56"
              height="56"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#dbdbdc"
                d="M23.517 29.193c0 0.689-0.559 1.248-1.248 1.248h-17.279c-2.752 0-4.99-2.239-4.99-4.99v-14.347c0-1.053 0.324-2.059 0.937-2.912 0.402-0.559 1.182-0.686 1.741-0.284s0.687 1.182 0.284 1.741c-0.306 0.425-0.468 0.928-0.468 1.455v14.347c0 1.376 1.119 2.495 2.495 2.495h17.279c0.689 0 1.248 0.559 1.248 1.248zM9.79 15.301c-0.68-0.117-1.324 0.338-1.442 1.017-0.076 0.438-0.114 0.887-0.114 1.335 0 4.299 3.498 7.797 7.797 7.797 0.512 0 1.023-0.050 1.521-0.148 0.676-0.134 1.115-0.79 0.982-1.466s-0.79-1.116-1.466-0.981c-0.339 0.067-0.687 0.101-1.036 0.101-2.924 0-5.302-2.378-5.302-5.302 0-0.306 0.026-0.612 0.078-0.91 0.117-0.679-0.338-1.324-1.017-1.442zM31.635 31.572c-0.244 0.244-0.563 0.366-0.882 0.366s-0.639-0.122-0.882-0.366l-29.442-29.442c-0.487-0.487-0.487-1.277 0-1.764s1.277-0.487 1.764 0l5.46 5.46c0.169-0.14 0.301-0.325 0.377-0.536l0.432-1.196c0.534-1.478 1.948-2.471 3.52-2.471h7.97c1.603 0 3.027 1.020 3.543 2.537l0.377 1.109c0.172 0.506 0.647 0.845 1.181 0.845h1.894c2.752 0 4.99 2.239 4.99 4.99v8.109c0 0.689-0.558 1.248-1.248 1.248s-1.248-0.558-1.248-1.248v-8.109c0-1.376-1.119-2.495-2.495-2.495h-1.894c-1.603 0-3.027-1.019-3.543-2.537l-0.378-1.109c-0.172-0.506-0.647-0.846-1.181-0.846h-7.97c-0.524 0-0.996 0.331-1.174 0.824l-0.432 1.196c-0.202 0.56-0.534 1.057-0.958 1.455l3.1 3.1c1.085-0.548 2.285-0.836 3.513-0.836 4.299 0 7.797 3.498 7.797 7.797 0 1.231-0.287 2.429-0.835 3.513l5.877 5.877c0.366-0.44 0.573-0.997 0.573-1.593 0-0.689 0.559-1.248 1.248-1.248s1.248 0.559 1.248 1.248c0 1.272-0.47 2.458-1.298 3.363l0.995 0.995c0.487 0.487 0.487 1.277 0 1.764zM14.426 12.599l6.659 6.659c0.163-0.515 0.248-1.055 0.248-1.605 0-2.924-2.378-5.302-5.302-5.302-0.549 0-1.090 0.085-1.605 0.248z"
              ></path>
            </RecomendedListItemNotImgSvg>
            <RecomendedListItemNotImgText>
              Фото отсутствует
            </RecomendedListItemNotImgText>
          </RecomendedListItemNotImg>{' '}
        </RecomendedListItemLink>

        <RecomendedListItemDescription>
          <RecomendedListItemDescriptionText>
            {' '}
            <RecomendedListItemDescriptionPrice>
              280 000 000 ₽{' '}
            </RecomendedListItemDescriptionPrice>
            <RecomendedListItemDescriptionHouse>
              Общепит, 800 м²{' '}
            </RecomendedListItemDescriptionHouse>
            <RecomendedListItemDescriptionLocation>
              Краснодарский край, Сочи, Курортный пр-т, 47/3 р-н Центральный{' '}
            </RecomendedListItemDescriptionLocation>
            <RecomendedListItemDescriptionRoom>
              800 м²{' '}
            </RecomendedListItemDescriptionRoom>
          </RecomendedListItemDescriptionText>
          <RecomendedListItemDescriptionButton type="button">
            <RecomendedListItemDescriptionSvg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 32 32"
            >
              <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
            </RecomendedListItemDescriptionSvg>
          </RecomendedListItemDescriptionButton>
        </RecomendedListItemDescription>
      </RecomendedListItem>
      <RecomendedListItem>
        <RecomendedListItemLink href="#">
          <RecomendedListItemImg
            alt="House"
            src={require('images/desktop/home-1@2x.jpg')}
          ></RecomendedListItemImg>{' '}
        </RecomendedListItemLink>

        <RecomendedListItemDescription>
          <RecomendedListItemDescriptionText>
            {' '}
            <RecomendedListItemDescriptionPrice>
              от 8 000 ₽ за сутки
            </RecomendedListItemDescriptionPrice>
            <RecomendedListItemDescriptionHouse>
              1-к. квартира, 75 м², 3/6 эт.
            </RecomendedListItemDescriptionHouse>
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
              width="24"
              height="24"
              viewBox="0 0 32 32"
            >
              <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
            </RecomendedListItemDescriptionSvg>
          </RecomendedListItemDescriptionButton>
        </RecomendedListItemDescription>
      </RecomendedListItem>
      <RecomendedListItem>
        <RecomendedListItemLink href="#">
          {' '}
          <RecomendedListItemImg
            alt="House"
            src={require('images/desktop/home-2@2x.jpg')}
          ></RecomendedListItemImg>{' '}
        </RecomendedListItemLink>

        <RecomendedListItemDescription>
          <RecomendedListItemDescriptionText>
            {' '}
            <RecomendedListItemDescriptionStoke>
              <RecomendedListItemDescriptionsNewPrice>
                3 100 000 ₽
              </RecomendedListItemDescriptionsNewPrice>
              <RecomendedListItemDescriptionOldPrice>
                3 400 000 ₽
              </RecomendedListItemDescriptionOldPrice>
            </RecomendedListItemDescriptionStoke>
            <RecomendedListItemDescriptionHouse>
              Гостиница, 90 м²{' '}
            </RecomendedListItemDescriptionHouse>
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
              width="24"
              height="24"
              viewBox="0 0 32 32"
            >
              <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
            </RecomendedListItemDescriptionSvg>
          </RecomendedListItemDescriptionButton>
        </RecomendedListItemDescription>
      </RecomendedListItem>
      <RecomendedListItem>
        <RecomendedListItemLink href="#">
          <RecomendedListItemImg
            alt="House"
            src={require('images/desktop/home-1@2x.jpg')}
          ></RecomendedListItemImg>{' '}
        </RecomendedListItemLink>

        <RecomendedListItemDescription>
          <RecomendedListItemDescriptionText>
            {' '}
            <RecomendedListItemDescriptionPrice>
              от 8 000 ₽ за сутки
            </RecomendedListItemDescriptionPrice>
            <RecomendedListItemDescriptionHouse>
              1-к. квартира, 75 м², 3/6 эт.
            </RecomendedListItemDescriptionHouse>
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
              width="24"
              height="24"
              viewBox="0 0 32 32"
            >
              <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
            </RecomendedListItemDescriptionSvg>
          </RecomendedListItemDescriptionButton>
        </RecomendedListItemDescription>
      </RecomendedListItem>
      <RecomendedListItem>
        <RecomendedListItemLink href="#">
          {' '}
          <RecomendedListItemImg
            alt="House"
            src={require('images/desktop/home-2@2x.jpg')}
          ></RecomendedListItemImg>{' '}
        </RecomendedListItemLink>

        <RecomendedListItemDescription>
          <RecomendedListItemDescriptionText>
            {' '}
            <RecomendedListItemDescriptionStoke>
              <RecomendedListItemDescriptionsNewPrice>
                3 100 000 ₽
              </RecomendedListItemDescriptionsNewPrice>
              <RecomendedListItemDescriptionOldPrice>
                3 400 000 ₽
              </RecomendedListItemDescriptionOldPrice>
            </RecomendedListItemDescriptionStoke>
            <RecomendedListItemDescriptionHouse>
              Гостиница, 90 м²{' '}
            </RecomendedListItemDescriptionHouse>
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
              width="24"
              height="24"
              viewBox="0 0 32 32"
            >
              <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
            </RecomendedListItemDescriptionSvg>
          </RecomendedListItemDescriptionButton>
        </RecomendedListItemDescription>
      </RecomendedListItem>
      <RecomendedListItem>
        <RecomendedListItemLink href="#">
          <RecomendedListItemImg
            alt="House"
            src={require('images/desktop/home-3@2x.jpg')}
          ></RecomendedListItemImg>{' '}
        </RecomendedListItemLink>

        <RecomendedListItemDescription>
          <RecomendedListItemDescriptionText>
            {' '}
            <RecomendedListItemDescriptionPrice>
              7 887 300 ₽{' '}
            </RecomendedListItemDescriptionPrice>
            <RecomendedListItemDescriptionHouse>
              1-к. квартира, 75 м², 3/6 эт.
            </RecomendedListItemDescriptionHouse>
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
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M21.6328 6.64688C21.3187 5.91946 20.8657 5.26029 20.2992 4.70625C19.7323 4.15056 19.064 3.70896 18.3305 3.40547C17.5699 3.08952 16.7541 2.92779 15.9305 2.92969C14.775 2.92969 13.6477 3.24609 12.668 3.84375C12.4336 3.98672 12.2109 4.14375 12 4.31485C11.7891 4.14375 11.5664 3.98672 11.332 3.84375C10.3523 3.24609 9.225 2.92969 8.06953 2.92969C7.2375 2.92969 6.43125 3.08906 5.66953 3.40547C4.93359 3.71016 4.27031 4.14844 3.70078 4.70625C3.13359 5.25966 2.6805 5.91899 2.36719 6.64688C2.04141 7.40391 1.875 8.20781 1.875 9.03516C1.875 9.81563 2.03438 10.6289 2.35078 11.4563C2.61563 12.1477 2.99531 12.8648 3.48047 13.5891C4.24922 14.7352 5.30625 15.9305 6.61875 17.1422C8.79375 19.1508 10.9477 20.5383 11.0391 20.5945L11.5945 20.9508C11.8406 21.1078 12.157 21.1078 12.4031 20.9508L12.9586 20.5945C13.05 20.5359 15.2016 19.1508 17.3789 17.1422C18.6914 15.9305 19.7484 14.7352 20.5172 13.5891C21.0023 12.8648 21.3844 12.1477 21.6469 11.4563C21.9633 10.6289 22.1227 9.81563 22.1227 9.03516C22.125 8.20781 21.9586 7.40391 21.6328 6.64688Z"
                fill="#0072DB"
              />
            </RecomendedListItemDescriptionSvg>
          </RecomendedListItemDescriptionButton>
        </RecomendedListItemDescription>
      </RecomendedListItem>
      <RecomendedListItem>
        <RecomendedListItemLink href="#">
          {' '}
          <RecomendedListItemNotImg>
            <RecomendedListItemNotImgSvg
              width="56"
              height="56"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#dbdbdc"
                d="M23.517 29.193c0 0.689-0.559 1.248-1.248 1.248h-17.279c-2.752 0-4.99-2.239-4.99-4.99v-14.347c0-1.053 0.324-2.059 0.937-2.912 0.402-0.559 1.182-0.686 1.741-0.284s0.687 1.182 0.284 1.741c-0.306 0.425-0.468 0.928-0.468 1.455v14.347c0 1.376 1.119 2.495 2.495 2.495h17.279c0.689 0 1.248 0.559 1.248 1.248zM9.79 15.301c-0.68-0.117-1.324 0.338-1.442 1.017-0.076 0.438-0.114 0.887-0.114 1.335 0 4.299 3.498 7.797 7.797 7.797 0.512 0 1.023-0.050 1.521-0.148 0.676-0.134 1.115-0.79 0.982-1.466s-0.79-1.116-1.466-0.981c-0.339 0.067-0.687 0.101-1.036 0.101-2.924 0-5.302-2.378-5.302-5.302 0-0.306 0.026-0.612 0.078-0.91 0.117-0.679-0.338-1.324-1.017-1.442zM31.635 31.572c-0.244 0.244-0.563 0.366-0.882 0.366s-0.639-0.122-0.882-0.366l-29.442-29.442c-0.487-0.487-0.487-1.277 0-1.764s1.277-0.487 1.764 0l5.46 5.46c0.169-0.14 0.301-0.325 0.377-0.536l0.432-1.196c0.534-1.478 1.948-2.471 3.52-2.471h7.97c1.603 0 3.027 1.020 3.543 2.537l0.377 1.109c0.172 0.506 0.647 0.845 1.181 0.845h1.894c2.752 0 4.99 2.239 4.99 4.99v8.109c0 0.689-0.558 1.248-1.248 1.248s-1.248-0.558-1.248-1.248v-8.109c0-1.376-1.119-2.495-2.495-2.495h-1.894c-1.603 0-3.027-1.019-3.543-2.537l-0.378-1.109c-0.172-0.506-0.647-0.846-1.181-0.846h-7.97c-0.524 0-0.996 0.331-1.174 0.824l-0.432 1.196c-0.202 0.56-0.534 1.057-0.958 1.455l3.1 3.1c1.085-0.548 2.285-0.836 3.513-0.836 4.299 0 7.797 3.498 7.797 7.797 0 1.231-0.287 2.429-0.835 3.513l5.877 5.877c0.366-0.44 0.573-0.997 0.573-1.593 0-0.689 0.559-1.248 1.248-1.248s1.248 0.559 1.248 1.248c0 1.272-0.47 2.458-1.298 3.363l0.995 0.995c0.487 0.487 0.487 1.277 0 1.764zM14.426 12.599l6.659 6.659c0.163-0.515 0.248-1.055 0.248-1.605 0-2.924-2.378-5.302-5.302-5.302-0.549 0-1.090 0.085-1.605 0.248z"
              ></path>
            </RecomendedListItemNotImgSvg>
            <RecomendedListItemNotImgText>
              Фото отсутствует
            </RecomendedListItemNotImgText>
          </RecomendedListItemNotImg>{' '}
        </RecomendedListItemLink>

        <RecomendedListItemDescription>
          <RecomendedListItemDescriptionText>
            {' '}
            <RecomendedListItemDescriptionPrice>
              280 000 000 ₽{' '}
            </RecomendedListItemDescriptionPrice>
            <RecomendedListItemDescriptionHouse>
              Общепит, 800 м²{' '}
            </RecomendedListItemDescriptionHouse>
            <RecomendedListItemDescriptionLocation>
              Краснодарский край, Сочи, Курортный пр-т, 47/3 р-н Центральный{' '}
            </RecomendedListItemDescriptionLocation>
            <RecomendedListItemDescriptionRoom>
              800 м²{' '}
            </RecomendedListItemDescriptionRoom>
          </RecomendedListItemDescriptionText>
          <RecomendedListItemDescriptionButton type="button">
            <RecomendedListItemDescriptionSvg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 32 32"
            >
              <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
            </RecomendedListItemDescriptionSvg>
          </RecomendedListItemDescriptionButton>
        </RecomendedListItemDescription>
      </RecomendedListItem>
      <RecomendedListItem>
        <RecomendedListItemLink href="#">
          <RecomendedListItemImg
            alt="House"
            src={require('images/desktop/home-1@2x.jpg')}
          ></RecomendedListItemImg>{' '}
        </RecomendedListItemLink>

        <RecomendedListItemDescription>
          <RecomendedListItemDescriptionText>
            {' '}
            <RecomendedListItemDescriptionPrice>
              от 8 000 ₽ за сутки
            </RecomendedListItemDescriptionPrice>
            <RecomendedListItemDescriptionHouse>
              1-к. квартира, 75 м², 3/6 эт.
            </RecomendedListItemDescriptionHouse>
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
              width="24"
              height="24"
              viewBox="0 0 32 32"
            >
              <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
            </RecomendedListItemDescriptionSvg>
          </RecomendedListItemDescriptionButton>
        </RecomendedListItemDescription>
      </RecomendedListItem>
      <RecomendedListItem>
        <RecomendedListItemLink href="#">
          {' '}
          <RecomendedListItemImg
            alt="House"
            src={require('images/desktop/home-2@2x.jpg')}
          ></RecomendedListItemImg>{' '}
        </RecomendedListItemLink>

        <RecomendedListItemDescription>
          <RecomendedListItemDescriptionText>
            {' '}
            <RecomendedListItemDescriptionStoke>
              <RecomendedListItemDescriptionsNewPrice>
                3 100 000 ₽
              </RecomendedListItemDescriptionsNewPrice>
              <RecomendedListItemDescriptionOldPrice>
                3 400 000 ₽
              </RecomendedListItemDescriptionOldPrice>
            </RecomendedListItemDescriptionStoke>
            <RecomendedListItemDescriptionHouse>
              Гостиница, 90 м²{' '}
            </RecomendedListItemDescriptionHouse>
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
              width="24"
              height="24"
              viewBox="0 0 32 32"
            >
              <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
            </RecomendedListItemDescriptionSvg>
          </RecomendedListItemDescriptionButton>
        </RecomendedListItemDescription>
      </RecomendedListItem>{' '}
      <RecomendedListItem>
        <RecomendedListItemLink href="#">
          <RecomendedListItemImg
            alt="House"
            src={require('images/desktop/home-1@2x.jpg')}
          ></RecomendedListItemImg>{' '}
        </RecomendedListItemLink>

        <RecomendedListItemDescription>
          <RecomendedListItemDescriptionText>
            {' '}
            <RecomendedListItemDescriptionPrice>
              от 8 000 ₽ за сутки
            </RecomendedListItemDescriptionPrice>
            <RecomendedListItemDescriptionHouse>
              1-к. квартира, 75 м², 3/6 эт.
            </RecomendedListItemDescriptionHouse>
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
              width="24"
              height="24"
              viewBox="0 0 32 32"
            >
              <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
            </RecomendedListItemDescriptionSvg>
          </RecomendedListItemDescriptionButton>
        </RecomendedListItemDescription>
      </RecomendedListItem>
      <RecomendedListItem>
        <RecomendedListItemLink href="#">
          {' '}
          <RecomendedListItemImg
            alt="House"
            src={require('images/desktop/home-2@2x.jpg')}
          ></RecomendedListItemImg>{' '}
        </RecomendedListItemLink>

        <RecomendedListItemDescription>
          <RecomendedListItemDescriptionText>
            {' '}
            <RecomendedListItemDescriptionStoke>
              <RecomendedListItemDescriptionsNewPrice>
                3 100 000 ₽
              </RecomendedListItemDescriptionsNewPrice>
              <RecomendedListItemDescriptionOldPrice>
                3 400 000 ₽
              </RecomendedListItemDescriptionOldPrice>
            </RecomendedListItemDescriptionStoke>
            <RecomendedListItemDescriptionHouse>
              Гостиница, 90 м²{' '}
            </RecomendedListItemDescriptionHouse>
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
              width="24"
              height="24"
              viewBox="0 0 32 32"
            >
              <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
            </RecomendedListItemDescriptionSvg>
          </RecomendedListItemDescriptionButton>
        </RecomendedListItemDescription>
      </RecomendedListItem>
      <RecomendedListItem>
        <RecomendedListItemLink href="#">
          <RecomendedListItemImg
            alt="House"
            src={require('images/desktop/home-3@2x.jpg')}
          ></RecomendedListItemImg>{' '}
        </RecomendedListItemLink>

        <RecomendedListItemDescription>
          <RecomendedListItemDescriptionText>
            {' '}
            <RecomendedListItemDescriptionPrice>
              7 887 300 ₽{' '}
            </RecomendedListItemDescriptionPrice>
            <RecomendedListItemDescriptionHouse>
              1-к. квартира, 75 м², 3/6 эт.
            </RecomendedListItemDescriptionHouse>
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
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M21.6328 6.64688C21.3187 5.91946 20.8657 5.26029 20.2992 4.70625C19.7323 4.15056 19.064 3.70896 18.3305 3.40547C17.5699 3.08952 16.7541 2.92779 15.9305 2.92969C14.775 2.92969 13.6477 3.24609 12.668 3.84375C12.4336 3.98672 12.2109 4.14375 12 4.31485C11.7891 4.14375 11.5664 3.98672 11.332 3.84375C10.3523 3.24609 9.225 2.92969 8.06953 2.92969C7.2375 2.92969 6.43125 3.08906 5.66953 3.40547C4.93359 3.71016 4.27031 4.14844 3.70078 4.70625C3.13359 5.25966 2.6805 5.91899 2.36719 6.64688C2.04141 7.40391 1.875 8.20781 1.875 9.03516C1.875 9.81563 2.03438 10.6289 2.35078 11.4563C2.61563 12.1477 2.99531 12.8648 3.48047 13.5891C4.24922 14.7352 5.30625 15.9305 6.61875 17.1422C8.79375 19.1508 10.9477 20.5383 11.0391 20.5945L11.5945 20.9508C11.8406 21.1078 12.157 21.1078 12.4031 20.9508L12.9586 20.5945C13.05 20.5359 15.2016 19.1508 17.3789 17.1422C18.6914 15.9305 19.7484 14.7352 20.5172 13.5891C21.0023 12.8648 21.3844 12.1477 21.6469 11.4563C21.9633 10.6289 22.1227 9.81563 22.1227 9.03516C22.125 8.20781 21.9586 7.40391 21.6328 6.64688Z"
                fill="#0072DB"
              />
            </RecomendedListItemDescriptionSvg>
          </RecomendedListItemDescriptionButton>
        </RecomendedListItemDescription>
      </RecomendedListItem>
      <RecomendedListItem>
        <RecomendedListItemLink href="#">
          {' '}
          <RecomendedListItemNotImg>
            <RecomendedListItemNotImgSvg
              width="56"
              height="56"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#dbdbdc"
                d="M23.517 29.193c0 0.689-0.559 1.248-1.248 1.248h-17.279c-2.752 0-4.99-2.239-4.99-4.99v-14.347c0-1.053 0.324-2.059 0.937-2.912 0.402-0.559 1.182-0.686 1.741-0.284s0.687 1.182 0.284 1.741c-0.306 0.425-0.468 0.928-0.468 1.455v14.347c0 1.376 1.119 2.495 2.495 2.495h17.279c0.689 0 1.248 0.559 1.248 1.248zM9.79 15.301c-0.68-0.117-1.324 0.338-1.442 1.017-0.076 0.438-0.114 0.887-0.114 1.335 0 4.299 3.498 7.797 7.797 7.797 0.512 0 1.023-0.050 1.521-0.148 0.676-0.134 1.115-0.79 0.982-1.466s-0.79-1.116-1.466-0.981c-0.339 0.067-0.687 0.101-1.036 0.101-2.924 0-5.302-2.378-5.302-5.302 0-0.306 0.026-0.612 0.078-0.91 0.117-0.679-0.338-1.324-1.017-1.442zM31.635 31.572c-0.244 0.244-0.563 0.366-0.882 0.366s-0.639-0.122-0.882-0.366l-29.442-29.442c-0.487-0.487-0.487-1.277 0-1.764s1.277-0.487 1.764 0l5.46 5.46c0.169-0.14 0.301-0.325 0.377-0.536l0.432-1.196c0.534-1.478 1.948-2.471 3.52-2.471h7.97c1.603 0 3.027 1.020 3.543 2.537l0.377 1.109c0.172 0.506 0.647 0.845 1.181 0.845h1.894c2.752 0 4.99 2.239 4.99 4.99v8.109c0 0.689-0.558 1.248-1.248 1.248s-1.248-0.558-1.248-1.248v-8.109c0-1.376-1.119-2.495-2.495-2.495h-1.894c-1.603 0-3.027-1.019-3.543-2.537l-0.378-1.109c-0.172-0.506-0.647-0.846-1.181-0.846h-7.97c-0.524 0-0.996 0.331-1.174 0.824l-0.432 1.196c-0.202 0.56-0.534 1.057-0.958 1.455l3.1 3.1c1.085-0.548 2.285-0.836 3.513-0.836 4.299 0 7.797 3.498 7.797 7.797 0 1.231-0.287 2.429-0.835 3.513l5.877 5.877c0.366-0.44 0.573-0.997 0.573-1.593 0-0.689 0.559-1.248 1.248-1.248s1.248 0.559 1.248 1.248c0 1.272-0.47 2.458-1.298 3.363l0.995 0.995c0.487 0.487 0.487 1.277 0 1.764zM14.426 12.599l6.659 6.659c0.163-0.515 0.248-1.055 0.248-1.605 0-2.924-2.378-5.302-5.302-5.302-0.549 0-1.090 0.085-1.605 0.248z"
              ></path>
            </RecomendedListItemNotImgSvg>
            <RecomendedListItemNotImgText>
              Фото отсутствует
            </RecomendedListItemNotImgText>
          </RecomendedListItemNotImg>{' '}
        </RecomendedListItemLink>

        <RecomendedListItemDescription>
          <RecomendedListItemDescriptionText>
            {' '}
            <RecomendedListItemDescriptionPrice>
              280 000 000 ₽{' '}
            </RecomendedListItemDescriptionPrice>
            <RecomendedListItemDescriptionHouse>
              Общепит, 800 м²{' '}
            </RecomendedListItemDescriptionHouse>
            <RecomendedListItemDescriptionLocation>
              Краснодарский край, Сочи, Курортный пр-т, 47/3 р-н Центральный{' '}
            </RecomendedListItemDescriptionLocation>
            <RecomendedListItemDescriptionRoom>
              800 м²{' '}
            </RecomendedListItemDescriptionRoom>
          </RecomendedListItemDescriptionText>
          <RecomendedListItemDescriptionButton type="button">
            <RecomendedListItemDescriptionSvg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 32 32"
            >
              <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
            </RecomendedListItemDescriptionSvg>
          </RecomendedListItemDescriptionButton>
        </RecomendedListItemDescription>
      </RecomendedListItem>
      <RecomendedListItem>
        <RecomendedListItemLink href="#">
          <RecomendedListItemImg
            alt="House"
            src={require('images/desktop/home-1@2x.jpg')}
          ></RecomendedListItemImg>{' '}
        </RecomendedListItemLink>

        <RecomendedListItemDescription>
          <RecomendedListItemDescriptionText>
            {' '}
            <RecomendedListItemDescriptionPrice>
              от 8 000 ₽ за сутки
            </RecomendedListItemDescriptionPrice>
            <RecomendedListItemDescriptionHouse>
              1-к. квартира, 75 м², 3/6 эт.
            </RecomendedListItemDescriptionHouse>
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
              width="24"
              height="24"
              viewBox="0 0 32 32"
            >
              <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
            </RecomendedListItemDescriptionSvg>
          </RecomendedListItemDescriptionButton>
        </RecomendedListItemDescription>
      </RecomendedListItem>
      <RecomendedListItem>
        <RecomendedListItemLink href="#">
          {' '}
          <RecomendedListItemImg
            alt="House"
            src={require('images/desktop/home-2@2x.jpg')}
          ></RecomendedListItemImg>{' '}
        </RecomendedListItemLink>

        <RecomendedListItemDescription>
          <RecomendedListItemDescriptionText>
            {' '}
            <RecomendedListItemDescriptionStoke>
              <RecomendedListItemDescriptionsNewPrice>
                3 100 000 ₽
              </RecomendedListItemDescriptionsNewPrice>
              <RecomendedListItemDescriptionOldPrice>
                3 400 000 ₽
              </RecomendedListItemDescriptionOldPrice>
            </RecomendedListItemDescriptionStoke>
            <RecomendedListItemDescriptionHouse>
              Гостиница, 90 м²{' '}
            </RecomendedListItemDescriptionHouse>
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
              width="24"
              height="24"
              viewBox="0 0 32 32"
            >
              <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
            </RecomendedListItemDescriptionSvg>
          </RecomendedListItemDescriptionButton>
        </RecomendedListItemDescription>
      </RecomendedListItem>
    </>
  );
};

export default RecomendedMarkupDesktope;
