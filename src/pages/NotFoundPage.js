import React from 'react';
import { connect } from 'react-redux';

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h1>Page Not Found</h1>
        <p>The page you are looking for doesn't exist.</p>
      </div>
    );
  }
}

export default connect((state, ownProps) => ({}))(NotFound);
