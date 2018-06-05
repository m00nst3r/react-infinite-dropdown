import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import DropDown from '../src';

storiesOf('DropDown', module)
  .add('simple list', () => (
    <DropDown onClick={action('selected')} list={['1', '2', '3']}/>
  ))
  .add('disabled field', () => <DropDown/>);