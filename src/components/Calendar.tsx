import React from 'react';
import styled from 'styled-components';
import WeekDays from './WeekDays';
import { getMonthDays } from '../utility/getMonthDays';
import WeekDates from './WeekDates';

type Props = {
  date: Date;
  selectedDate: Date;
  setNewDate: (date: Date) => void 
};

const Calendar: React.FC<Props> = (props) => {

  const daysOfMonth = React.useMemo(() => {
    return getMonthDays(props.date)
  }, [props.date])

  return (
    <StyledWrapper>
      <WeekDays
        dayLength={1}
        className="inner-sections"
      />
      {daysOfMonth.map((dayItem, idx) => (
        <WeekDates
          key={idx}
          weekDates={dayItem}
          className="inner-sections"
          selectedDate={props.selectedDate}
          setNewDate={props.setNewDate}
        />
      ))
      }
    </StyledWrapper>
  )
};

const StyledWrapper = styled.div`

  & > div.inner-sections {
    display: grid;
    grid-template-columns: repeat(7, 44px);
    width: 100%;

    & > div {
      display: flex;
      justify-content: center;
      align-items: center;      
      box-sizing: border-box;

      font-family: sans-serif;
      font-weight: 450;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export default Calendar;

