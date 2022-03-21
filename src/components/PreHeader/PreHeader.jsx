import {
  SeectionPreHeader,
  PreHeaderTime,
  PreHeaderIndicators,
  PreHeaderContainer,
} from './PreHeaderStyledComponents';
const PreHeader = () => {
  return (
    <SeectionPreHeader>
      <PreHeaderContainer>
        <PreHeaderTime
          alt="time"
          src={require('images/Time.jpg')}
          width="37px"
          height="17px"
        ></PreHeaderTime>
        <PreHeaderIndicators
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="78"
          height="13"
          viewBox="0 0 192 32"
        >
          <title>Indicators</title>
          <path
            fill="#000"
            d="M46.287 1.231h-2.872c-1.586 0-2.872 1.24-2.872 2.769v24c0 1.53 1.286 2.769 2.872 2.769h2.872c1.586 0 2.872-1.24 2.872-2.769v-24c0-1.529-1.286-2.769-2.872-2.769zM29.901 7.692h2.872c1.586 0 2.872 1.24 2.872 2.769v17.539c0 1.529-1.286 2.769-2.872 2.769h-2.872c-1.586 0-2.872-1.24-2.872-2.769v-17.539c0-1.529 1.286-2.769 2.872-2.769zM19.258 14.153h-2.872c-1.586 0-2.872 1.24-2.872 2.769v11.077c0 1.529 1.286 2.769 2.872 2.769h2.872c1.586 0 2.872-1.24 2.872-2.769v-11.077c0-1.529-1.286-2.769-2.872-2.769zM5.744 19.692h-2.872c-1.586 0-2.872 1.24-2.872 2.769v5.538c0 1.529 1.286 2.769 2.872 2.769h2.872c1.586 0 2.872-1.24 2.872-2.769v-5.538c0-1.529-1.286-2.769-2.872-2.769z"
          ></path>
          <path
            fill="#000"
            d="M86.083 7.005c6.071 0 11.911 2.389 16.311 6.674 0.331 0.331 0.861 0.327 1.187-0.009l3.168-3.274c0.165-0.17 0.257-0.401 0.256-0.641s-0.096-0.47-0.263-0.638c-11.549-11.335-29.77-11.335-41.319 0-0.167 0.168-0.262 0.398-0.264 0.638s0.090 0.471 0.255 0.642l3.168 3.274c0.326 0.336 0.856 0.341 1.187 0.009 4.401-4.284 10.241-6.674 16.313-6.674zM86.083 17.656c3.336-0 6.553 1.27 9.025 3.563 0.334 0.325 0.861 0.318 1.187-0.016l3.164-3.274c0.167-0.172 0.259-0.405 0.257-0.647s-0.099-0.473-0.27-0.641c-7.53-7.173-19.191-7.173-26.721 0-0.17 0.168-0.267 0.399-0.269 0.641s0.090 0.475 0.257 0.646l3.163 3.274c0.326 0.334 0.853 0.341 1.187 0.016 2.471-2.292 5.685-3.561 9.019-3.563zM92.42 24.822c0.005 0.243-0.088 0.477-0.257 0.647l-5.473 5.656c-0.16 0.166-0.379 0.26-0.608 0.26s-0.447-0.094-0.607-0.26l-5.473-5.656c-0.169-0.17-0.262-0.404-0.257-0.647s0.108-0.473 0.284-0.635c3.495-3.027 8.614-3.027 12.109 0 0.176 0.163 0.278 0.393 0.283 0.636z"
          ></path>
          <path
            fill="none"
            opacity="0.4"
            stroke="#000"
            strokeLinejoin="miter"
            strokeLinecap="butt"
            strokeMiterlimit="4"
            strokeWidth="2.4615"
            d="M132.851 1.231h41.846c4.758 0 8.615 3.857 8.615 8.615v12.308c0 4.758-3.857 8.615-8.615 8.615h-41.846c-4.758 0-8.615-3.857-8.615-8.615v-12.308c0-4.758 3.857-8.615 8.615-8.615z"
          ></path>
          <path
            fill="#000"
            opacity="0.5"
            d="M187.005 11.077v9.846c1.984-0.834 3.274-2.774 3.274-4.923s-1.29-4.089-3.274-4.923z"
          ></path>
          <path
            fill="#000"
            d="M132.851 4.923h32c2.719 0 4.923 2.204 4.923 4.923v12.308c0 2.719-2.204 4.923-4.923 4.923h-32c-2.719 0-4.923-2.204-4.923-4.923v-12.308c0-2.719 2.204-4.923 4.923-4.923z"
          ></path>
        </PreHeaderIndicators>
      </PreHeaderContainer>
    </SeectionPreHeader>
  );
};

export default PreHeader;
