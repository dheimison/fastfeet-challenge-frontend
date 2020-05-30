import styled from 'styled-components';

export const Container = styled.label`
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
`;
