import Moment from 'moment';
import create from 'zustand';

export const global_base_state = props => {
  return {
    toastRef: props?.toastRef ?? null,
    isLoading: props?.isLoading ?? true,
    modal_message: props?.modal_message ?? '',
    modal_title: props?.modal_title ?? '',
    modal_icon: props?.modal_icon ?? '',
    show_modal: props?.show_modal ?? false,
    modal_confirmation_message: props?.modal_confirmation_message ?? '',
    modal_confirmation_title: props?.modal_confirmation_title ?? '',
    modal_confirmation_icon: props?.modal_confirmation_icon ?? '',
    show_confirmation_modal: props?.show_confirmation_modal ?? false,
    modal_confirmation_ok: props?.modal_confirmation_ok ?? null,
  };
};
export const globalStore = create(set => global_base_state());
export const setter_global_state = {
  toastRef: (value = null) => globalStore.setState({toastRef: value}),
  isLoading: (value = false) => globalStore.setState({isLoading: value}),
  show_modal: (value = false) => globalStore.setState({show_modal: value}),
  modal_message: (value = '') => globalStore.setState({modal_message: value}),
  modal_title: (value = '') => globalStore.setState({modal_title: value}),
  modal_icon: (value = '') => globalStore.setState({modal_icon: value}),
  show_confirmation_modal: (value = false) =>
    globalStore.setState({show_confirmation_modal: value}),
  modal_confirmation_title: (value = '') =>
    globalStore.setState({modal_confirmation_title: value}),
  modal_confirmation_message: (value = '') =>
    globalStore.setState({modal_confirmation_message: value}),
  modal_confirmation_icon: (value = '') =>
    globalStore.setState({modal_confirmation_icon: value}),
  modal_confirmation_ok: (value = null) =>
    globalStore.setState({
      modal_confirmation_ok: value,
    }),
};
export function globalToast({message = '', type = ''}) {
  const toastRef = globalStore.getState().toastRef;
  toastRef?.current?.show(message, {type}) ?? null;
}
export function globalModal({
  message = '',
  title = 'ERROR!',
  icon = 'close-circle-outline',
}) {
  setter_global_state.modal_icon(icon);
  setter_global_state.modal_title(title);
  setter_global_state.modal_message(message);
  setter_global_state.show_modal(true);
}

export function globalModalConfirmation({
  action,
  message = '',
  title = 'CONFIRM',
  icon = 'alert-circle-outline',
}) {
  setter_global_state.modal_confirmation_icon(icon);
  setter_global_state.modal_confirmation_title(title);
  setter_global_state.modal_confirmation_message(message);
  setter_global_state.modal_confirmation_ok(action);
  setter_global_state.show_confirmation_modal(true);
}
export const toastProps = {
  placement: {
    BOTTOM: 'bottom',
    TOP: 'top',
    CENTER: 'center',
  },
  animationType: {
    SLIDE_IN: 'slide-in',
    ZOOM_IN: 'zoom-in',
  },
  type: {
    SUCCESS: 'success',
    WARNING: 'warning',
    DANGER: 'danger',
    NORMAL: 'normal',
  },
};
export function SysCurrencyTransform({num = 0, currency = 'IDR'}) {
  return (
    currency + ' ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  );
}
export function SysGetCurrentTime({lang = 'en', type = 'long'}) {
  const date = new Date();
  return {
    time: `${addZero({num: date.getHours()})}:${addZero({
      num: date.getMinutes(),
    })}:${addZero({num: date.getSeconds()})}`,
    day: SysDay({date: date, lang: lang}),
    date: SysDateTransform({date: date, type: type, lang: lang}),
  };
}
export function addZero({num = 0}) {
  if (num < 10) {
    return `0${num}`;
  }
  return `${num}`;
}
export function SysDay({date = '', lang = 'en'}) {
  var days = [
    'Sunday',
    'Monday',
    'Thuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dateFormat = new Date(date);
  if (lang != 'en') {
    days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  }
  return days[dateFormat.getDay()];
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
