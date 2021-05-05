import {store} from '@risingstack/react-easy-state';
import Moment from 'moment';

export const global_state = store({
  isLoading: false,
  netInfo: false,
  toast: null,
  setLoading(val) {
    global_state.isLoading = val;
  },
  setToastRef(ref) {
    global_state.toast = ref;
  },
});

export function SysCurrencyTransform({num = 0, currency = 'IDR'}) {
  return (
    currency + ' ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  );
}

export function SysDateTransform({
  date = '',
  type = 'long',
  checkIsToDay = false,
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
      fullOfdate = day + ' ' + SysMonthTransform(month, type) + ' ' + year;
    }
  } else {
    fullOfdate = day + ' ' + SysMonthTransform(month, type) + ' ' + year;
  }
  return fullOfdate;
}
export function SysMonthTransform(val, type = 'long') {
  const longMonth = [
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
  const shortMonth = [
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
  if (type == 'long') {
    return longMonth[val];
  } else {
    return shortMonth[val];
  }
}
