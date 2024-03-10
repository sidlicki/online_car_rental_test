import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  .list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 50px;
    column-gap: 29px;
  }

  .form {
    margin: 0 auto;
    display: flex;
    gap: 18px;
    height: 74px;
  }
  .label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.28571;
    color: #8a8a89;
    height: 74px;
  }
  .btnSearch {
    margin-top: auto;
    display: block;
    height: 48px;
  }
  .inputsMillage {
    display: flex;
  }
  .select-brand {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 32px;
    border-radius: 14px;
    padding: 14px 18px;
    width: 224px;
    height: 48px;
    background: #f7f7fb;
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 16px;
    border: none;
    outline: none;

    // line-height: 20px;
    line-height: 1.11111;
    color: #121417;
    cursor: pointer;
  }
  .select-price {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 32px;
    border-radius: 14px;
    padding: 14px 18px;
    width: 125px;
    height: 48px;
    background: #f7f7fb;
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 16px;
    border: none;
    outline: none;

    // line-height: 20px;
    line-height: 1.11111;
    color: #121417;
    cursor: pointer;
  }
  .inputMillageLeft {
    border: none;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
    border-radius: 14px 0 0 14px;
    width: 160px;
    height: 48px;
    background: #f7f7fb;
    outline: none;
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 18px;

    // line-height: 20px;
    line-height: 1.11111;
    color: #121417;
    padding-left: 24px;
  }
  .inputMillageRight {
    border: none;
    border-radius: 0 14px 14px 0;

    width: 160px;
    height: 48px;
    background: #f7f7fb;
    outline: none;
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 18px;
    padding-left: 24px;

    // line-height: 20px;
    line-height: 1.11111;
    color: #121417;
  }
  .btnSearch {
    border-radius: 12px;
    padding: 14px 44px;
    width: 136px;
    height: 48px;
    background: #3470ff;
    border: none;
    outline: none;
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 14px;

    // line-height: 20px;
    line-height: 1.42857;
    color: #fff;
    &:hover {
      background: #0b44cd;
    }
  }
`;

export const NotFoundDiv = styled.div`
  display: block;
  margin: 20px auto;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
