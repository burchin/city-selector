import React from 'react';
import { CityPicker } from '~/components';
import { city } from '~/.assets/city.json';

import Style from './style.scss';

interface IProps {
  history?: any;
}

class List extends React.Component<IProps> {

  public render() {
    return (
      <div className={Style.box}>
        <CityPicker data={city}/>
      </div>
    );
  }
}

export default List;
