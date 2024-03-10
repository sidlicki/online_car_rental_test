import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(48, 58, 58, 0.285);
  .modal {
    position: relative;
    width: 461px;
    min-height: 300px;
    border-radius: 24px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 40px;
    overflow: scroll;
    display: flex;
    flex-direction: column;
  }
  .btnClose {
    background: none;
    outline: none;
    border: none;
    position: absolute;
    top: 16px;
    right: 16px;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
  .img {
    width: 100%;
    border-radius: 14px;
    margin-bottom: 14px;
  }
  .caption {
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 18px;

    // line-height: 24px;
    line-height: 1.33333;
    color: #121417;
  }
  .blue {
    color: #3470ff;
  }
  .blueAndBold {
    color: #3470ff;
    font-weight: bold;
  }
  .list-modal {
    display: flex;
    width: 300px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 4px 12px;
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 12px;

    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
    margin-bottom: 14px;
    li {
      position: relative;
    }
    li:not(:last-child)::after {
      content: '|';
      position: absolute;
      right: -7px;
    }
  }
  .descr {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 14px;

    // line-height: 20px;
    line-height: 1.42857;
    color: #121417;
    margin-bottom: 24px;
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 12px;
  }
  .accessories {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 12px;

    // line-height: 18px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
    margin-bottom: 24px;
  }
  .subtitle {
    display: block;
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 14px;

    // line-height: 20px;
    line-height: 1.42857;
    color: #121417;
    margin-bottom: 8px;
  }
  .conditions-list {
    display: flex;
    flex-direction: row;
    gap: 4px 8px;
    flex-wrap: wrap;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 12px;

    // line-height: 18px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: #363535;
    margin-bottom: 24px;
    li {
      border-radius: 35px;
      padding: 7px 14px;
      background: #f9f9f9;
    }
  }
  .btnRent {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 12px;
    background: #3470ff;
    width: 168px;
    height: 44px;
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 14px;

    // line-height: 20px;
    line-height: 1.42857;
    color: #fff;
    transition: all 0.3s ease;
    &:hover {
      background: #0b44cd;
    }
  }
`;
