import React from 'react';
import Clock from 'react-live-clock';
import { TimerBlock, TimerLineBlock } from '../../styles/Timer';

const Timer = () => {
  return (
    <>
      <TimerBlock>
        <Clock format="YYYY년 MM월 DD일 HH:mm:ss" ticking />
        <TimerLineBlock />
      </TimerBlock>
    </>
  );
};

export default Timer;
