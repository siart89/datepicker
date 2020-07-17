import React from 'react';
import styled from 'styled-components';
import WeekDays from './WeekDays';
import { getMonthDays } from '../utility/getMonthDays';
import WeekDates from './WeekDates';

type Props = {
  date: Date;
};

const DatePicker: React.FC<Props> = (props) => {

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
        />
      ))
      }
    </StyledWrapper>
  )
};

const StyledWrapper = styled.div`
  max-width: 330px;
  border: 1px solid gray;
  border-right: none;
  border-bottom: none;

  & > div.inner-sections {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 100%;
    /* border: 1px solid gray;
    border-right: none; */

    & > div {
      border-right:  1px solid gray;
      border-bottom:  1px solid gray;
      display: flex;
      justify-content: center;
      align-items: center;      
      height: 30px;
    }
  }
`;

export default DatePicker;

