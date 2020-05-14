import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 1200px;

    > h1 {
      font-size: 24px;
      font-weight: bold;
      color: #444444;
      margin: 35px 0;
    }

    > div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 22px;

      > label {
        position: relative;
        border: none;

        > svg {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 16px;
        }

        > input {
          height: 36px;
          width: 237px;
          padding: 9px 0 8px 40px;
          font-size: 14px;
          color: #999999;
          border: 1px solid #dddddd;
          border-radius: 4px;
          font-weight: 400;
        }
      }

      > button {
        height: 36px;
        width: 142px;
        background: #7d40e7;
        border: none;
        border-radius: 4px;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;

        > svg {
          margin-right: 2px;
        }
      }
    }
  }
`;
