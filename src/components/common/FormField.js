import React from 'react';
import { FormGroup, FormControl, HelpBlock, Row, Col } from 'react-bootstrap';

// Form field component
export default class FormField extends React.Component {
  // the field content
  content() {
    const { label } = this.props;
    return (
      <Row>
        <Col sm={3}>{label}</Col>
        <Col sm={9}>{this.field()}</Col>
      </Row>
    );
  }

  // the field itself
  field() {
    const {
      input,
      componentClass,
      type,
      placeholder,
      children
    } = this.props;
    return (
      <FormControl {...input} componentClass={componentClass} type={type} placeholder={placeholder}>
        {children}
      </FormControl>
    );
  }

  render() {
    const { className, doValidate, meta } = this.props;
    if (doValidate) {
      return (
        <FormGroup
          className={className}
          validationState={!meta.touched ? null : (meta.error ? 'error' : 'success')}
        >
          {this.content()}
          <FormControl.Feedback />
          <HelpBlock>
            {meta.touched && meta.error ? meta.error : null}
          </HelpBlock>
        </FormGroup>
      );
    }
    return (
      <FormGroup className={className} >
        {this.content()}
      </FormGroup>
    );
  }
}

