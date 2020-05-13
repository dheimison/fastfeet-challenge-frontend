import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;

  button {
    background: none;
    border: none;

    &:active {
      position: relative;
      top: 5px;
    }
  }

  ul {
    height: 120px;
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: #fff;
    box-shadow: 0px 0px 2px #00000026;
    border-radius: 10px;
    z-index: 10;
    padding: 0 10px;

    position: absolute;
    right: 50%;
    top: 35px;
    transform: translateX(50%);

    &::before {
      content: '';
      display: block;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid white;
      position: absolute;
      top: -10px;
      right: 50%;
      transform: translateX(50%);
      filter: drop-shadow(0px -2px 2px #0000001a);
    }

    li {
      width: 100%;
      margin-bottom: 6px;
      padding-top: 6px;

      + li {
        border-top: 1px solid #eeeeee;
      }
      button {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        font-size: 16px;
        color: #999999;

        background: none;
        border: none;

        svg {
          margin-right: 5px;
        }
      }
    }
  }
`;
