import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 36px;
  border: none;
  border-radius: 4px;
  background: ${(props) => props.color};
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;

  & + button {
    margin-left: 16px;
  }
`;
