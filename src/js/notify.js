import { error, Stack } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';

const myStack = new Stack({
  dir1: 'up',
  dir2: 'right',
  firstpos1: 25,
  firstpos2: 25,
  spacing1: 36,
  spacing2: 36,
  push: 'bottom',
  context: document.body,
});

export function onAlert() {
  error({
    title: 'Too many matches found!',
    text: 'Please, enter a more specific query.',
    width: '300px',
    delay: 1000,
    icon: false,
    closer: false,
    sticker: false,
    stack: myStack,
  });
}
