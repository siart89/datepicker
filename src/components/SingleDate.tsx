import React from 'react';
import styled, { css } from 'styled-components';

import { DayInfo } from '../models';

type Props = {
  dayInfo: DayInfo;
  isSelected: boolean;
  nowDate: Date;
  setNewDate: (date: Date) => void 
};

const SingleDate: React.FC<Props> = (props) => {
  const {
    dayInfo: {
      date,
      isCurrentMonth,
      fullDate,
    },
    nowDate,
    isSelected,
    setNewDate
  } = props;

  const isDayBefore = React.useMemo(() => {
    const nowDateInfo = {
      date: nowDate.getDate(),
      month: nowDate.getMonth(),
      year: nowDate.getFullYear()
    };

    const currentDateInfo = {
      date: fullDate.getDate(),
      month: fullDate.getMonth(),
      year: fullDate.getFullYear()
    };

    if (currentDateInfo.year < nowDateInfo.year) {
      return true
    }

    if (currentDateInfo.year === nowDateInfo.year && currentDateInfo.month < nowDateInfo.month) {
      return true;
    }

    if (currentDateInfo.year === nowDateInfo.year 
      && currentDateInfo.month === nowDateInfo.month 
      && currentDateInfo.date < nowDateInfo.date) {
      return true;
    }
    
    return false
  }, [nowDate, fullDate]);


  const onClickHandler = () => {
    if (isSelected || isDayBefore || !isCurrentMonth) return;
    setNewDate(fullDate)
  }

  return (
    <SinglDateWeapper 
      isSelected={isSelected}
      isCurrentMonth={isCurrentMonth}
      isDayBefore={isDayBefore}
      onClick={onClickHandler}
    >
      {isCurrentMonth ? date : null}
    </SinglDateWeapper>
  )
};

type StylesProps = {
  isSelected: boolean;
  isCurrentMonth: boolean;
  isDayBefore: boolean;
}

const SinglDateWeapper = styled.div<StylesProps>`
  border-radius: 100%;
  height: 44px;
  margin: 2px 0;


  ${props => props.isCurrentMonth && !props.isDayBefore && css`

    &:hover {
      border: 1px solid rgb(0, 129, 255);
    }
    ${props.isSelected && css`
    background-color: rgb(0, 129, 255);
    color: rgb(255, 255, 255);
  ` }
  `}

  ${props => props.isDayBefore && props.isCurrentMonth && css`
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.32);
  `}
`;

export default SingleDate;