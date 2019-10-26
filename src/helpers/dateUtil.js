import moment from "moment";

const YYYY_MM_DD = 'YYYY-MM-DD';
const HH_mm_ss = 'HH:mm:ss';
const YYYY_MM_DD_HH_MM = 'DD/MM/YYYY, HH:mm';
const DD_MM_YYYY = 'DD/MM/YYYY';
const HH_MM = 'HH:mm';

export const convertDateTo_YYYY_MM_DD = (date) => {
  return moment(date, YYYY_MM_DD).format(YYYY_MM_DD);
};

export const convertDateTo_HH_mm_ss = (date) => {
  return moment(date, HH_mm_ss).format(HH_mm_ss);
};

export const convertDateToDisplayDateAndTime = (date) => {
  if (date) {
    return moment(date).format(YYYY_MM_DD_HH_MM);
  }
  return '';
}

export const convertDateToDisplayDate = (date) => {
  if (date) {
    return moment(date).format(DD_MM_YYYY);
  }
  return '';
}
export const convertDateToDisplayTime = (date) => {
  if (date) {
    return moment(date).format(HH_MM);
  }
  return '';
}
export const convertDateTo_YYYY_MM_DD_T_HH_mm_ss = (date, time) => {
  if (time) {
    return convertDateTo_YYYY_MM_DD(date) + 'T' + convertDateTo_HH_mm_ss(time);
  }
  return convertDateTo_YYYY_MM_DD(date) + 'T' + '00:00:00'
}

export const isDateBetween = (date, startDate, endDate) => {
  return moment(date).isBetween(startDate, endDate, '[]');
};

export const isSame = (date1, date2) => {
  return moment(date1).isSame(date2);
};

const getMillisecondsFromDate = (date) => {
  return (new Date(date)).getTime();
}

const getMillisecondsFromMinutes = (minutes) => {
  return minutes * 60000;
}
const getDateFromMilliseconds = (milliseconds) => {
  return moment(milliseconds).format(YYYY_MM_DD + 'T' + HH_mm_ss);
}

export const addOffset = (date, offset) => {
  const milisecs = getMillisecondsFromDate(date);
  const offsetMiliSecs = getMillisecondsFromMinutes(offset);
  return getDateFromMilliseconds(milisecs + offsetMiliSecs);;
}
