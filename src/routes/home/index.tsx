import React from 'react';

import Style from './style.scss';

import picCity from '~/.assets/images/city.svg';

interface IProps {
  history?: any;
}

class Home extends React.Component<IProps> {
  h5 = () => {
    this.props.history.push('/h5');
  };
  pc = () => {
    this.props.history.push('/pc');
  }
  render() {
    return (
      <div className={Style.box}>
        <img src={picCity} />
        <div>
          <button type="button" className={Style.btn} onClick={this.h5}>
            H5
          </button>
          <button type="button" className={Style.btn}>
            PC
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
