import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Inner } from '../components/layout/Inner';
import SaleHeader from '../components/layout/sale/SaleHeader';
import useCallList from '../utils/hooks/useCallList';
import SaleBtnList from '../components/layout/sale/SaleBtnList';
import SaleStuff from '../components/layout/sale/SaleStuff';

const SaleWrap = styled.div`
  display: block;
`;

const DepthInner = styled.div`
  padding-top: 114px;
  min-height: calc(100vh);
  background-color: #f8f9fb;
`;

const SaleInner = styled(Inner)`
  background-color: #fff;
`;

const SalePage = () => {
  const [tab, setTab] = useState(1);
  const stuff = useSelector(({ stuffs }) => stuffs.data);
  const user = useSelector((state) => state.user.currentUser?.email);

  const castingFunc = () => {
    if (user) {
      const uidRegex = /(.*?)[@]/g.exec(user)[0].replace(/@/gi, '');
      return uidRegex;
    }
  };

  const onClick = (id) => setTab(id);

  const history = useHistory();

  useCallList();

  return (
    <SaleWrap>
      <SaleHeader history={history} tab={tab} onClick={onClick} />
      <DepthInner>
        {tab === 1 &&
          stuff
            ?.filter((item) => item.creatorId === castingFunc())
            .map((item) => {
              const { id, region, attachmentUrl, category, createAt, creatorId, input } = item;
              return (
                <div key={createAt}>
                  <SaleInner>
                    <SaleStuff
                      no={id}
                      thumb={attachmentUrl}
                      matter={input}
                      time={createAt}
                      creatorId={creatorId}
                      category={category}
                      region={region}
                      page
                    />
                  </SaleInner>
                  <SaleBtnList />
                </div>
              );
            })}
      </DepthInner>
    </SaleWrap>
  );
};

export default SalePage;
