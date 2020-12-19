import styled from 'styled-components';

export const Thumbnail = styled.div`
  position: relative;
  width: 32%;
  max-height: 200px;

  &::after {
    content: '';
    display: block;
    padding-top: 100%;
  }

  & div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: url(${({ thumb }) => thumb}) center center/cover no-repeat;
  }
`;
