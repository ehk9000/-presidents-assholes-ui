import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchPresidents } from '../thunks/fetchPresidents';

class App extends Component{
  componentDidMount() {
    const url = 'http://localhost:3001/api/v1/presidents';
    this.props.fetchPresidents(url)
  }
  render() {
    return (
      <div className="App">
  
      </div>
    );
  }
}

export const mapStateToProps = ({presidents}) => ({
  presidents
});

export const mapDispatchToProps = dispatch => ({
  fetchPresidents: url => dispatch(fetchPresidents(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
