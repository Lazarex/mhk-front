import React from 'react';
// import Select from 'react-select';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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
            <SelectField
              value={this.state.period}
              onChange={this.setPeriod}
              floatingLabelText="Период"
            >
              {[
                <MenuItem key={1} value={1} primaryText="Неделя" />,
                <MenuItem key={2} value={2} primaryText="Месяц" />,
                <MenuItem key={3} value={3} primaryText="Год" />,
              ]}
            </SelectField>
          </div>
          <div className="form_item _50">
            <SelectField
              value={this.state.target}
              onChange={this.setTarget}
              floatingLabelText="Статистика"
            >
              {[
                <MenuItem key={1} value={1} primaryText="Моя" />,
                <MenuItem key={2} value={2} primaryText="Моя 2" />,
                <MenuItem key={3} value={3} primaryText="Моя 3" />,
              ]}
            </SelectField>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
