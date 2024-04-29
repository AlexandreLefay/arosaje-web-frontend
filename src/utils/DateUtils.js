import { format, formatDistanceToNow, isMatch, isValid, isWeekend, parse, parseISO } from 'date-fns';

export const Dates = {
  /**
   * Convert date to string with local date format
   * @param date the date to be formatted
   * @return the formatted date
   */
  convertDateToLocalDateString(date) {
    return date ? format(date, 'yyyy-MM-dd') : date;
  },
  /**
   * Convert local date string to date
   * @param date the date to be formatted
   * @return the formatted date
   */
  convertLocalDateStringToDate(date) {
    const dateFormat = 'yyyy-MM-dd';
    const isValidDate = date && isMatch(date, dateFormat);
    return isValidDate ? parse(date, dateFormat, new Date()) : null;
  },
  /**
   * Convert local date time string to date time with or without millisecond
   * @param date The date to be formatted
   * @returns the formatted date
   */
  convertUTCLocalDateTimeStringToDateTime(date) {
    if (date) {
      const dateTime = parseISO(`${date}Z`);

      return isNaN(dateTime.getTime()) ? null : dateTime;
    }

    return null;
  },
  /**
   * A function returning given or today's date at 23:59:59
   * @param date optional date affected by the hour change
   * @return end of day of given or today's date
   */
  getEndOfDay(date) {
    const endOfDay = date ?? new Date();
    endOfDay.setHours(23, 59, 59, 59);
    return endOfDay;
  },
  /**
   * A function returning given or today's date at 00:00:00
   * @param date optional date affected by the hour change
   * @return start of day of given or today's date
   */
  getStartOfDay(date) {
    const startOfDay = date ?? new Date();
    startOfDay.setHours(0, 0, 0, 0);
    return startOfDay;
  },
  /**
   * A function returning a new date initialize with the given date plus the given day
   * @param date date affected by the day change
   * @param dayToAdd the number of day to add to the date
   *
   * @return a new date with the given date plus the given day
   */
  addDay(date, dayToAdd) {
    const result = new Date(date);
    result.setDate(result.getDate() + dayToAdd);
    return result;
  },
  /**
   * A function returning a new date initialize with the given date minus the given day
   * @param date date affected by the day change
   * @param dayToRemove the number of day to remove to the date
   *
   * @return a new date with the given date minus the given day
   */
  removeDay(date, dayToRemove) {
    return Dates.addDay(date, -dayToRemove);
  },
  /**
   * Returns the date representing tomorrow's start of the day (00:00:00).
   *
   * @returns {Date} - The date representing tomorrow's start of the day.
   */
  getTomorrow() {
    const result = Dates.getStartOfDay();
    result.setDate(result.getDate() + 1);
    return result;
  },
  /**
   * Methods that check if the given date is valid
   * @param date date to check
   * @returns true if valid else false
   */
  isValid(date) {
    return isValid(date);
  },
  /**
   * Methods that check if the given date is not valid
   * @param date date to check
   * @returns true if valid else false
   */
  isNotValid(date) {
    return !isValid(date);
  },
  /**
   * Method that returns the name of the given date day
   * @param date date which we want the name of the day
   * @param locale specific local timezone to get the name of the day from (if undefined, it takes the default timezone)
   * @returns the name of the day according the local timezone selected
   */
  getShortNameOfDay(date, locale) {
    return date.toLocaleDateString(locale, { weekday: 'long' }).substring(0, 3);
  },
  /**
   * Method that returns the day of month with 2 digit
   * @param date date which we want the day of the month
   * @param locale specific local timezone (if undefined, it takes the default timezone)
   * @returns the day of the month (01-31) according the local timezone selected
   */
  getDayOfMonthWith2Digit(date, locale) {
    return date.toLocaleDateString(locale, { day: '2-digit' });
  },
  /** Indicates if a date is outside of the business days
   * @param date date to check
   * @returns true if outside else false
   */
  isOutsideBusinessDays(date) {
    return isWeekend(date);
  },
  /**
   * Returns approximate difference between date and now.
   * @param date date to calculate the delta of
   * @param locale language of the approximation
   * @returns string approximately indicating the difference between the two dates
   * @example 0 ... 30 secs -> less than a minute, 30 secs ... 1 min 30 secs -> 1 minute, ...
   */
  differenceBetweenDateAndNow(date, locale) {
    return formatDistanceToNow(date, { locale });
  }
};
