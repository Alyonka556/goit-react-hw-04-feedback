import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledButton = styled.button`
  height: 50px;
  margin: 5px;
  width: 120px;
  background: #333;
  justify-content: center;
  align-items: center;
  font-family: Consolas, Courier New, monospace;
  border: solid #404c5d 1px;
  font-size: 16px;
  color: rgb(161, 161, 161);
  transition: 500ms;
  transition: 500ms;
  border-radius: 5px;
  background: linear-gradient(145deg, #2e2d2d, #212121);
  box-shadow: -1px -5px 10px #41465b, 1px 5px 10px #41465b,
    inset 5px 5px 5px #212121, inset -5px -5px 5px #212121;
  &:hover {
    box-shadow: -1px -5px 15px #41465b, 5px 5px 15px #41465b,
      inset 5px 5px 10px #212121, inset -5px -5px 10px #212121;
    color: #4b585d;
  }
`;
