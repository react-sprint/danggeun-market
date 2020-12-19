import React from 'react';
import styled from 'styled-components';
import Stuff from '../../common/list/Stuff';

const StuffContentsList = styled.ul`
  padding: ${(props) => props.category? '0':'64px 0 80px'};
  overflow: hidden;
`;

function StuffList({ data, category }) {
  return (
    <StuffContentsList category={category}>
      {data?.map((stuff) => {
        const { id, region, attachmentUrl, category, createAt, creatorId, input } = stuff;
        return (
          <Stuff
            no={id}
            thumb={attachmentUrl}
            matter={input}
            time={createAt}
            creatorId={creatorId}
            category={category}
            region={region}
            key={createAt}
          />
        );
      })}
    </StuffContentsList>
  );
}

export default StuffList;
