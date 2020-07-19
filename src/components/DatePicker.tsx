import React from 'react';
import styled from 'styled-components';

import Calendar from './Calendar';

type Props = {
  monthShow: number;
  selectedDate: Date;
  setNewDate: (date: Date) => void 
};

const DatePicker: React.FC<Props> = (props) => {

  const datesForCalendar = React.useMemo(() => {
    const dateNow = new Date();
    const result: Date[] = [];
    result.push(dateNow);

    for (let i = 1; i < props.monthShow; i++) {
      const nextDate = new Date(new Date().setMonth(dateNow.getMonth() + i));
      result.push(nextDate);
    }
    return result;
  }, [props.monthShow]);

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

