// function add(a:number,b:number):string{
//     return a.toString()+b.toString();
// }
// console.log('add(124,567)', add(124,567
//     ))
// add(5,7)
import { concatenation } from './concatenation';

const button = document.querySelector('button')!;
const input = document.querySelector('input')!;

if (button && input) {
  button.addEventListener('click', () => {
    concatenation(input.value, 'hello!');
  });
}