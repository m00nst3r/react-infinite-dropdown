import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import DropDown from '../src';

storiesOf('DropDown', module)
  .add('test', () => (
    <DropDown onClick={action('selected')} list={['1', '2', '3']}/>
  ));