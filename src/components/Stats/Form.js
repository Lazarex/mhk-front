import React from 'react';
import Select from 'react-select';

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

  setPeriod(period) {
    this.setState({ period });
  }

  setTarget(target) {
    this.setState({ target });
  }

  render() {
    return (
      <div className="stats-form form">
        <div className="form_group">
          <div className="form_item _50">
            <Select
              name="stats-form-period"
              value={this.state.period}
              onChange={this.setPeriod}
              options={[
                { value: 'day', label: 'День' },
                { value: 'week', label: 'Неделя' },
                { value: 'month', label: 'Месяц' },
                { value: 'year', label: 'Год' },
              ]}
              searchable={false}
              clearable={false}
              placeholder="Выбрать"
            />
          </div>
          <div className="form_item _50">
            <Select
              name="stats-form-target"
              value={this.state.target}
              onChange={this.setTarget}
              options={[
                { value: 'my', label: 'Моя' },
                { value: 'my 2', label: 'Моя 2' },
              ]}
              searchable={false}
              clearable={false}
              placeholder="Выбрать"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
