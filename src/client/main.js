import React from 'react';
import imgHello from './hello.gif';
import imgIcon from './icon.png';
import './main.less';

export default () =>
  <div className="hello">
    Hello world!
    <img src={imgHello} width="300px" alt="hello world" />
    <img src={imgIcon} role="presentation" />
  </div>;
