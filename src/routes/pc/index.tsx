import React from 'react';
import { city } from '~/.assets/pc_city.json';

import Style from './style.scss';

interface IProps {
  history?: any;
}

class PCPage extends React.Component<IProps> {
  render() {
    return (
      <div className={Style.box}>
      </div>
    );
  }
}

export default PCPage;
