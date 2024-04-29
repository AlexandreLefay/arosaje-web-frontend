import Nullable from '@appTypes/global/Nullable';
import { format, isMatch, parse, parseISO } from 'date-fns';

export const Dates = {
  /**
   * Convert date to string with local date format
   * @param date the date to be formatted
   * @return the formatted date
   */
  convertDateToLocalDateString(date: Nullable<Date>): Nullable<string> {
    return date ? format(date, 'yyyy-MM-dd') : date;
  },
  /**
   * Convert local date string to date
   * @param date the date to be formatted
   * @return the formatted date
   */
  convertLocalDateStringToDate(date: Nullable<string>): Nullable<Date> {
    const dateFormat = 'yyyy-MM-dd';
    const isValidDate = date && isMatch(date, dateFormat);
    return isValidDate ? parse(date, dateFormat, new Date()) : null;
  },
  /**
   * Convert local date time string to date time with or without millisecond
   * @param date The date to be formatted
   * @returns the formatted date
   */
  convertUTCLocalDateTimeStringToDateTime(date: Nullable<string>): Nullable<Date> {
    if (date) {
      const dateTime = parseISO(`${date}Z`);
      return isNaN(dateTime.getTime()) ? null : dateTime;
    }
    return null;
  }
};
