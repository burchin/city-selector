import React from 'react';
import { H5CityPicker } from '~/components';
import { city } from '~/.assets/h5_city.json';

import Style from './style.scss';

interface IProps {
  history?: any;
}

class H5Page extends React.Component<IProps> {
  render() {
    return (
      <div className={Style.box}>
        <H5CityPicker data={city}/>
      </div>
    );
  }
}

export default H5Page;
