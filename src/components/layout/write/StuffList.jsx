import React from 'react';
import styled from 'styled-components';
import Stuff from '../../common/list/Stuff';

const StuffContentsList = styled.ul`
  padding: 64px 0 80px;
  overflow: hidden;
`;

function StuffList({ data }) {
  return (
    <StuffContentsList>
      {data?.map((stuff) => {
        const { attachmentUrl, category, createAt, creatorId, input } = stuff;
        return (
          <Stuff
            thumb={attachmentUrl}
            matter={input}
            time={createAt}
            creatorId={creatorId}
            category={category}
            key={createAt}
          />
        );
      })}
    </StuffContentsList>
  );
}

export default StuffList;
