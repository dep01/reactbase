import Moment from 'moment';
import create from 'zustand';

export const globalStore = create(set => ({
  isLoading: false,
  setLoading: isLoading => set({isLoading}),
}));

export function SysCurrencyTransform({num = 0, currency = 'IDR'}) {
  return (
    currency + ' ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  );
}

export function SysDateTransform({
  date = '',
  type = 'long',
  checkIsToDay = false,
  lang = 'en',
}) {
  const current = new Date();
  const dateFormat = new Date(date);
  const month = dateFormat.getMonth();
  const year = dateFormat.getFullYear();
  const day = dateFormat.getDate();
  const hour = dateFormat.getHours();
  const minutes = dateFormat.getMinutes();
  let fullOfdate = '';
  if (checkIsToDay) {
    if (
      Moment(current).format('yyyy-MM-DD') ==
      Moment(dateFormat).format('yyyy-MM-DD')
    ) {
      fullOfdate = hour + ':' + minutes;
    } else {
      fullOfdate =
        day + ' ' + SysMonthTransform(month, type, lang) + ' ' + year;
    }
  } else {
    fullOfdate = day + ' ' + SysMonthTransform(month, type, lang) + ' ' + year;
  }
  return fullOfdate;
}
export function SysMonthTransform(val, type = 'long', lang = 'en') {
  var longMonth = [
    'January',
    'February',
    'March',
    'April',
    'Mei',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  var shortMonth = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  if (lang == 'in') {
    longMonth = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'July',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ];
    shortMonth = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Mei',
      'Jun',
      'Jul',
      'Agu',
      'Sep',
      'Okt',
      'Nov',
      'Des',
    ];
  }
  if (type == 'long') {
    return longMonth[val];
  } else {
    return shortMonth[val];
  }
}
