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
  height: 24px;
  font-family: sans-serif;
  font-weight: 450;
  font-size: 14px;
  letter-spacing: 0px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.54);
`;

export default WeekDays;