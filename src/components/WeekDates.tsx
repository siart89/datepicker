import React from 'react';
import styled from 'styled-components';

import { DayInfo } from '../models';
import SingleDate from './SingleDate';

type Props = {
  weekDates: DayInfo[],
  className?: string
};

const WeekDates: React.FC<Props> = (props) => {
  return (
    <StyledWrapper className={props.className}>
      {props.weekDates.map((day, idx) => {
        return (
          <SingleDate
            key={idx}
            dayInfo={day}
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