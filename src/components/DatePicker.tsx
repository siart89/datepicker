import React from 'react';
import styled from 'styled-components';

import Calendar from './Calendar';
import { addMonth } from '../utility/addMonth';
import { subMonth } from '../utility/subMonth';

type Props = {
  monthShow: number;
  selectedDate: Date;
  setNewDate: (date: Date) => void;
  monthsToSlide?: number;
};

const DatePicker: React.FC<Props> = (props) => {

  const [state, setState] = React.useState(new Date())

  const datesForCalendar = React.useMemo(() => {
    let dateNow = new Date(state);
    const result: Date[] = [];
    result.push(dateNow);

    for (let i = 1; i < props.monthShow; i++) {
      const nextMonthNumber = dateNow.getMonth() + i;
      const nextDate = new Date(new Date(state).setMonth(nextMonthNumber));
      result.push(nextDate);
    }
    return result;
  }, [props.monthShow, state]);

  const nextButtonHandler = () => {
    const monthToSlide = props.monthsToSlide ?? 1;
    const nextMonth = addMonth(state, monthToSlide);
    setState(nextMonth)
  }

  const prevButtonHandler = () => {
    const monthToSlide = props.monthsToSlide ?? 1;
    const prevMonth = subMonth(state, monthToSlide);

    const currentYear = new Date().getFullYear();
    const currentMonthNumber = new Date().getMonth();

    const prevMonthYear = prevMonth.getFullYear();
    const prevMonthNumber = prevMonth.getMonth();
    if ((currentYear < prevMonthYear)
      || (currentYear === prevMonthYear && currentMonthNumber > prevMonthNumber)) {
      return setState(new Date())
    }
    setState(prevMonth)
  }


  return (
    <StyledWrapper>
      {datesForCalendar.map((date, idx) => {
        return (
          <Calendar
            key={idx}
            date={date}
            selectedDate={props.selectedDate}
            setNewDate={props.setNewDate}
          />
        )
      })
      }
      <button onClick={nextButtonHandler}>
        Next
      </button>
      <button onClick={prevButtonHandler}>
        Prev
      </button>
    </StyledWrapper>
  )
};

const StyledWrapper = styled.div`
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: space-between;
  padding: 12px 32px 24px;
`;

export default DatePicker;

