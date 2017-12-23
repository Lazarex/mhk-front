import React from 'react';
// import Select from 'react-select';
// import SelectField from 'material-ui/SelectField';
// import MenuItem from 'material-ui/MenuItem';
import { Select } from 'antd';
const Option = Select.Option;

class Form extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.setPeriod = this.setPeriod.bind(this);
    this.setTarget = this.setTarget.bind(this);

    this.state = {
      period: '',
      target: '',
    }
  }

  setPeriod(event, index, period) {
    this.setState({ period });
  }

  setTarget(event, index, target) {
    this.setState({ target });
  }

  render() {
    return (
      <div className="stats-form form">
        <div className="form_group">
          <div className="form_item _50">
            <Select defaultValue="lucy" size={'large'} onChange={this.setPeriod}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>Disabled</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
          <div className="form_item _50">
            <Select defaultValue="lucy" size={'large'} onChange={this.setPeriod}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>Disabled</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
