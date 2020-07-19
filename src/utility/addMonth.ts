export const addMonth = (date: Date, count: number): Date => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const nextMonthCount = month + count;

    if (nextMonthCount <= month && count !== 0) {
        const yearShift = Math.floor(count / 12) + 1;
        const dateWithNewYear = new Date(new Date(date).setFullYear(year + yearShift))
        return new Date(new Date(dateWithNewYear).setMonth(nextMonthCount))
    }
    return new Date(new Date(date).setMonth(nextMonthCount))
};
