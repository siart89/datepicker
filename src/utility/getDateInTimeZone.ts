import { timeZones } from "../constants/timeZones"

const getTimeInTimeZone = (timeZone: string): string => {
    return new Date().toLocaleString('de-De', {timeZone})
}