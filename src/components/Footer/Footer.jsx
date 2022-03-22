import { useEffect, useState } from 'react';
import {
  FooterContainer,
  FooterList,
  FooterListItem,
  FooterListItemButton,
  FooterListItemLink,
  FooterListItemSvg,
  FooterListItemTextActive,
  FooterTag,
} from './FooterStyledComponents';
const Footer = () => {
  const [matches, setMatches] = useState(
    window.matchMedia('(max-width: 1439px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(max-width: 1439px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);
  return (
    <FooterTag>
      <FooterContainer>
        <FooterList>
          <FooterListItem>
            <FooterListItemLink href="#">
              <FooterListItemSvg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  d="M18.4863 9.86328L10.4414 1.82422C10.3835 1.76618 10.3147 1.72013 10.2389 1.68872C10.1632 1.6573 10.082 1.64113 10 1.64113C9.918 1.64113 9.83681 1.6573 9.76106 1.68872C9.68532 1.72013 9.61652 1.76618 9.55859 1.82422L1.51367 9.86328C1.2793 10.0977 1.14648 10.416 1.14648 10.748C1.14648 11.4375 1.70703 11.998 2.39648 11.998H3.24414V17.7344C3.24414 18.0801 3.52344 18.3594 3.86914 18.3594H8.75V13.9844H10.9375V18.3594H16.1309C16.4766 18.3594 16.7559 18.0801 16.7559 17.7344V11.998H17.6035C17.9355 11.998 18.2539 11.8672 18.4883 11.6309C18.9746 11.1426 18.9746 10.3516 18.4863 9.86328V9.86328Z"
                  fill="#0072DB"
                />
              </FooterListItemSvg>

              <FooterListItemTextActive>Объявления</FooterListItemTextActive>
            </FooterListItemLink>
          </FooterListItem>{' '}
          <FooterListItem>
            <FooterListItemLink href="#">
              <FooterListItemSvg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 32 32"
              >
                <path d="M28.844 8.863c-0.419-0.97-1.023-1.849-1.778-2.588-0.756-0.741-1.647-1.33-2.625-1.734-1.014-0.421-2.102-0.637-3.2-0.634-1.541 0-3.044 0.422-4.35 1.219-0.313 0.191-0.609 0.4-0.891 0.628-0.281-0.228-0.578-0.438-0.891-0.628-1.306-0.797-2.809-1.219-4.35-1.219-1.109 0-2.184 0.213-3.2 0.634-0.981 0.406-1.866 0.991-2.625 1.734-0.756 0.738-1.36 1.617-1.778 2.588-0.434 1.009-0.656 2.081-0.656 3.184 0 1.041 0.212 2.125 0.634 3.228 0.353 0.922 0.859 1.878 1.506 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l0.741 0.475c0.328 0.209 0.75 0.209 1.078 0l0.741-0.475c0.122-0.078 2.991-1.925 5.894-4.603 1.75-1.616 3.159-3.209 4.184-4.737 0.647-0.966 1.156-1.922 1.506-2.844 0.422-1.103 0.634-2.188 0.634-3.228 0.003-1.103-0.219-2.175-0.653-3.184zM16 25.463c0 0-11.125-7.128-11.125-13.416 0-3.184 2.634-5.766 5.884-5.766 2.284 0 4.266 1.275 5.241 3.138 0.975-1.862 2.956-3.138 5.241-3.138 3.25 0 5.884 2.581 5.884 5.766 0 6.287-11.125 13.416-11.125 13.416z"></path>
              </FooterListItemSvg>

              <FooterListItemTextActive>Избранные</FooterListItemTextActive>
            </FooterListItemLink>
          </FooterListItem>{' '}
          <FooterListItem>
            <FooterListItemLink href="#">
              <FooterListItemSvg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 32 32"
              >
                <path d="M16 4c6.6 0 12 5.4 12 12s-5.4 12-12 12c-6.6 0-12-5.4-12-12s5.4-12 12-12zM16 2c-7.7 0-14 6.3-14 14s6.3 14 14 14c7.7 0 14-6.3 14-14s-6.3-14-14-14z"></path>
                <path d="M24 15h-7v-7h-2v7h-7v2h7v7h2v-7h7v-2z"></path>
              </FooterListItemSvg>

              <FooterListItemTextActive>Создать</FooterListItemTextActive>
            </FooterListItemLink>
          </FooterListItem>{' '}
          <FooterListItem>
            <FooterListItemLink href="#">
              <FooterListItemSvg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 32 32"
              >
                <path d="M2 7c0-0.796 0.316-1.559 0.879-2.121s1.326-0.879 2.121-0.879h14c0.796 0 1.559 0.316 2.121 0.879s0.879 1.326 0.879 2.121v10c0 0.796-0.316 1.559-0.879 2.121s-1.326 0.879-2.121 0.879h-14c-0.796 0-1.559-0.316-2.121-0.879s-0.879-1.326-0.879-2.121v-10zM5 6c-0.265 0-0.52 0.105-0.707 0.293s-0.293 0.442-0.293 0.707v10c0 0.265 0.105 0.52 0.293 0.707s0.442 0.293 0.707 0.293h14c0.265 0 0.52-0.105 0.707-0.293s0.293-0.442 0.293-0.707v-10c0-0.265-0.105-0.52-0.293-0.707s-0.442-0.293-0.707-0.293h-14zM10.17 26c0.207 0.585 0.59 1.092 1.097 1.45s1.112 0.55 1.733 0.55h6c1.444 0 2.875-0.284 4.209-0.837s2.547-1.363 3.569-2.384 1.832-2.234 2.384-3.569c0.553-1.335 0.837-2.765 0.837-4.209v-2c0-0.621-0.192-1.226-0.55-1.733s-0.865-0.89-1.45-1.097v4.83c0 2.387-0.948 4.676-2.636 6.364s-3.977 2.636-6.364 2.636h-8.83zM9 24c-0.621 0-1.226-0.192-1.733-0.55s-0.89-0.865-1.097-1.45h12.83c0.657 0 1.307-0.129 1.913-0.381s1.158-0.62 1.622-1.084 0.833-1.016 1.084-1.622c0.251-0.607 0.381-1.257 0.381-1.913v-8.83c0.585 0.207 1.092 0.59 1.45 1.097s0.55 1.112 0.55 1.733v6c0 1.856-0.737 3.637-2.050 4.95s-3.093 2.050-4.95 2.050h-10z"></path>
              </FooterListItemSvg>

              <FooterListItemTextActive>Подборки</FooterListItemTextActive>
            </FooterListItemLink>
          </FooterListItem>{' '}
          <FooterListItem>
            <FooterListItemLink href="#">
              <FooterListItemSvg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 32 32"
              >
                <path
                  fill="none"
                  stroke-linejoin="round"
                  stroke-linecap="butt"
                  stroke-miterlimit="4"
                  stroke-width="2.4"
                  stroke="#000"
                  d="M25.5 4h-19c-0.927 0.003-1.816 0.372-2.472 1.028s-1.025 1.545-1.028 2.472v12c0.003 0.928 0.372 1.816 1.028 2.472s1.545 1.025 2.472 1.028h2.5v5l5.857-4.884c0.090-0.075 0.203-0.116 0.321-0.116h10.322c0.928-0.003 1.816-0.372 2.472-1.028s1.025-1.544 1.028-2.472v-12c-0.003-0.927-0.372-1.816-1.028-2.472s-1.544-1.025-2.472-1.028v0z"
                ></path>
              </FooterListItemSvg>

              <FooterListItemTextActive>Чаты</FooterListItemTextActive>
            </FooterListItemLink>
          </FooterListItem>{' '}
        </FooterList>
      </FooterContainer>
    </FooterTag>
  );
};

export default Footer;
