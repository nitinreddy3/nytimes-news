import moment from 'moment';

const DATE_FORMAT = "dddd, MMMM Do YYYY";

export function dateFormat (date) {
    let dateData = moment(date);
    return dateData.format(DATE_FORMAT);
}