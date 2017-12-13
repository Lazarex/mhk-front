/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import './TaskBar.scss';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class TaskBar extends React.Component {
  render() {
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
          <div className="task-bar_add_item">
            <FloatingActionButton mini={true} backgroundColor="#00a99d">
              <ContentAdd />
            </FloatingActionButton>
            <span>Кират</span>
          </div>
          <div className="task-bar_add_item">
            <FloatingActionButton mini={true} backgroundColor="#00a99d">
              <ContentAdd />
            </FloatingActionButton>
            <span>Медитация</span>
          </div>
        </div>

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
