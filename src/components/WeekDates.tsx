import React from 'react';
import styled from 'styled-components';

import { DayInfo } from '../models';
import SingleDate from './SingleDate';
import { getDateInfo } from '../utility/getDateInfo';

type Props = {
  weekDates: DayInfo[],
  className?: string;
  selectedDate: Date;
  setNewDate: (date: Date) => void 
};

const WeekDates: React.FC<Props> = (props) => {
  
  const currentDate = React.useMemo(() => {
    return new Date()
  }, []);

  const selectedDateStr = React.useMemo(() => {
    return  getDateInfo(props.selectedDate)
  }, [props.selectedDate]);

  return (
    <StyledWrapper className={props.className}>
      {props.weekDates.map((day, idx) => {
        const currentDateStr = getDateInfo(day.fullDate);
        let isSelected = false;
        if (currentDateStr === selectedDateStr) {
          isSelected = true
        };
        return (
          <SingleDate
            key={idx}
            dayInfo={day}
            isSelected={isSelected}
            nowDate={currentDate}
            setNewDate={props.setNewDate}
          />
        )
      })
      }
    </StyledWrapper>
  )
};

const StyledWrapper = styled.div`

`;

export default WeekDates;