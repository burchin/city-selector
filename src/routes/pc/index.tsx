import React from 'react';
import { PcCityPicker } from '~/components';
import { city } from '~/.assets/pc_city.json';

import Style from './style.scss';

interface IProps {
  history?: any;
}

class PCPage extends React.Component<IProps> {
  render() {
    return (
      <div className={Style.box}>
        <PcCityPicker data={city} />
      </div>
    );
  }
}

export default PCPage;
