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

  render() {
    const assignPres = this.assignPres();
    return (
      <main>
        {assignPres}
      </main>

    );
  }
}


export const mapStateToProps = ({ presidents }) => ({
  presidents
});

export const mapDispatchToProps = dispatch => ({
  fetchPresidents: url => dispatch(fetchPresidents(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(PresContainer);

