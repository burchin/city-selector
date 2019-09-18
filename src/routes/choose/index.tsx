import React from 'react';

import Style from './style.scss';

interface IProps {
  history?: any;
}

class Choose extends React.Component<IProps> {
  choose = () => {
    this.props.history.push('/list');
  };
  public render() {
    return (
      <div className={Style.box}>
        <div>请选择城市</div>
        <div className={Style.input} onClick={this.choose}>
          null
        </div>
      </div>
    );
  }
}

export default Choose;
