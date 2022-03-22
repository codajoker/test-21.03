import styled from 'styled-components';
export const SeectionForm = styled.section`
  padding-top: 28px;
  padding-bottom: 28px;
  background-color: #f4f4f4;
`;
export const FormContainer = styled.div`
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
    padding: 0px 112px;
    max-width: 1440px;
  }
`;

export const FormTag = styled.form`
  display: flex;
  border: 1px solid #e6ecf5;
  border-radius: 4px;
`;
export const FormInput = styled.input`
  width: 872px;
  background-color: #ffffff;
  padding-left: 56px;
  padding-top: 20px;
  padding-bottom: 19px;
  ::placeholder {
    font-weight: 300;
    font-size: 14px;
    line-height: 1.2;

    color: #575757;
  }
`;
export const FormSelect = styled.div`
  display: flex;
  padding: 20px 16px 19px 16px;
  background-color: #ffffff;
  border-left: 1px solid #e6ecf5; ;
`;
export const FormSelectText = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 1.2;
  margin-right: 77px;
  color: #222222;
`;
export const FormSelectSvg = styled.svg``;
export const FormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 29px 19px 31px;
  background: #0072db;
  border-radius: 0px 4px 4px 0px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  color: white;
`;
export const PreHeaderIndicators = styled.svg`
  display: block;
  right: 0;
  margin-left: auto;
`;
