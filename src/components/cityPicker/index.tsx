import React from 'react';
import { SearchBar } from 'antd-mobile';
import VirtualList from 'react-tiny-virtual-list';
import Indicator from './indicator';
import IndexNav from './indexNav';

import Style from './style.scss';

interface IProps {
  data: Array<CityList>;
}

interface City {
  code: string;
  name: string;
  pinyin: string;
}

interface CityList {
  initial: string;
  list: Array<City>;
}

interface INavChangeEvent {
  moving: boolean;
  label: string;
}

class CityPicker extends React.Component<IProps> {
  constructor(props) {
    super(props);

    let i: number = 0;
    const listData: Array<object> = [];
    const indexData: Array<string> = [];
    this.props.data &&
      this.props.data.map((item: CityList) => {
        const label: string = item.initial;
        indexData.push(label);
        listData.push({ id: i++, type: 'header', label });

        item.list.map((city: City) => {
          listData.push({ id: i++, type: 'item', label: city.name });
        });
      });

    this.state = {
      indexData,
      listData,
      label: '',
      labelVisiable: false,
      height: 0,
      scrollIndex: 0
    };
  }

  componentDidMount() {
    this.setState({
      height: this.refs['box']['offsetHeight']
    });
  }

  cityList = () => {
    return (
      <VirtualList
        width="100%"
        height={this.state['height']}
        itemCount={this.state['listData'].length}
        itemSize={45} // Also supports variable heights (array or function getter)
        scrollToIndex={this.state['scrollIndex']}
        renderItem={({ index, style }) => {
          const item = this.state['listData'][index];
          return (
            <div
              key={index}
              className={item['type'] === 'header' ? Style.letterItem : Style.listItem}
              style={style}
            >
              {item['label']}
            </div>
          );
        }}
      />
    );
  };

  onChange = (e: INavChangeEvent) => {
    const item: object = this.state['listData'].find((i) => i.label === e.label);
    const index = item == null ? 0 : item['id'];
    this.setState({ label: e.label, labelVisiable: e.moving, scrollIndex: index });
  };

  onSearch = (val:string) => {
    const item: object = this.state['listData'].find((i) => i.label === val);
    const index = item == null ? 0 : item['id'];
    this.setState({ scrollIndex: index });
  };

  public render() {
    return (
      <div ref="box" className={Style.picker}>
        <SearchBar placeholder="Search" maxLength={8} onSubmit={this.onSearch} />
        <div className={Style.list}>{this.cityList()}</div>
        <Indicator visiable={this.state['labelVisiable']} label={this.state['label']} />
        <IndexNav data={this.state['indexData']} onChange={this.onChange} />
      </div>
    );
  }
}

export default CityPicker;
