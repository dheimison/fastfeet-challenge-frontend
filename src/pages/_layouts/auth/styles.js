import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
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
`;
