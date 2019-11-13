#!/usr/bin/env node
import { actual } from '..';
console.log('Welcome to the Brain Games!');
const name = actual('May i have you name?');
console.log(`Hello, ${name}!`);