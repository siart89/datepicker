import { DayInfo } from "../models";

export const getMonthDays = (currentDate: Date): DayInfo[][] => {
  const date = new Date(currentDate);
  const nextMonth = new Date(date.setMonth(date.getMonth() + 1));
  const lastDayOfMonth = new Date(nextMonth.setDate(0)).getDate();

  const prevMonth = new Date(date.setMonth(date.getMonth() - 1))
  const prevMonthLastDay = new Date(prevMonth.setDate(0)).getDate();
  const daysArr: DayInfo[][] = [];
  let tmpDaysArr: DayInfo[] = [];

  for (let i = 1; i <= lastDayOfMonth; i++) {

    let weekDay = getDayOfWeek(date, i);

    // feel array by days of previous month
    if (i === 1 && weekDay !== 1) {
      let daysShift = prevMonthLastDay - (weekDay - 2);
      while (daysShift <= prevMonthLastDay) {
        tmpDaysArr.push({
          date: daysShift,
          dayOfWeek: getDayOfWeek(prevMonth, daysShift),
          isCurrentMonth: false
        });
        ++daysShift
      }
    }

    tmpDaysArr.push({
      date: i,
      dayOfWeek: weekDay,
      isCurrentMonth: true
    });

    if (i === lastDayOfMonth && weekDay !== 7) {
      let nextDay = 1;
      let nextWeekDay = weekDay + 1;
      while (nextWeekDay <= 7) {
        tmpDaysArr.push({
          date: nextDay++,
          dayOfWeek: nextWeekDay++,
          isCurrentMonth: false
        })
      }
      weekDay = 7;
    };

    if (weekDay === 7) {
      daysArr.push(tmpDaysArr)
      tmpDaysArr = [];
    }
  }
  return daysArr;
}

function getDayOfWeek(date: Date, day: number): number {
  const tmpWeekday = new Date(date.setDate(day)).getDay();
  if (tmpWeekday === 0) return 7;
  return tmpWeekday;
}