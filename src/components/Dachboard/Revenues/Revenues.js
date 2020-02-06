import React, { Component } from 'react';
import classes from './Revenues.css';
import Wallet from './Wallet/Wallet';
import CalendarAndChart from './CalendarAndChart/CalendarAndChart';
import RevenueHistory from './RevenueHistory/RevenueHistory';
import { CustomerService, ChartBar } from '@carbon/pictograms-react';
import { Calendar16, ChartPie16 } from '@carbon/icons-react';
import { connect } from 'react-redux';
import { renderingData } from '../../../redux/actions';

class Revenues extends Component {

  render() {

    const {
      arrData
    } = this.props;
    console.log(arrData);

    return (
      <div className={classes.Revenues}>
        <div className={classes.RevenuesBlock}>
          {arrData && arrData.map(item => (
            <Wallet
              name={item.name}
              image={item.image === 'CustomerService' 
                ? <CustomerService style={{ width: '100%', height: '100%' }} /> 
                : <ChartBar style={{ width: '100%', height: '100%' }} />}
              money={item.money}
              LinkText={item.LinkText}
            />

          ))}
          <RevenueHistory />
          <div>
            <CalendarAndChart> <Calendar16 style={{ fill: '#fff', margin: 'auto' }} /> </CalendarAndChart>
            <CalendarAndChart> <ChartPie16 style={{ fill: '#fff', margin: 'auto' }} /> </CalendarAndChart>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    arrData: state
  }
};

const mapDispatchToProps = dispatch => {
  return {
    testAction: () => (dispatch(renderingData()))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Revenues);