import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPresidents } from '../../thunks/fetchPresidents';

class PresContainer extends Component {

  componentDidMount() {
    const url = 'http://localhost:3001/api/v1/presidents';
    this.props.fetchPresidents(url)
  }

  assignPres = () => {
    let { presidents } = this.props
  
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
})

export default connect(mapStateToProps, mapDispatchToProps)(PresContainer);

