export const  subMonth = (date: Date, count: number) : Date => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const prevMonthCount = month - count;

    if (prevMonthCount >= month && count !== 0) {
        const yearShift = Math.floor(count / 12) + 1;
        const dateWithNewYear = new Date(new Date(date).setFullYear(year - yearShift))
        return new Date(new Date(dateWithNewYear).setMonth(prevMonthCount))
    };

    return new Date(new Date(date).setMonth(prevMonthCount))
};
