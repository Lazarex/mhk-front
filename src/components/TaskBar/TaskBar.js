/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import './TaskBar.scss';
// import FloatingActionButton from 'material-ui/FloatingActionButton';
// import ContentAdd from 'material-ui/svg-icons/content/add';
// import Dialog from 'material-ui/Dialog';
// import TimePicker from 'material-ui/TimePicker';
// import TimePicker from 'rc-time-picker';
// import 'rc-time-picker/assets/index.css';

import { Modal, Button } from 'antd';
import { TimePicker } from 'antd';
import moment from 'moment';

const format = 'HH:mm:ss';

class TaskBar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.openK = this.openK.bind(this);
    this.openM = this.openM.bind(this);

    this.state = {
      kVisible: false,
      mVisible: false,
    }
  }

  openK() {
    this.setState({
      kVisible: !this.state.kVisible,
    });
  }

  openM() {
    this.setState({
      mVisible: !this.state.mVisible,
    });
  }

  render() {
    const { kVisible, mVisible } = this.state;

    // console.log('popup', popup)
    return (
      <div className="task-bar">
        <div className="task-bar_total">
          <div className="task-bar_total_big">
            100 287
          </div>
          <div className="task-bar_total_small">
            минут всего (10%)
          </div>
        </div>
        <div className="task-bar_add">
          <div
            className="task-bar_add_item"
            onClick={this.openK}
          >
            <i className="task-bar_add_icon" />
            <span>Кират</span>
          </div>
          <div
            className="task-bar_add_item"
            onClick={this.openM}
          >
            <i className="task-bar_add_icon" />
            <span>Медитация</span>
          </div>
        </div>

        <Modal
          title="Счетчик киртана"
          visible={kVisible}
          onOk={this.openK} //todo refact
          onCancel={this.openK}
          cancelText="Отмена"
        >
          <div className="task-bar_counter">
            <TimePicker
              defaultValue={moment('0:0', format)}
              format={format}
              size={'large'}
              placeholder="Введите время"
            />
          </div>
        </Modal>

        <Modal
          title="Счетчик медитации"
          visible={mVisible}
          onOk={this.openM} //todo refact
          onCancel={this.openM}
          cancelText="Отмена"
        >
          <div className="task-bar_counter">
            <TimePicker
              defaultValue={moment('0:0', format)}
              format={format}
              size={'large'}
              placeholder="Введите время"
            />
          </div>
        </Modal>

        <div className="task-bar_log">
          <div className="task-bar_log_item">
            Елена Бестужева, дизайнер (Нью Йорк, США) добавил(а) 30 минут киртана сейчас
          </div>
          <div className="task-bar_log_item">
            Елена Бестужева, дизайнер (Нью Йорк, США) добавил(а) 30 минут киртана сейчас
          </div>
          <div className="task-bar_log_item">
            Елена Бестужева, дизайнер (Нью Йорк, США) добавил(а) 30 минут киртана сейчас
          </div>
        </div>
      </div>
    );
  }
}

TaskBar.propTypes = {
  // children: PropTypes.element
};

export default TaskBar;
