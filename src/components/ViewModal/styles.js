import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

export const WhiteBox = styled.div`
  height: 353px;
  width: 450px;
  background: #fff;
  border-radius: 4px;
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  margin-top: 25px;

  p {
    font-size: 14px;
    font-weight: bold;
    color: #444444;
    margin-bottom: 8px;
  }

  span {
    font-size: 16px;
    color: #666666;
    margin-bottom: 6px;
  }
`;

export const OrderDate = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 12px;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  padding: 8px 0 11px 0;

  > p {
    font-size: 14px;
    font-weight: bold;
    color: #444444;

    + p {
      font-size: 16px;
      color: #666666;
      margin-top: 6px;

      > span {
        font-weight: normal;
        margin-left: 5px;
      }
    }
  }
`;

export const OrderSignature = styled.div`
  margin-left: 25px;
  margin-top: 10px;

  display: flex;
  flex-direction: column;

  p {
    font-size: 14px;
    font-weight: bold;
    color: #444444;
  }

  img {
    height: 60px;
    align-self: center;
    margin-top: 20px;
  }

  span {
    margin-top: 30px;
    align-self: center;
    font-weight: bold;
  }
`;
