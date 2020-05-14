import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
 from {
   opacity: 0;
 }
 to {
   opacity: 1;
 }
`;

export const WhiteBox = styled.div`
  width: 900px;
  height: 401;
  background: #ffffff;
  border-radius: 4px;
  padding: 26px 30px 36px 30px;
  display: flex;
  flex-direction: column;
`;

export const AvatarInput = styled.label`
  width: 150px;
  height: 150px;
  background: ${(props) => (props.preview ? 'none' : '#ffffff')};

  border-radius: 50%;
  border: 1px dashed #dddddd;
  display: block;
  position: relative;
  cursor: pointer;
  align-self: center;

  &::after {
    content: 'Adicionar foto';
    font-size: 16px;
    font-weight: bold;
    color: #dddddd;
    display: ${(props) => (props.preview ? 'none' : 'block')};
    cursor: pointer;
    width: 110px;
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translateX(-50%);
  }

  input {
    opacity: 0;
    width: 150px;
    cursor: pointer;
    height: 150px;
  }

  svg {
    display: ${(props) => (props.preview ? 'none' : 'block')};
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    position: absolute;
    top: 0;
  }
`;

export const TextInput = styled.label`
  margin-top: 16px;
  display: block;

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

  span {
    font-size: 14px;
    font-weight: bold;
    color: #444444;
    display: block;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    height: 45px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    font-size: 16px;
    color: #999999;
    padding-left: 15px;
  }
`;
