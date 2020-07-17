import React from 'react';
import styled from 'styled-components';
import { DAY_OF_WEEK_DE } from '../constants';

type Props = {
  dayLength?: number;
  className?: string;
}

const WeekDays: React.FC<Props> = (props) => {
  const {
    dayLength
  } = props;

  return (
    <WeekDaysWrapper className={props.className}>
      {DAY_OF_WEEK_DE.map((day, idx) => {
        const dayName = dayLength ? day.substr(0, dayLength) : day;
        return (
          <div
            key={idx}
          >
            {dayName}
          </div>
        )
      })

      }
    </WeekDaysWrapper>
  )
};

const WeekDaysWrapper = styled.div`

`;

export default WeekDays;