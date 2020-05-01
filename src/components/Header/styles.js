import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  background: #fff;
  height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  img {
    width: 135px;
    height: 26px;
    padding: 0 26px 0 30px;
    border-right: 1px solid #dddddd;
    box-sizing: content-box;
  }

  nav {
    margin-left: 30px;
    text-transform: uppercase;
  }

  aside {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 30px;
    align-items: flex-end;

    span {
      font-size: 14px;
      font-weight: bold;
      color: #666666;
    }

    button {
      background: none;
      border: none;
      font-size: 14px;
      color: #de3b3b;
    }
  }
`;

export const LinkNavigation = styled(Link)`
  font-size: 15px;
  font-weight: bold;
  color: ${(props) => (props.selected ? '#444444' : '#999999')};

  + a {
    margin-left: 20px;
  }
`;
