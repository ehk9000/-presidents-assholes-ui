import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPresidents } from '../../thunks/fetchPresidents';
import PresDetails from '../../components/PresDetails/PresDetails';
import './PresContainer.scss';

class PresContainer extends Component {

  componentDidMount() {
    const url = 'http://localhost:3001/api/v1/presidents';
    this.props.fetchPresidents(url);
  }

  assignPres = () => {
    let assignPres;
    let { presidents } = this.props;
    assignPres = presidents.map(president => {
      return <PresDetails {...president} key={president.number}/>
    });
    return assignPres
  }

  displayLoading = () => {
    let displayLoading;
    let { isLoading} = this.props;
    if(isLoading) {
      displayLoading = <p>Loading...</p>
    } 
    return displayLoading
  }

  render() {
    const assignPres = this.assignPres();
    const displayLoading = this.displayLoading();
    return (
      <main>
        {displayLoading}
        {assignPres}
      </main>

    );
  }
}


export const mapStateToProps = ({ presidents, isLoading, error }) => ({
  presidents,
  isLoading,
  error
});

export const mapDispatchToProps = dispatch => ({
  fetchPresidents: url => dispatch(fetchPresidents(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(PresContainer);

