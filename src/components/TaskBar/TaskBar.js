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
    this.showModal = this.showModal.bind(this);

    this.state = {
      visible: null,
    }
  }

  showModal(visible) {
    this.setState({
      visible: visible || null,
    });
  }

  render() {
    const { visible } = this.state;

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
            onClick={() => this.showModal('k')}
          >
            {/*<FloatingActionButton mini={true} backgroundColor="#00a99d">*/}
              {/*<ContentAdd />*/}
            {/*</FloatingActionButton>*/}
            <span>Кират</span>
          </div>
          <div
            className="task-bar_add_item"
            onClick={() => this.showModal('m')}
          >
            {/*<FloatingActionButton mini={true} backgroundColor="#00a99d">*/}
              {/*<ContentAdd />*/}
            {/*</FloatingActionButton>*/}
            <span>Медитация</span>
          </div>

        </div>

        <Modal

          title="Basic Modal"
          visible={!!this.state.visible}
          onOk={() => this.showModal(null)} //todo refact
          onCancel={() => this.showModal(null)}
        >
          Счетчик {visible === 'k' ? 'Кират' : 'Медитация'}

          <TimePicker defaultValue={moment('12:08', format)} format={format} />
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
