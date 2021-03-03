import styled from 'styled-components';
import moment from 'moment';

const Wrap = styled.div`
  height: 85px;
  background-color: #1e1f22;
  color: #dddddd;
  border-bottom: solid 1px #404040;
`;

const DivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Label = styled.span`
  font-size: 28px;
  font-weight: 600;
  color: #dcdddd;
`;

const ButtonsWrapper = styled('div')`
  display: flex;
  align-items: center;
  padding-right: 6px;
`;

const ButtonWrapper = styled('button')`
  color: #e6e6e6;
  border: unset;
  background-color: #565759;
  height: 20px;
  width: 20px;
  margin-right: 4px;
  border-radius: 4px;
  outline: unset;
  cursor: pointer;
`;

const TodayButton = styled(ButtonWrapper)`
  color: #e6e6e6;
  padding-right: 6px;
  width: 50px;
  height: 18px;
`;

const DayOfTheWeek = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(7, 1fr);
  color: #d8d8d9;
`;
const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 6px;
  padding-top: 10px;
`;

type Props = {
  today: moment.Moment;
  prevHandler: () => void;
  todayHandler: () => void;
  nextHandler: () => void;
};

const Monitor = ({ today, nextHandler, prevHandler, todayHandler }: Props) => (
  <>
    <Wrap>
      <DivWrapper>
        <Label>
          {`${today.format('YYYY')}年`}
          {today.format('MMMM')}
        </Label>
        <ButtonsWrapper>
          <ButtonWrapper onClick={prevHandler}> &lt; </ButtonWrapper>
          <TodayButton onClick={todayHandler}>今日</TodayButton>
          <ButtonWrapper onClick={nextHandler}> &gt; </ButtonWrapper>
        </ButtonsWrapper>
      </DivWrapper>
      <DayOfTheWeek>
        {[
          ...Array.from({ length: 7 }).map((_, i) => (
            <Flex>{moment().day(i).format('ddd')}</Flex>
          )),
        ]}
      </DayOfTheWeek>
    </Wrap>
  </>
);

export default Monitor;
