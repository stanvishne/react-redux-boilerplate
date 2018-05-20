import React from 'react';
import { connect } from 'react-redux';
import { loadNsiSagaAction } from './../sagas/nsi';

const mapStateToProps = ({ input }) => ({
  value: input
});

const mapActionsToProps = dispatch => ({
  onChange: value => dispatch({
    type: 'INPUT_CHANGED',
    payload: value
  }),
  onLoadNsi: () => dispatch(loadNsiSagaAction())
});

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.onchange = this.onchange.bind(this);
  }
  componentDidMount() {
    this.props.onLoadNsi();
  }
  onchange(e) {
    this.props.onChange(e.target.value);
  }
  render() {
    const { value } = this.props;
    return (
      <input onChange={this.onchange} value={value} />
    );
  }
}


export default connect(mapStateToProps, mapActionsToProps)(Input);
