import styled from 'styled-components';

export const Table = styled.table`
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
`;
