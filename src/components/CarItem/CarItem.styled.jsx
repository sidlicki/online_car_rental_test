import styled from 'styled-components';

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 274px;
  overflow: hidden;
  position: relative;
  .img {
    width: 100%;
    height: 268px;
    object-fit: cover;
    border-radius: 14px;
    margin-bottom: 14px;
  }
  .wrapper-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 16px;

    // line-height: 24px;
    line-height: 1.5;
    color: #121417;
  }
  .nameAndPrice {
    display: flex;
    justify-content: space-between;
  }
  .price {
    margin-right: 9px;
  }
  .blueFill {
    color: #3470ff;
  }
  .descrList {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 12px;
    width: 270px;
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
    height: 40px;
    overflow: hidden;
    margin-bottom: 28px;
    li {
      position: relative;
    }
    li:not(:last-child)::after {
      content: '|';
      position: absolute;
      right: -7px;
    }
  }
  .btnLearnMore {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 0px;
    border-radius: 12px;
    padding: 12px 99px;
    width: 274px;
    height: 44px;
    background: #3470ff;
    outline: none;
    border: none;
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
  .btnAddFav {
    border: none;
    background: none;
    position: absolute;
    top: 16px;
    right: 16px;

    &:hover svg {
      fill: #0b44cd;
    }
  }
`;
