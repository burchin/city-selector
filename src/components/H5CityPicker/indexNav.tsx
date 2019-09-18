import React from 'react';

import Style from './style.scss';

interface IProps {
  data: Array<string>;
  onChange: any;
}

class IndexNav extends React.Component<IProps> {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      label: ''
    };
  }

  onTouchStart = (e) => {
    if (e.target.tagName !== 'LI') {
      return;
    }

    const x = e.changedTouches[0].clientX;
    const y = e.changedTouches[0].clientY;
    this.setState({ x , label: e.target.textContent}, () => {
      window.addEventListener('touchmove', this.onTouchMove, { passive: false });
      window.addEventListener('touchend', this.onTouchEnd);

      if (this.props.onChange) {
        this.props.onChange({
          moving: true,
          label: this.getIndex(y)
        });
      }
    });
  };

  onTouchMove = (e) => {
    if (e.cancelable) {
      e.preventDefault();
    }

    const label: string = this.getIndex(e.changedTouches[0].clientY);
    if (label !== this.state['label']) {
      this.setState({ label }, () => {
        if (this.props.onChange) {
          this.props.onChange({
            moving: true,
            label
          });
        }
      });
    }
  };

  onTouchEnd = (e) => {
    const label: string = this.getIndex(e.changedTouches[0].clientY);
    window.removeEventListener('touchmove', this.onTouchMove);
    window.removeEventListener('touchend', this.onTouchEnd);

    if (this.props.onChange) {
      this.props.onChange({
        moving: false,
        label
      });
    }
  };

  getIndex = (y: number) => {
    const item = document.elementFromPoint(this.state['x'], y);
    const value = item.textContent;

    if (!item || !item.getAttribute('data-value')) {
      return '';
    }
    return value;
  };

  public render() {
    return (
      <ul className={Style.nav} onTouchStart={this.onTouchStart}>
        {this.props.data &&
          this.props.data.map((item) => (
            <li key={item} className={Style.item} data-value={item}>
              {item}
            </li>
          ))}
      </ul>
    );
  }
}

export default IndexNav;
