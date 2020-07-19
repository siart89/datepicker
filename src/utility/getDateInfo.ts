/**
 * Returning type of string is dd.MM.yyyy;
 */
export const getDateInfo = (date: Date): string => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return `${day}.${month}.${year}`
}