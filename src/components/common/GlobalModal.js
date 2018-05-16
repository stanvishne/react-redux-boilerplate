import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { modalContentComponents } from './../../common/modalMapper';

function mapStateToProps(state) {
  const { modal = {} } = state;
  return {
    show: modal.show,
    data: modal.data
  };
}

class GlobalModal extends React.Component {
  okAction() {
    const { okButtonAction } = this.props.data;
    okButtonAction();
    this.closeModal();
  }
  closeModal() {
    this.props.dispatch({
      type: 'HIDE_MODAL'
    });
  }

  render() {
    const { show, data = {} } = this.props;
    const {
      content = null, msg = '', title = '', okButtonAction = false, okButtonText = 'Save'
    } = data;
    const ComponentToRender = modalContentComponents[content];
    return (
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {ComponentToRender ? <ComponentToRender /> : msg}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.closeModal()}>Close</Button>
          {okButtonAction && <Button onClick={() => this.okAction()} bsStyle="primary">{okButtonText}</Button>}
        </Modal.Footer>
      </Modal>
    );
  }
}

export default connect(mapStateToProps)(GlobalModal);
