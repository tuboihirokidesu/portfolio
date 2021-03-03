import 'moment/locale/ja';
import moment, { Moment } from 'moment';
import styled from 'styled-components';
import { useState } from 'react';
import { CalenderGrid, Header, Monitor } from 'components/project4';

const ShadowWrapper = styled('div')`
  border-top: 1px solid #737374;
  border-left: 1px solid #464648;
  border-right: 1px solid #464648;
  border-bottom: 2px solid #464648;
  height: 100vh;
  width: 100vw;
  min-height: 542px;
  min-width: 639px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0 1px #1a1a1a, 0 8px 20px 6px #888;
`;

const Calender = () => {
  const [today, setToday] = useState(moment());

  const startDay = today.clone().startOf('month').startOf('week');

  const isCurrentDay = (curDay: Moment) => moment().isSame(curDay, 'day');
  const isSelectedMonth = (curDay: Moment) => today.isSame(curDay, 'month');

  const prevHandler = () =>
    setToday((prev) => prev.clone().subtract(1, 'month'));
  const todayHandler = () => setToday(moment());
  const nextHandler = () => setToday((next) => next.clone().add(1, 'month'));

  return (
    <ShadowWrapper>
      <Header />
      <Monitor
        today={today}
        prevHandler={prevHandler}
        todayHandler={todayHandler}
        nextHandler={nextHandler}
      />
      <CalenderGrid
        startDay={startDay}
        isCurrentDay={isCurrentDay}
        isSelectedMonth={isSelectedMonth}
      />
    </ShadowWrapper>
  );
};

export default Calender;
