import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesBars, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';
import CityMap from './../components/city-map';

class WeatherList extends Component {
  renderCityData() {
    return this.props.weatherData.map( cityData => {
      return (
        <tr key={cityData.city.name}>
         <td><CityMap key={cityData.city.name} data={cityData.city}/></td>
         <td>{this.renderChart(cityData, 'temp', 'red')}</td>
         <td>{this.renderChart(cityData, 'pressure', 'blue')}</td>
         <td>{this.renderChart(cityData, 'humidity', 'green')}</td>
        </tr>
      );
    });
  }

  renderChart(cityData, type, color) {
    let dataArr =[], average;
    if(type === 'temp') {
      dataArr = cityData.list.map(cur => cur.main.temp);
      average = Math.round(_.sum(dataArr) / dataArr.length) + ' °F';
    } else if(type === 'pressure') {
      dataArr = cityData.list.map(cur => cur.main.pressure);
      average = Math.round(_.sum(dataArr) / dataArr.length) + ' hPa';
    } else if(type === 'humidity') {
      dataArr = cityData.list.map(cur => cur.main.humidity);
      average = Math.round(_.sum(dataArr) / dataArr.length) + ' %';
    }


    return (
      <div>
        <Sparklines data={dataArr} svgWidth={180} svgHeight={120}>
              <SparklinesLine color={color} />
              <SparklinesReferenceLine type="mean" />
        </Sparklines>
        <div>Average: {average}</div>
      </div>
    );
  }

  render() {
    return (

        <table className='table table-hover'>
         <thead>
           <tr >
             <th> City </th>
             <th> Temprature (°F) </th>
             <th> Pressure (hPa)</th>
             <th> Humidity (%)</th>
           </tr>
         </thead>
         <tbody>
            {this.renderCityData()}
         </tbody>
        </table>

    );
  }
};

const mapStateToProps = state => {
  return {
    weatherData: state.weatherData
  }
};

export default connect(mapStateToProps)(WeatherList);
