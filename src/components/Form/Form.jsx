import {
  FormButton,
  FormContainer,
  FormInput,
  FormSelect,
  FormSelectSvg,
  FormSelectText,
  FormTag,
  SeectionForm,
} from './FormStyledComponents';
const Form = () => {
  return (
    <SeectionForm>
      <FormContainer>
        <FormTag>
          <FormInput placeholder="Поиск по недвижимости..."></FormInput>
          <FormSelect>
            <FormSelectText>Любая категория</FormSelectText>
            <FormSelectSvg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                d="M8.00002 10.6666C7.84425 10.667 7.6933 10.6127 7.57335 10.5133L3.57335 7.17998C3.43721 7.06682 3.35159 6.90421 3.33534 6.72793C3.31909 6.55165 3.37353 6.37612 3.48669 6.23998C3.59985 6.10384 3.76245 6.01822 3.93874 6.00197C4.11502 5.98571 4.29054 6.04015 4.42669 6.15331L8.00002 9.13998L11.5734 6.25998C11.6415 6.2046 11.72 6.16325 11.8042 6.13829C11.8885 6.11334 11.9768 6.10528 12.0641 6.11457C12.1515 6.12386 12.2361 6.15033 12.3132 6.19244C12.3903 6.23456 12.4583 6.2915 12.5134 6.35998C12.5744 6.42853 12.6206 6.50895 12.6492 6.59619C12.6777 6.68344 12.6879 6.77564 12.6791 6.86702C12.6704 6.9584 12.6428 7.04698 12.5983 7.12721C12.5537 7.20745 12.493 7.27762 12.42 7.33331L8.42002 10.5533C8.29663 10.637 8.14876 10.6769 8.00002 10.6666Z"
                fill="#222222"
              />
            </FormSelectSvg>
          </FormSelect>
          <FormButton>Найти</FormButton>
        </FormTag>
      </FormContainer>
    </SeectionForm>
  );
};

export default Form;
