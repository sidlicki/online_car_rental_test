import styled from 'styled-components';

export const LayoutStyled = styled.div`
  display: block;

  header {
    padding: 15px 0;
    background: linear-gradient(to bottom, #3470ff 1%, #ffffff 90%);
    margin-bottom: 30px;
    a {
      margin-left: 10px;
      font-family: 'Manrope', sans-serif;
      font-weight: 500;
      font-size: 16px;

      // line-height: 24px;
      line-height: 1.5;
      color: #121417;
      background: linear-gradient(to top, #3470ff 10%, #ffffff 90%);
      padding: 5px 10px;
      border-radius: 20px;
      transition: all 0.3s ease;

      &:active {
        background: linear-gradient(to top, #3470ff 50%, #ffffff 90%);
      }
      &:hover {
        background: linear-gradient(to top, #3470ff 50%, #ffffff 90%);
      }
    }
    a + .active {
      background: linear-gradient(to top, #3470ff 50%, #ffffff 90%);
    }
  }
`;
