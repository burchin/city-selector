import React from 'react';
import { CityPicker } from '~/components';
import { city } from '~/.assets/h5_city.json';

import Style from './style.scss';

interface IProps {
  history?: any;
}

class H5List extends React.Component<IProps> {
  render() {
    return (
      <div className={Style.box}>
        <CityPicker data={city}/>
      </div>
    );
  }
}

export default H5List;
