import React, { Component } from 'react';
import './style.css';
import { secondRequest } from '../../action_creators';
import { connect } from 'react-redux';

class Second extends Component {
  componentDidMount() {
    this.props.secondRequest();
  }
  render() {
    if (this.props.data) {
      const { data } = this.props;
      return (
        <ul className='full-second'>
          {data.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );
    } else {
      return (<div className='second-no-data'>Данных нет во втором компоненте</div>)
    }
  }
}

const mapStateToProps = state => ({
  data: state.secondState.data
});

const mapDispatchToProps = dispatch => ({
  secondRequest: () => dispatch(secondRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(Second);
