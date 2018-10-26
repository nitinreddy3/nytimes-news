import moment from 'moment';
import { DATE_FORMAT } from './../constants';

/**
 * Date format utility to format the date to a specific format
 * @param {date} date 
 */
export function dateFormat (date) {
    let dateData = moment(date);
    return dateData.format(DATE_FORMAT);
}