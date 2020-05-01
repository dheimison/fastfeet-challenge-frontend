import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    height: 425px;
    width: 360px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 260px;
      margin-bottom: 45px;
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;

      button {
        width: 300px;
        height: 45px;
        background: #7d40e7;
        border-radius: 4px;
        border: none;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        margin-top: 15px;
      }
    }
  }
`;

const fadeIn = keyframes`
 from {
   opacity: 0;
 }
 to {
   opacity: 1;
 }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #444444;
  margin-bottom: 10px;
  margin-top: ${(props) => (props.error === '' ? '15px' : '0px')};

  &::after {
    content: '${(props) => props.error}';
    display: ${(props) => (props.error === '' ? 'none' : 'block')};
    background: red;
    padding: 5px;
    color: #fff;
    font-size: 12px;
    border-radius: 4px;
    margin-top: 5px;
    text-transform: capitalize;
    animation: ${fadeIn} 0.5s ease-in;
  }

  input {
    width: 300px;
    height: 45px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 12px 0 12px 15px;

    &::placeholder {
      font-size: 16px;
      color: #999999;
    }
  }
`;
