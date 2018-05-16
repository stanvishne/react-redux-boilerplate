import React from "react";
import { connect } from "react-redux";
import { ProgressBar } from "react-bootstrap";
import Menu from "./common/Menu";
import "../stylesheets/main.scss";
import GlobalModal from "./common/GlobalModal";
// App component
export class App extends React.Component {
  // pre-render logic
  componentWillMount() {
    // the first time we load the app, we need that users list
   // this.props.dispatch({type: 'USERS_FETCH_LIST'});
  }

  // render
  render() {
    // show the loading state while we wait for the app to load
    const {users, children} = this.props;
    

    // render
    return (
      <div className="easapr-demo">
        <div>
          <Menu/>
        </div>
        <GlobalModal/>
        <div>
          {children}
        </div>
        <div className="footer">
          <div>EASAPR - DEMO</div>
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
