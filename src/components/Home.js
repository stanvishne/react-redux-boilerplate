import React from 'react';
import Input from './Input';
import Suggestions from './Suggestions';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log('home-constr');
  }
  render() {
    return (
      <div className="page-container page-home">
        <h1>Home</h1>
        <img src="/media/logo.svg" alt="fg" />
        <Input />
        <Suggestions />
      </div>
    );
  }
}
