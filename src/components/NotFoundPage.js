import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class NotFoundPage extends React.Component {
  // componentWillMount() {
  //   this.props.history.push('/new-cars/brochure/index-article-v2');
  // }

  render() {
    return (
      <div>
        <h4>
          404 Page Not Found
        </h4>
        <Link to="/"> Go back to homepage </Link>
      </div>
    );
  }
}

NotFoundPage.propTypes = {
  history: PropTypes.object
};

export default NotFoundPage;
