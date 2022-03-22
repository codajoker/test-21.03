import {
  HeaderStyled,
  HeaderContainer,
  Burger,
  BurgerSvg,
  HeaderForm,
  HeaderFormInput,
  HeaderFormButton,
  HeaderFormButtonSvg,
  HeaderBell,
  HeaderBellSvg,
  HeaderAccount,
} from './HeaderStyledComponents';

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderContainer className="container">
        <Burger type="button" aria-expanded="false" aria-controls="mobile-menu">
          <BurgerSvg width={24} height={24}>
            <path
              d="M4.125 6.375H19.875M4.125 18.375H19.875H4.125ZM4.125 12.375H19.875H4.125Z"
              stroke="#222222"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </BurgerSvg>
        </Burger>
        <HeaderForm>
          <HeaderFormInput placeholder="Поиск..."></HeaderFormInput>
          <HeaderFormButton type="submit">
            <HeaderFormButtonSvg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.125 0.25C3.77575 0.25 0.25 3.77575 0.25 8.125C0.25 12.4742 3.77575 16 8.125 16C9.9625 16 11.6523 15.3707 12.9918 14.317L18.1502 19.4755C18.2373 19.5626 18.3407 19.6316 18.4544 19.6788C18.5682 19.7259 18.6901 19.7501 18.8132 19.7501C18.9364 19.7501 19.0583 19.7259 19.1721 19.6788C19.2858 19.6316 19.3892 19.5626 19.4762 19.4755C19.5633 19.3884 19.6324 19.2851 19.6795 19.1713C19.7266 19.0576 19.7509 18.9356 19.7509 18.8125C19.7509 18.6894 19.7266 18.5674 19.6795 18.4537C19.6324 18.3399 19.5633 18.2366 19.4762 18.1495L14.317 12.991C15.4097 11.6047 16.0027 9.8902 16 8.125C16 3.77575 12.4742 0.25 8.125 0.25ZM2.125 8.125C2.125 6.5337 2.75714 5.00758 3.88236 3.88236C5.00758 2.75714 6.5337 2.125 8.125 2.125C9.7163 2.125 11.2424 2.75714 12.3676 3.88236C13.4929 5.00758 14.125 6.5337 14.125 8.125C14.125 9.7163 13.4929 11.2424 12.3676 12.3676C11.2424 13.4929 9.7163 14.125 8.125 14.125C6.5337 14.125 5.00758 13.4929 3.88236 12.3676C2.75714 11.2424 2.125 9.7163 2.125 8.125Z"
                fill="white"
              />
            </HeaderFormButtonSvg>
          </HeaderFormButton>
        </HeaderForm>
        <HeaderBell>
          <HeaderBellSvg width={15.75} height={20.62}>
            <path
              d="M15.125 17H14.5625V9.03125C14.5625 5.72422 12.118 2.99141 8.9375 2.53672V1.625C8.9375 1.10703 8.51797 0.6875 8 0.6875C7.48203 0.6875 7.0625 1.10703 7.0625 1.625V2.53672C3.88203 2.99141 1.4375 5.72422 1.4375 9.03125V17H0.875C0.460156 17 0.125 17.3352 0.125 17.75V18.5C0.125 18.6031 0.209375 18.6875 0.3125 18.6875H5.375C5.375 20.1359 6.55156 21.3125 8 21.3125C9.44844 21.3125 10.625 20.1359 10.625 18.6875H15.6875C15.7906 18.6875 15.875 18.6031 15.875 18.5V17.75C15.875 17.3352 15.5398 17 15.125 17ZM8 19.8125C7.37891 19.8125 6.875 19.3086 6.875 18.6875H9.125C9.125 19.3086 8.62109 19.8125 8 19.8125ZM3.125 17V9.03125C3.125 7.72813 3.63125 6.50469 4.55234 5.58359C5.47344 4.6625 6.69688 4.15625 8 4.15625C9.30313 4.15625 10.5266 4.6625 11.4477 5.58359C12.3687 6.50469 12.875 7.72813 12.875 9.03125V17H3.125Z"
              fill="#222222"
            />
          </HeaderBellSvg>
        </HeaderBell>
        <HeaderAccount
          src={require('images/mobile/account.jpg')}
          alt="account photo"
          width={32}
          height={32}
        ></HeaderAccount>
      </HeaderContainer>{' '}
    </HeaderStyled>
  );
};

export default Header;
