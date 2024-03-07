import styled from 'styled-components';

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 274px;
  overflow: hidden;
  .img {
    width: 100%;
    height: 100%;
    min-height: 268px;
    object-fit: cover;
  }
`;
