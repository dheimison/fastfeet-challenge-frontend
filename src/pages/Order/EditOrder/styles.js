import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 900px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 27px 0 27px 0;

  > h1 {
    font-size: 24px;
    font-weight: bold;
    color: #444444;
  }

  > nav {
    display: flex;
  }
`;

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

export const WhiteBox = styled.div`
  width: 900px;
  height: 224px;
  background: #ffffff;
  border-radius: 4px;
  padding: 26px 30px 36px 30px;

  > div {
    display: flex;
    justify-content: space-between;

    > label {
      width: 50%;

      > div > div {
        height: 45px;
      }

      > div > div > div > div > div > input {
        font-size: 16px !important;
        color: #999999 !important;
      }

      & + label {
        margin-left: 30px;
      }

      > span {
        font-size: 14px;
        font-weight: bold;
        color: #444444;
        display: block;
        margin-bottom: 10px;
      }
    }
  }

  > label {
    margin-top: 16px;
    display: block;

    > span {
      font-size: 14px;
      font-weight: bold;
      color: #444444;
      display: block;
      margin-bottom: 10px;
    }

    > input {
      width: 100%;
      height: 45px;
      border: 1px solid #dddddd;
      border-radius: 4px;
      font-size: 16px;
      color: #999999;
      padding-left: 15px;
    }
  }
`;
