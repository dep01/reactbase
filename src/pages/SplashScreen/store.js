import create from 'zustand';

export default create(set => ({
  checkLogin: () => {
    console.log('Test');
  },
}));
