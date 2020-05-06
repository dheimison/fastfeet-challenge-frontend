import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  background: ${(props) => props.colors.secondary};
  border-radius: 50%;
  text-transform: uppercase;

  span {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.colors.primary};
    font-size: ${(props) => `${props.font}px`};
  }
`;
