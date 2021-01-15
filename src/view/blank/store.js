import React from 'react';
import {store} from 'react-easy-state';
export const testString = 'hallo';
export const intTest = 99;

export const state = store({
  testString: '',
  intTest: 0,
});

export const print = () => {
  console.log(state.testString);
};
