import {store} from 'react-easy-state';
import {Alert} from 'react-native';
import {genmodel} from '../../../genmodel';
import {global_state} from '../../utils/global_store';

const Convert = require('../../model/productModel');
const dummies = [
  {
    id: '1',
    code: 'I289231',
    name: 'Desain 2',
    price: [
      {
        location: '1',
        price: 400,
      },
      {
        location: '2',
        price: 666,
      },
    ],
  },
  {
    id: '2',
    code: 'I289231',
    name: 'hahah',
    price: null,
  },
];
const dummi = [
  {
    kelas: 2,
    nama: 'mulyadi',
    delete: true,
    ortu: [
      {
        nama: 'anu',
        kandung: true,
        suamu: {ada: true, rumah: [{alamat: 'jasvhcasnc '}]},
      },
    ],
  },
];
export const state = store({
  loading: true,
  count: 0,
  isMinus: false,
});
export async function initialized() {
  global_state.setLoading(true);
  const x = Convert.listOfProductModel(dummies);
  genmodel(dummi, 'Kelas');
  console.log(x[1].price);
  setTimeout(() => {
    global_state.setLoading(false);
  }, 1500);
}
export function cleanUp() {
  state.loading = false;
  state.count = 0;
  state.isMinus = false;
}
export function NavigateBlank({navigation}) {
  navigation.navigate('blank');
}
export function PlusAction() {
  state.count++;
  global_state.toast?.current.show(state.count);
}
export function MinAction() {
  if (state.count > 0) {
    state.count--;
    global_state.toast?.current.show(state.count);
  } else {
    if (state.isMinus) {
      state.count--;
      global_state.toast?.current.show(state.count);
    } else {
      Alert.alert('Warning', 'Value is 0', [
        {
          text: 'close',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ]);
    }
  }
}
export function AllowMinus() {
  if (state.count < 0) {
    state.isMinus = !state.isMinus;
    state.count = 0;
  } else {
    state.isMinus = !state.isMinus;
  }
}
export function TestLoading() {
  global_state.setLoading(true);
  setTimeout(() => {
    global_state.setLoading(false);
  }, 1850);
}
