import React, { Component } from 'react';
import './style.css';
import { firstRequest } from '../../action_creators';
import { connect } from 'react-redux';

class First extends Component {
  componentDidMount() {
    this.props.firstRequest();
  }

  render() {
    if (this.props.data) {
      const { data } = this.props;
      return (
        <ul className='full-first'>
          {data.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );
    } else {
      return (<div className='first-no-data'>Данных нет в первом компоненте</div>)
    }
  }
}

const mapStateToProps = state => ({
  data: state.common.firstData
});

const mapDispatchToProps = dispatch => ({
  firstRequest: () => dispatch(firstRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(First);
