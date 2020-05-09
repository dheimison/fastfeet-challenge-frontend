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

    > table {
      width: 100%;

      tr {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
      }

      thead {
        tr {
          margin-bottom: 15px;

          th {
            width: 10vw;
            max-width: 155px;
            font-size: 16px;
            font-weight: bold;
            color: #444444;
            text-align: center;

            &:first-child {
              width: 80px;
            }
          }
        }
      }

      > tbody > tr {
        height: 57px;
        background: #fff;
        margin-bottom: 21px;

        td,
        button {
          width: 10vw;
          max-width: 155px;
          text-align: center;
        }

        td {
          color: #666666;
          font-size: 16px;
          position: relative;

          span {
            vertical-align: middle;
          }
        }

        td:first-child {
          width: 80px;
        }
      }
    }
  }
`;

export const Status = styled.span`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;

  height: 25px;
  width: 120px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;

  ${(props) => {
    switch (props.status) {
      case 'entregue':
        return 'background: #dff0df; color: #2ca42b;';
      case 'pendente':
        return 'background: #f0f0df; color: #c1bc35;';
      case 'retirada':
        return 'background: #bad2ff; color: #4d85ee;';
      case 'cancelada':
        return 'background: #fab0b0; color: #de3b3b;';
      default:
        break;
    }
  }}

  &::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 5px;

    ${(props) => {
      switch (props.status) {
        case 'entregue':
          return 'background: #2ca42b;';
        case 'pendente':
          return 'background: #c1bc35;';
        case 'retirada':
          return 'background: #4d85ee;';
        case 'cancelada':
          return 'background: #de3b3b;';
        default:
          break;
      }
    }}
  }
`;

export const ModalButton = styled.button`
  background: none;
  border: none;

  &:active {
    position: relative;
    top: 5px;
  }
`;

export const MiniModal = styled.ul`
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
`;

export const Action = styled.div`
  width: 100%;
  position: relative;
`;
