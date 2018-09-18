'use strict'

import React from 'react';
import { render } from 'react-dom';

console.log('The server is available!');

import Grid from './grid';

render(<Grid />, document.getElementById('app'));

