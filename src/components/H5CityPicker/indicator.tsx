import React from 'react';

import Style from './style.scss';

interface IProps {
  visiable: boolean;
  label: string;
}

class Indicator extends React.Component<IProps> {
  public render() {
    if (this.props.visiable == false) {
      return null;
    }
    return <div className={Style.indicator}>{this.props.label}</div>;
  }
}

export default Indicator;
