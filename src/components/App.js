import React from 'react';
import { connect } from 'react-redux';
import Menu from './common/Menu';
import '../stylesheets/main.scss';
import GlobalModal from './common/GlobalModal';

export class App extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="start-app">
        <div>
          <Menu />
        </div>
        <GlobalModal />
        <div>
          {children}
        </div>
        <div className="footer">
          <div>FOOTER</div>
        </div>
      </div>
    );
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
    users: state.users || [],
  };
}
export default connect(mapStateToProps)(App);
