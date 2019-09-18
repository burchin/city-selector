import React from 'react';
import { Input, Tabs } from 'antd';
import CityList from './cityList';

import Style from './style.scss';

interface IProps {
  data: Array<object>;
}

class PcCityPicker extends React.Component<IProps> {
  constructor(props) {
    super(props);
    const panes = [
      {
        key: '1',
        id: '-1',
        title: '请选择',
        closable: false,
        content: <CityList data={this.props.data['-1']} onSelect={this.onSelect.bind(this)} />
      }
    ];

    this.state = {
      label: '请选择',
      listVisiable: false,
      activeKey: panes[0].key,
      panes
    };
  }

  showList = (listVisiable: boolean) => {
    this.setState({ listVisiable });
  };

  onChange = (activeKey: string) => {
    this.setState({ activeKey });
  };

  onSelect = (id: string, name: string) => {
    let panes = this.state['panes'];
    const pane = panes.find((i) => i.key == this.state['activeKey']);
    pane['title'] = name;
    panes = panes.slice(0, parseInt(pane.key));

    if (this.props.data[id]) {
      panes.push({
        key: `${panes.length + 1}`,
        id,
        title: '请选择',
        closable: false,
        content: <CityList data={this.props.data[id]} onSelect={this.onSelect.bind(this)} />
      });
    } else {
      const label: Array<string> = [];
      panes.map((item) => {
        label.push(item.title);
      });
      this.setState({ label: label.join('/'), listVisiable: false });
    }

    this.setState({ panes, activeKey: `${panes.length}` });
  };

  render() {
    return (
      <div className={Style.picker}>
        <Input placeholder={this.state['label']} onFocus={this.showList.bind(this, true)} />
        <div
          className={Style.selector}
          style={{ display: this.state['listVisiable'] ? '' : 'none' }}
        >
          <Tabs
            activeKey={this.state['activeKey']}
            type="editable-card"
            hideAdd={true}
            onChange={this.onChange}
          >
            {this.state['panes'].map((pane) => (
              <Tabs.TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                {pane.content}
              </Tabs.TabPane>
            ))}
          </Tabs>
        </div>
      </div>
    );
  }
}

export default PcCityPicker;
