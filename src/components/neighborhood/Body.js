import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import List from './List';
import getLocation from './actions';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  width: 379px;
  height: 40px;
  border-radius: 4px;
  outline: none;
  color: white;
  background-color: #ff8a3d;
`;

const StyledSpan = styled.span`
  font-size: 13px;
  font-weight: bold;
  vertical-align: middle;
  line-height: 50px;
`;

const Body = (props) => {
  const { load } = props;
  return (
    <StyledWrapper>
      <StyledButton onClick={getLocation}>현재위치로 찾기</StyledButton>
      <StyledSpan>근처 동네</StyledSpan>
    </StyledWrapper>
  );
};

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = (dispatch) => ({
  load: () => dispatch({ type: 'LOAD', mode: 'LOAD' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Body);
