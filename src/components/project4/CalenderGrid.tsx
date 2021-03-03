import { Moment } from 'moment';
import styled from 'styled-components';

const GridWrapper = styled.div<{ isHeader: boolean }>`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1px;
  background-color: #404040;
  ${({ isHeader }) => isHeader && 'border-bottom:1px solid #404C4D'};
`;

const CellWrapper = styled.div<{
  isWeekend: boolean;
  isSelectedMonth: boolean;
}>`
  min-width: 140px;
  min-height: 80px;
  color: #dddcdd;
  font-weight: 600;
  background-color: ${({ isWeekend }) => (isWeekend ? '#272829' : '#1E1F21')};
  color: ${({ isSelectedMonth }) => (isSelectedMonth ? '#DDDDDD' : '#555759')};
`;

const RowInCell = styled.div<{ justifyContent: string }>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
`;

const DayWrapper = styled.div`
  height: 41px;
  width: 41px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px; ;
`;

const CurrentDay = styled.div`
  height: 50%;
  width: 50%;
  background: #f00;
  font-size: 16px;
  color: #000000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = {
  startDay: Moment;
  isCurrentDay: (curDay: Moment) => boolean;
  isSelectedMonth: (curDay: Moment) => boolean;
};

const CalenderGrid = ({ startDay, isCurrentDay, isSelectedMonth }: Props) => {
  const day = startDay.clone().subtract(1, 'day');
  console.log(day);

  const daysArray = [...Array.from({ length: 42 })].map(() =>
    day.add(1, 'day').clone(),
  );
  return (
    <>
      <GridWrapper isHeader={false}>
        {daysArray.map((dayItem) => (
          <CellWrapper
            key={dayItem.unix()}
            isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
            isSelectedMonth={isSelectedMonth(dayItem)}
          >
            <RowInCell justifyContent="flex-end">
              <DayWrapper>
                {!isCurrentDay(dayItem) && `${dayItem.format('D')}日`}
                {isCurrentDay(dayItem) && (
                  <>
                    <CurrentDay>{dayItem.format('D')}</CurrentDay>
                    <div>日</div>
                  </>
                )}
              </DayWrapper>
            </RowInCell>
          </CellWrapper>
        ))}
      </GridWrapper>
    </>
  );
};

export default CalenderGrid;
