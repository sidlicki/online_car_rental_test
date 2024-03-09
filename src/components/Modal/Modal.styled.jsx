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
    max-width: 450px;
    width: 100%;
    min-height: 300px;
    background-color: rgb(212, 255, 255);
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
