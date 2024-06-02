import Moment from 'moment';
import {create} from 'zustand';

// init all global state
export const globalBaseState = props => {
  return {
    toastRef: props?.toastRef ?? null,
    isLoading: props?.isLoading ?? true,
    modalMessage: props?.modalMessage ?? '',
    modalTitle: props?.modalTitle ?? '',
    modalIcon: props?.modalIcon ?? '',
    showModal: props?.showModal ?? false,
    modalConfirmationMessage: props?.modalConfirmationMessage ?? '',
    modalConfimationTitle: props?.modalConfimationTitle ?? '',
    modalConfimationIcon: props?.modalConfimationIcon ?? '',
    showConfirmationModal: props?.showConfirmationModal ?? false,
    modalConfirmationOk: props?.modalConfirmationOk ?? null,
  };
};
export const globalStore = create(set => globalBaseState());

// function for set value global state
export const setterGlobalState = {
  toastRef: (value = null) => globalStore.setState({toastRef: value}),
  isLoading: (value = false) => globalStore.setState({isLoading: value}),
  showModal: (value = false) => globalStore.setState({showModal: value}),
  modalMessage: (value = '') => globalStore.setState({modalMessage: value}),
  modalTitle: (value = '') => globalStore.setState({modalTitle: value}),
  modalIcon: (value = '') => globalStore.setState({modalIcon: value}),
  showConfirmationModal: (value = false) =>
    globalStore.setState({showConfirmationModal: value}),
  modalConfimationTitle: (value = '') =>
    globalStore.setState({modalConfimationTitle: value}),
  modalConfirmationMessage: (value = '') =>
    globalStore.setState({modalConfirmationMessage: value}),
  modalConfimationIcon: (value = '') =>
    globalStore.setState({modalConfimationIcon: value}),
  modalConfirmationOk: (value = null) =>
    globalStore.setState({
      modalConfirmationOk: value,
    }),
};

// global toast
export function globalToast({message = '', type = ''}) {
  const toastRef = globalStore.getState().toastRef;

  // check the global toast is not null
  if (toastRef != null) {
    toastRef.current.show(message, {type});
  }
}

// global modal
export function globalModal({
  message = '',
  title = 'ERROR!',
  icon = 'close-circle-outline',
}) {
  setterGlobalState.modalIcon(icon);
  setterGlobalState.modalTitle(title);
  setterGlobalState.modalMessage(message);
  setterGlobalState.showModal(true);
}

// global modal with button confirmation
export function globalModalConfirmation({
  action,
  message = '',
  title = 'CONFIRM',
  icon = 'alert-circle-outline',
}) {
  setterGlobalState.modalConfimationIcon(icon);
  setterGlobalState.modalConfimationTitle(title);
  setterGlobalState.modalConfirmationMessage(message);
  setterGlobalState.modalConfirmationOk(action);
  setterGlobalState.showConfirmationModal(true);
}

// toast props
export const toastProps = {
  placement: {
    bottom: 'bottom',
    top: 'top',
    center: 'center',
  },
  animationType: {
    slideIn: 'slide-in',
    zoomIn: 'zoom-in',
  },
  type: {
    success: 'success',
    warning: 'warning',
    danger: 'danger',
    normal: 'normal',
  },
};

// format number to currency
export function currencyTransform({num = 0, currency = 'IDR'}) {
  return (
    currency + ' ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  );
}

// get current time
export function getCurrentTime({lang = 'en', type = 'long'}) {
  const date = new Date();
  return {
    time: `${addZero({num: date.getHours()})}:${addZero({
      num: date.getMinutes(),
    })}:${addZero({num: date.getSeconds()})}`,
    day: getDayName({date: date, lang: lang}),
    date: dateTranform({date: date, type: type, lang: lang}),
  };
}

// add leading zero
export function addZero({num = 0}) {
  if (num < 10) {
    return `0${num}`;
  }
  return `${num}`;
}

// get day name
export function getDayName({date = '', lang = 'en'}) {
  let days = [
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

// transform date to human readable
export function dateTranform({
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

  // check params today available
  if (checkIsToDay) {

    // if date is equal today return just time
    if (
      Moment(current).format('yyyy-MM-DD') ==
      Moment(dateFormat).format('yyyy-MM-DD')
    ) {
      fullOfdate = hour + ':' + minutes;
    } else {
      fullOfdate =
        day + ' ' + monthNameTransform(month, type, lang) + ' ' + year;
    }
  } else {
    fullOfdate = day + ' ' + monthNameTransform(month, type, lang) + ' ' + year;
  }
  return fullOfdate;
}

// transform month name
export function monthNameTransform(val, type = 'long', lang = 'en') {
  let longMonth = [
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
  let shortMonth = [
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
