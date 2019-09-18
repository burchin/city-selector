import React from 'react';

import Style from './style.scss';

interface IProps {
  data: Array<City>;
  onSelect: any;
}

interface City {
  id: string;
  code: string;
  name: string;
}

class CityList extends React.Component<IProps> {

  onSelect = (id: string, name: string) => {
    if (this.props.onSelect) {
      this.props.onSelect(id, name);
    }
  };
  
  render() {
    return (
      <div className={Style.list}>
        {this.props.data.map((item: City) => (
          <div key={item.code} onClick={this.onSelect.bind(this, item.id, item.name)}>
            {item.name}
          </div>
        ))}
      </div>
    );
  }
}

export default CityList;
