import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DropDown from '../src';

let list = [];
for (let i = 0; i < 2000; i++) {
  list.push(`User Name ${i}`);
}

storiesOf('DropDown', module)
  .add('simple list', () => (
    <DropDown onSearch={action('search')} onClick={action('selected')} list={list}/>
  ))
  .add('disabled field', () => <DropDown/>);