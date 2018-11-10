import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import fib, {getFibanocciArr, getEvenSum} from './js/Fibanocci.js';
import { es6_sort, bubble_sort } from './js/Sorting';
import base_converted from './js/BaseValConvert';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('checking fib series array value 100', () => {
  expect(getFibanocciArr(4)).toEqual(5);
});

it('checking fib series array value 10', () => {
  expect(getFibanocciArr(10)).toEqual(89);
});

it('checking fib even series sum for value 100', () => {
  expect(getEvenSum()).toEqual(927360983828905000000);
});

it('bubble sort', () => {
  expect(bubble_sort()).toEqual([1,2,3,4,5,6]);
});

it('base conversion', () => {
  expect(base_converted(1000, 10, 11)).toEqual('82A');
});

it('base conversion', () => {
  expect(base_converted(84584868496, 10, 30)).toEqual('3Q0PMR6G');
});
